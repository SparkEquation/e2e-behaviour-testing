import { IPageObjectFieldDescription, IPageObjectMetadata } from '../src/pageObjectRegistrator';
export declare class PageObjectSelector {
    classInstance: IPageObjectMetadata;
    fieldDescriptor: IPageObjectFieldDescription;
    className: string;
    fieldName: string;
    constructor(pageObjectSelector: string);
    getValue(): any;
    toString(): string;
}
export declare function register(): void;
