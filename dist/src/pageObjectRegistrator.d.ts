export declare enum PageObjectField {
    Selector = "Selector",
    Xpath = "Xpath",
    Navigation = "Navigation",
    RoleCredentials = "RoleCredentials"
}
export interface IRoleCredentials {
    fieldName: string;
    value: string;
}
export declare type PageObjectFieldType = PageObjectField | keyof typeof PageObjectField;
export declare type LogInRole = Array<IRoleCredentials>;
export interface IPageObjectFieldDescription {
    invokable: boolean;
    type: PageObjectField | null;
}
export interface IPageObjectMetadata {
    getFieldDescriptor(key: string): IPageObjectFieldDescription;
}
export interface IPageObjectParams {
    name: string;
    type?: PageObjectFieldType;
}
export declare function registerPageObject<T extends {
    new (...args: any[]): {};
}>(params: IPageObjectParams | string): (constructor: T) => void;
export declare function registerSelector(type: PageObjectField | keyof typeof PageObjectField): (target: Object, key: string | symbol, descriptor?: PropertyDescriptor | undefined) => void;
export declare const storage: Map<string, IPageObjectMetadata>;
