export const storage = new Map<string, IPageObjectMetadata>();

export interface IPageObjectFieldDescription {
    invokable: boolean;
    type: PageObjectFieldType
}

export interface IPageObjectMetadata {
    getFieldDescriptor(key: string): IPageObjectFieldDescription
}


const metadataTypeKey: string = 'PageObjectFieldType';
const metadataInvokableKey: string = 'PageObjectFieldInvokable';

// Keys should be the same as values to allow following typecheck: keyof typeof PageObjectFieldType
export enum PageObjectFieldType {
    Selector = 'Selector',
    Contains = 'Contains',
    // TODO implement
    Xpath = 'Xpath',
    Navigation = 'Navigation',
    // Cypress chainable
    Action = 'Action',
    RoleCredentials = 'RoleCredentials'
}

export function registerPageObject<T extends {new(...args:any[]):{}}>(name: string) {
    // TODO replace any with valid type
    return (constructor: T) =>  {
        const classInstance = new class C extends constructor implements IPageObjectMetadata{
            public getFieldDescriptor(key: keyof C): IPageObjectFieldDescription {
                return {
                    invokable: Reflect.getMetadata(metadataInvokableKey, this, key),
                    type: Reflect.getMetadata(metadataTypeKey, this, key)
                }
            }
        };

        cy.log(`Added ${name}`);

        if (storage.has(name)) {
            throw new Error(`Detected page object with duplicate name ${ name }`);
        }
        storage.set(name, classInstance);
    };
}

export function registerSelector(type: PageObjectFieldType | keyof typeof PageObjectFieldType) {
    return function (target: Object, key: string | symbol, descriptor?: PropertyDescriptor) {
        const invokable = descriptor !== undefined;

        Reflect.defineMetadata(
            metadataTypeKey, type, target,  key
        );
        Reflect.defineMetadata(
            metadataInvokableKey, invokable, target, key
        );
    };
}
