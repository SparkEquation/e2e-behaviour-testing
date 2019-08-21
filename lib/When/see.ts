import { When } from 'cypress-cucumber-preprocessor/steps';
import { PageObjectSelector, SeeOptions } from '../types';
import { CypressSavedElement, extractCommonGetOptions, getElement } from '../../src/util';
import { TableDefinition } from 'cucumber';

export function register() {
    When(`I see (element ){string}`, (selectorString: string, table: TableDefinition) => {
        const options = table ? new SeeOptions(table.rowsHash()) : new SeeOptions({});
        const selector = new PageObjectSelector(selectorString);
        const getOptions = extractCommonGetOptions(options);

        cy.log(JSON.stringify(getOptions));
        cy.log(JSON.stringify(options));

        let element: CypressSavedElement = getElement(selector, getOptions);

        if (element === null) {
            return;
        }

        if (options.amount === 1) {
            cy.get(element)
                .should('have.length', 1)
                .scrollIntoView()
                .should('be.visible');
        } else {
            cy.get(element).then(matchedElements => {
                if (options.amount) {
                    cy.wrap(matchedElements).should('have.length', options.amount);
                }
                cy.wrap(matchedElements).each(matchedElement => {
                    cy.wrap(matchedElement)
                        .scrollIntoView()
                        .should('be.visible')
                })
            })
        }
    })
}
