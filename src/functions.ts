import { ElementGetOptions, GetOptions, PageObjectSelector } from '../lib/types';
import { LogInRole, PageObjectField } from './pageObjectRegistrator';

export type CypressSavedElement = string;
export type CredentialsObject = { [key: string]: LogInRole };

const getElementAlias: CypressSavedElement = 'getElement';

export function getElement(selector: PageObjectSelector, getOptions: GetOptions = {}): CypressSavedElement {
    let element: CypressSavedElement | null = '@' + getElementAlias;

    switch (selector.fieldDescriptor.type) {
        case PageObjectField.Xpath:
            // @ts-ignore
            cy.xpath(selector.getValue(), getOptions).as(getElementAlias);
            break;
        case PageObjectField.Selector:
            const value = selector.getValue();
            if (Array.isArray(value) && typeof value[1]  === 'string') {
                const [ element, contains ] = value;
                cy.contains(element, contains, getOptions).as(getElementAlias);
            } else {
                cy.get(selector.getValue(), getOptions).as(getElementAlias);
            }
            break;
        default:
            throw new Error(`Incorrect field type: '${selector.fieldDescriptor.type}' when trying to see element by selector '${selector.toString()}' `);
    }
    return element;
}

export function getNavigationUrl(selector: PageObjectSelector): string {
    if (selector.fieldDescriptor.type !== PageObjectField.Navigation) {
        throw new Error(`Incorrect field type: '${selector.fieldDescriptor.type}' when trying to get URL by selector '${selector.toString()}' `);
    }
    return selector.getValue();
}

export function extractCommonGetOptions(options: ElementGetOptions): Partial<Cypress.Timeoutable & Cypress.Withinable> {
    const result: Partial<Cypress.Timeoutable & Cypress.Withinable> = {};

    if(options.wait !== null && !isNaN(options.wait)) {
        result.timeout = options.wait;
    }
    return result;
}
