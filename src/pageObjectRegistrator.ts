import 'reflect-metadata';

export const storage = new Map();

export interface IPageObjectFieldDescription {
    invokable: boolean;
    type: PageObjectFieldType
}

const metadataTypeKey: string = 'PageObjectFieldType';
const metadataInvokableKey: string = 'PageObjectFieldInvokable';

// Keys should be the same as values to allow following typecheck: keyof typeof PageObjectFieldType
export enum PageObjectFieldType {
    Selector = 'Selector',
    // TODO implement
    Xpath = 'Xpath',
    // Cypress chainable
    Action = 'Action'
}

export function registerPageObject<T extends {new(...args:any[]):{}}>(name: string) {
    // TODO replace any with valid type
    return (constructor: T) =>  {
        const classInstance = new class C extends constructor {
            public getFieldDescriptor(key: keyof C): IPageObjectFieldDescription {
                return {
                    invokable: Reflect.getMetadata(metadataInvokableKey, this, key),
                    type: Reflect.getMetadata(metadataTypeKey, this, key)
                }
            }
        };

        if (storage.has(name)) {
            throw new Error(`Detected page object with duplicate name ${ name }`);
        }
        storage.set(name, classInstance);
    };
}

export function register(type: PageObjectFieldType | keyof typeof PageObjectFieldType) {
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
