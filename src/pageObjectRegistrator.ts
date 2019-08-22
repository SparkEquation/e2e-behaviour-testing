// Keys should be the same as values to allow following typecheck: keyof typeof PageObjectFieldType
export enum PageObjectField {
    Selector = 'Selector',
    Xpath = 'Xpath',
    Navigation = 'Navigation',
    RoleCredentials = 'RoleCredentials'
}

export interface IRoleCredentials {
    fieldName: string;
    value: string;
}

export type PageObjectFieldType = PageObjectField | keyof typeof PageObjectField;
export type LogInRole = Array<IRoleCredentials>;

// Metadata for fields
export interface IPageObjectFieldDescription {
    invokable: boolean;
    type: PageObjectField | null
}

export interface IPageObjectMetadata {
    getFieldDescriptor(key: string): IPageObjectFieldDescription
}

export interface IPageObjectParams {
    name: string;
    type?: PageObjectFieldType
}

const metadataTypeKey: string = 'PageObjectFieldType';
const metadataInvokableKey: string = 'PageObjectFieldInvokable';

export function registerPageObject<T extends {new(...args:any[]):{}}>(params: IPageObjectParams | string) {
    // TODO replace any with valid type
    const name = typeof params === 'string' ? params : params.name;
    const type = params.hasOwnProperty('type') ? (params as IPageObjectParams).type : null;
    return (constructor: T) =>  {
        class MetadataProvider extends constructor implements IPageObjectMetadata{
            public getFieldDescriptor(key: keyof MetadataProvider): IPageObjectFieldDescription {
                if (Reflect.hasMetadata(metadataTypeKey, this, key)) {
                    return {
                        invokable: Reflect.getMetadata(metadataInvokableKey, this, key),
                        type: Reflect.getMetadata(metadataTypeKey, this, key)
                    }
                } else if (Reflect.hasMetadata(metadataTypeKey, this)) {
                    return {
                        type: Reflect.getMetadata(metadataTypeKey, this),
                        invokable: false
                    }
                } else {
                    return {
                        type: null,
                        invokable: false
                    }
                }
            }
        }

        const classInstance = new MetadataProvider();

        if (type !== null) {
            Reflect.defineMetadata(metadataTypeKey, type, MetadataProvider.prototype);
        }

        cy.log(`Added ${name}`);

        if (storage.has(name)) {
            throw new Error(`Detected page object with duplicate name ${ name }`);
        }
        storage.set(name, classInstance);
    };
}

export function registerSelector(type: PageObjectField | keyof typeof PageObjectField) {
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

export const storage = new Map<string, IPageObjectMetadata>();
