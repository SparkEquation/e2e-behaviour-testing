export declare const storage: Map<string, IPageObjectMetadata>;
export interface IPageObjectFieldDescription {
    invokable: boolean;
    type: PageObjectFieldType;
}
export interface IPageObjectMetadata {
    getFieldDescriptor(key: string): IPageObjectFieldDescription;
}
export declare enum PageObjectFieldType {
    Selector = "Selector",
    Contains = "Contains",
    Navigation = "Navigation",
    RoleCredentials = "RoleCredentials"
}
export declare function registerPageObject<T extends {
    new (...args: any[]): {};
}>(name: string): (constructor: T) => void;
export declare function registerSelector(type: PageObjectFieldType | keyof typeof PageObjectFieldType): (target: Object, key: string | symbol, descriptor?: PropertyDescriptor) => void;
export interface IRoleCredentials {
    fieldName: string;
    value: string;
}
export declare type LogInRole = Array<IRoleCredentials>;
