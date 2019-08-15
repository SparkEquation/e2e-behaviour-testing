import { Given } from "cypress-cucumber-preprocessor/steps";
import { PageObjectSelector } from '../types';
import { PageObjectFieldType } from '../../pageObjectRegistrator';
import { LogInRole } from '../../util/models';


export function register () {
    Given(`I logged in at {string} as {string}`, (navigationSelectorString: string, roleSelectorString: string) => {
        const navigationSelector = new PageObjectSelector(navigationSelectorString);
        const roleSelector = new PageObjectSelector(roleSelectorString);

        const url = navigationSelector.getValue();
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
        });

    });
}
