import { When } from "cypress-cucumber-preprocessor/steps";
import { PageObjectSelector } from '../types';
import { CypressSavedElement, getElement } from '../../util/functions';
import { IRoleCredentials, LogInRole } from '../../util/models';

export function register() {
    When(`I log in at {string} as {string}`, async (selectorString: string, roleSelectorString: string) => {
        const elementSelector = new PageObjectSelector(selectorString);
        const roleSelector = new PageObjectSelector(roleSelectorString);

        let element: CypressSavedElement = getElement(elementSelector);
        cy.get(element).within(() => {
            cy.root().should('be.visible');
            const credentials: LogInRole = roleSelector.getValue();
            for (let field of credentials) {
                cy.get(`input[name="${field.fieldName}"]`).type(field.value);
            }

            cy.root().submit();
        });
    });
}
