import { When } from "cypress-cucumber-preprocessor/steps";
import { PageObjectSelector } from '../types';
import { CypressSavedElement, getElement } from '../../src/util/functions';

export function register() {
    const clickElement = async (force: boolean, selectorString: string) => {
        const selector = new PageObjectSelector(selectorString);
        let element: CypressSavedElement = getElement(selector);

        if (element === null) {
            return;
        }

        cy.get(element).click({ force });
    };

    When(`I click {string}`, clickElement.bind(null, false));

    When(`I force click {string}`, clickElement.bind(null, true));
}
