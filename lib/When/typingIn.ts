import { When } from 'cypress-cucumber-preprocessor/steps';
import { PageObjectSelector } from '../types';
import { CypressSavedElement, getElement } from '../../src/util/functions';

export function register() {
    When(`I type {string} into element {string}`, (text: string, selectorString: string) => {
        const selector = new PageObjectSelector(selectorString);
        let element: CypressSavedElement = getElement(selector);

        if (element === null) {
            return;
        }

        cy.get(element)
            .scrollIntoView()
            .should('be.visible')
            .type(`${text}{enter}`)
    })
}
