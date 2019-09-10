/*
 * Copyright 2019 Spark Equation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { When } from 'cypress-cucumber-preprocessor/steps';
import { BlankLinkClickOptions, ClickOptions, PageObjectSelector } from '../types';
import { CypressSavedElement, extractCommonGetOptions, getElement } from '../../src/functions';
import { TableDefinition } from 'cucumber';

export function register(): void {
    When(`I click {string}`, async (selectorString: string, table: TableDefinition) => {
        const options = table ? new ClickOptions(table.rowsHash()) : new ClickOptions({});
        const selector = new PageObjectSelector(selectorString);
        const element: CypressSavedElement = getElement(selector);

        const getOptions = extractCommonGetOptions(options);

        if (options.first) {
            cy.get(element, getOptions)
                .first()
                .click({ force: options.force });
        } else {
            cy.get(element, getOptions)
                .click({ force: options.force });
        }
    });

    When(`I click blank link {string}`, (selectorString: string, table: TableDefinition) => {
        const selector = new PageObjectSelector(selectorString);
        const options = table ? new BlankLinkClickOptions(table.rowsHash()) : new BlankLinkClickOptions({});
        const element: CypressSavedElement = getElement(selector);

        const getOptions = extractCommonGetOptions(options);

        const callback = (el): void => {
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
                    });
                });
                cy.root().click({ force: options.force })
                    .then(() => {
                        expect(stub).to.be.called;
                        cy.visit(href);
                    });
            }
        };

        if (options.first) {
            cy.get(element, getOptions).first()
                .within(callback);
        } else {
            cy.get(element, getOptions).within(callback);
        }
    });
}
