import { When } from "cypress-cucumber-preprocessor/steps";
import { PageObjectSelector } from '../types';
import { CypressSavedElement, getElement } from '../../src/util/functions';

interface IClickOptions {
    force: boolean;
    first: boolean;
}

export function register() {
    const clickElement = async (options: IClickOptions, selectorString: string) => {
        const selector = new PageObjectSelector(selectorString);
        let element: CypressSavedElement = getElement(selector);

        if (element === null) {
            return;
        }

        if (options.first) {
            cy.get(element).first().click({ force: options.force })
        } else {
            cy.get(element).click({ force: options.force });
        }
    };

    When(`I click {string}`, clickElement.bind(null, {force: false, first: false}));

    When(`I force click {string}`, clickElement.bind(null, {force: true, first: false}));

    When(`I click first {string}`, clickElement.bind(null, {force: false, first: true}));
}
