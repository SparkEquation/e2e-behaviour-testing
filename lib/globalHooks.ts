import { PageObjectField, registerPageObject } from '../src';
import { CredentialsObject } from '../src/functions';

function extractCredentials(credentials: CredentialsObject) {
    @registerPageObject({ name: 'Credentials', type: PageObjectField.RoleCredentials })
    class Credentials {
        constructor () {
            if (credentials) {
                Object.entries(credentials).forEach(([key, value]) => {
                    this[key] = value;
                })
            }
        }
    }
}

export function register() {
    before(() => {
        cy.log('Before hook to add credentials');
        const credentials: CredentialsObject = Cypress.env('credentials') || {};
        extractCredentials(credentials);
    });

    beforeEach(() => {
        cy.log('Before each navigating to blank page');
        const urlToVisit = Cypress.env('startUrl') || '/';
        cy.visit(urlToVisit);
    });
}
