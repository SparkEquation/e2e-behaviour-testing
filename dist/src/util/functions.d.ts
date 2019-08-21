/// <reference types="cypress" />
import { ElementGetOptions, GetOptions, PageObjectSelector } from '../../lib/types';
export declare type CypressSavedElement = string;
export declare function getElement(selector: PageObjectSelector, getOptions?: GetOptions): CypressSavedElement | null;
export declare function getNavigationUrl(selector: PageObjectSelector): string | null;
export declare function extractCommonGetOptions(options: ElementGetOptions): Partial<Cypress.Timeoutable & Cypress.Withinable>;
