/// <reference types="cypress" />
import { ElementGetOptions, GetOptions, PageObjectSelector } from '../lib/types';
import { LogInRole } from './pageObjectRegistrator';
export declare type CypressSavedElement = string;
export declare type CredentialsObject = {
    [key: string]: LogInRole;
};
export declare function getElement(selector: PageObjectSelector, getOptions?: GetOptions): CypressSavedElement;
export declare function getNavigationUrl(selector: PageObjectSelector): string;
export declare function extractCommonGetOptions(options: ElementGetOptions): Partial<Cypress.Timeoutable & Cypress.Withinable>;
