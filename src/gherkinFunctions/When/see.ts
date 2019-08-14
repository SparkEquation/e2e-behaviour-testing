import { When } from 'cypress-cucumber-preprocessor/steps';
import { PageObjectSelector } from '../types';
import { PageObjectFieldType } from '../../pageObjectRegistrator';

export function register() {
    When(`I see element {string}`, (selectorString: string) => {
        const selector = new PageObjectSelector(selectorString);
        const fieldInfo = selector.classInstance.getFieldDescriptor(selector.fieldName);

        let chainable: Cypress.Chainable;

        switch (fieldInfo.type) {
            case PageObjectFieldType.Contains:
                chainable = cy.contains(selector.getValue(fieldInfo));
                break;
            case PageObjectFieldType.Selector:
                chainable = cy.get(selector.getValue(fieldInfo));
                break;
            case PageObjectFieldType.Action:
                selector.getValue(fieldInfo);
                return;
            default:
                throw new Error(`Incorrect field type: '${fieldInfo.type}' when trying to see element by selector '${selector.toString()}' `)
        }

        chainable.scrollIntoView()
            .should('be.visible');

    })
}
