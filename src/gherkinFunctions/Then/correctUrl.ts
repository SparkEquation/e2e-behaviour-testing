import { Then } from "cypress-cucumber-preprocessor/steps";
import { PageObjectSelector } from '../types';
import { getNavigationUrl } from '../../util/functions';

export function register () {
    Then(`URL is {string}`, (selectorString: string) => {
        const selector = new PageObjectSelector(selectorString);
        const url = getNavigationUrl(selector);

        if (url) {
            cy.url().should('include', `${Cypress.config().baseUrl}/${url}`);
        }
    });
}
