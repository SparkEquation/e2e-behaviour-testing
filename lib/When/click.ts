import { When } from 'cypress-cucumber-preprocessor/steps';
import { BlankLinkClickOptions, ClickOptions, PageObjectSelector } from '../types';
import { CypressSavedElement, extractCommonGetOptions, getElement } from '../../src/functions';
import { TableDefinition } from 'cucumber';

export function register() {
    When(`I click {string}`, async (selectorString: string, table: TableDefinition) => {
        const options = table ? new ClickOptions(table.rowsHash()) : new ClickOptions({});
        const selector = new PageObjectSelector(selectorString);
        let element: CypressSavedElement = getElement(selector);

        const getOptions = extractCommonGetOptions(options);

        if (options.first) {
            cy.get(element, getOptions).first().click({ force: options.force })
        } else {
            cy.get(element, getOptions).click({ force: options.force });
        }
    });

    When(`I click blank link {string}`, (selectorString: string, table: TableDefinition) => {
        const selector = new PageObjectSelector(selectorString);
        const options = table ? new BlankLinkClickOptions(table.rowsHash()) : new BlankLinkClickOptions({});
        let element: CypressSavedElement = getElement(selector);

        const getOptions = extractCommonGetOptions(options);

        const callback = el => {
            if (el.attr('target') === '_blank' && el.attr('href') && !options.customClick) {
                const url: string = el.attr('href') as string;
                if (!options.force) {
                    cy.root().should('be.visible');
                }
                cy.visit(url);
            } else {
                let href;
                let stub;
                cy.window().then(win => {
                    stub = cy.stub(win, 'open').callsFake(passedHref => {
                        href = passedHref;
                    })
                });
                cy.root().click({ force: options.force }).then(() => {
                    expect(stub).to.be.called;
                    cy.visit(href);
                });
            }
        };

        if (options.first) {
            cy.get(element, getOptions).first().within(callback);
        } else {
            cy.get(element, getOptions).within(callback);
        }
    });
}
