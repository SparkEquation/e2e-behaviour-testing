import { Given } from 'cypress-cucumber-preprocessor/steps';
import { PageObjectSelector } from '../types';
import { LogInRole } from '../../src';
import { getNavigationUrl } from '../../src/functions';

export function register () {
    const loggedInAsFunction = (apiSelectorString: string, roleSelectorString: string, redirectSelectorString?: string) => {
        const navigationSelector = new PageObjectSelector(apiSelectorString);
        const roleSelector = new PageObjectSelector(roleSelectorString);
        const url = getNavigationUrl(navigationSelector);

        const requestBody = {};
        for (let field of roleSelector.getValue() as LogInRole) {
            requestBody[field.fieldName] = field.value;
        }

        cy.request({
            method: 'POST',
            url,
            form: true,
            body: requestBody,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response).to.have.property('headers');
        });

        if (redirectSelectorString) {
            const redirectSelector = new PageObjectSelector(redirectSelectorString);
            cy.visit(getNavigationUrl(redirectSelector));
        }
    };


    Given(`I logged in at {string} as {string}`, loggedInAsFunction);
    Given(`I logged in at {string} as {string} and visit {string}`, loggedInAsFunction);
}
