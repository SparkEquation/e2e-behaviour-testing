import { ElementGetOptions, GetOptions, PageObjectSelector } from '../../lib/types';
import { PageObjectFieldType } from '../pageObjectRegistrator';

export type CypressSavedElement = string;

const getElementAlias: CypressSavedElement = 'getElement';

export function getElement (selector: PageObjectSelector, getOptions: GetOptions = {}): CypressSavedElement | null {
    let element: CypressSavedElement | null = '@' + getElementAlias;

    switch (selector.fieldDescriptor.type) {
        case PageObjectFieldType.Contains:
            cy.contains(selector.getValue(), getOptions).as(getElementAlias);
            break;
        case PageObjectFieldType.Selector:
            cy.get(selector.getValue(), getOptions).as(getElementAlias);
            break;
        default:
            throw new Error(`Incorrect field type: '${selector.fieldDescriptor.type}' when trying to see element by selector '${selector.toString()}' `);
    }
    return element;
}

export function getNavigationUrl(selector: PageObjectSelector): string | null {
    let url: string | undefined;

    switch (selector.fieldDescriptor.type) {
        case PageObjectFieldType.Navigation:
            url = selector.getValue();
            break;
        default:
            throw new Error(`Incorrect field type: '${selector.fieldDescriptor.type}' when trying to get URL by selector '${selector.toString()}' `);
    }
    return url;
}

export function extractCommonGetOptions(options: ElementGetOptions): Partial<Cypress.Timeoutable & Cypress.Withinable> {
    const result: Partial<Cypress.Timeoutable & Cypress.Withinable> = {};

    if(options.wait !== null && !isNaN(options.wait)) {
        result.timeout = options.wait;
    }
    return result;
}
