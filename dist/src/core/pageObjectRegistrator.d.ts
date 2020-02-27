import 'reflect-metadata';
export declare const storage: Map<string, IPageObjectMetadata>;
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
    name?: string;
    type?: PageObjectFieldType;
}
declare type ClassType = {
    new (...args: Array<any>): {};
};
declare type ClassTypeWithGeneric<T> = new (...args: Array<any>) => T;
declare type RegisterPOParams = IPageObjectParams | string | undefined;
export declare function createPOWrapperClass<T extends ClassType>(constructor: T): ClassTypeWithGeneric<IPageObjectMetadata>;
export declare function registerPageObject<T extends ClassType>(params: RegisterPOParams): (constructor: T) => void;
export declare function registerSelector(type: PageObjectField | keyof typeof PageObjectField): (target: Record<string, any>, key: string | symbol, descriptor?: PropertyDescriptor | undefined) => void;
export {};
