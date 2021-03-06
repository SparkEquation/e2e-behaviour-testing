/// <reference types="cypress" />
import { IPageObjectFieldDescription, IPageObjectMetadata } from '../src/core';
export declare class PageObjectSelector {
    classInstance: IPageObjectMetadata;
    fieldDescriptor: IPageObjectFieldDescription;
    className: string;
    fieldName: string;
    constructor(pageObjectSelector: string);
    getValue(): any;
    toString(): string;
}
export declare type DataTableRowsHash = {
    [key: string]: string;
};
export declare abstract class ElementGetOptions {
    wait: number | null;
    protected constructor(props: DataTableRowsHash);
}
export declare type GetOptions = Partial<Cypress.Timeoutable>;
export declare class ClickOptions extends ElementGetOptions {
    first: boolean;
    force: boolean;
    constructor(props: DataTableRowsHash);
}
export declare class BlankLinkClickOptions extends ClickOptions {
    customClick: boolean;
    constructor(props: DataTableRowsHash);
}
export declare class SeeOptions extends ElementGetOptions {
    amount: number | null;
    constructor(props: DataTableRowsHash);
}
export declare function register(): void;
