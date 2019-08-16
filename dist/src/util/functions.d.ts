import { PageObjectSelector } from '../gherkinFunctions/types';
export declare type CypressSavedElement = string;
export declare function getElement(selector: PageObjectSelector): CypressSavedElement | null;
export declare function getNavigationUrl(selector: PageObjectSelector): string | null;
