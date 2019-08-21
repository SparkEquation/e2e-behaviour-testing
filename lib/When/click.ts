import { When } from 'cypress-cucumber-preprocessor/steps';
import { ClickOptions, PageObjectSelector } from '../types';
import { CypressSavedElement, extractCommonGetOptions, getElement } from '../../src/util';
import { TableDefinition } from 'cucumber';

export function register() {
    When(`I click {string}`, async (selectorString: string, table: TableDefinition) => {
        const options = table ? new ClickOptions(table.rowsHash()) : new ClickOptions({});
        const selector = new PageObjectSelector(selectorString);
        let element: CypressSavedElement = getElement(selector);

        if (element === null) {
            return;
        }

        const getOptions = extractCommonGetOptions(options);

        if (options.first) {
            cy.get(element, getOptions).first().click({ force: options.force })
        } else {
            cy.get(element, getOptions).click({ force: options.force });
        }
    });
}
