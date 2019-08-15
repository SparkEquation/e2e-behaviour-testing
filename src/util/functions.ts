import { PageObjectSelector } from '../gherkinFunctions/types';
import { PageObjectFieldType } from '../pageObjectRegistrator';

export type CypressSavedElement = string;

const getElementAlias: CypressSavedElement = 'getElement';

export function getElement (selector: PageObjectSelector): CypressSavedElement | null {
    let element: CypressSavedElement | null = '@' + getElementAlias;

    switch (selector.fieldDescriptor.type) {
        case PageObjectFieldType.Contains:
            cy.contains(selector.getValue()).as(getElementAlias);
            break;
        case PageObjectFieldType.Selector:
            cy.get(selector.getValue()).as(getElementAlias);
            break;
        case PageObjectFieldType.Action:
            selector.getValue();
            element = null;
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
        case PageObjectFieldType.Action:
            url = selector.getValue();
            break;
        default:
            throw new Error(`Incorrect field type: '${selector.fieldDescriptor.type}' when trying to get URL by selector '${selector.toString()}' `);
    }

    return url;
}
