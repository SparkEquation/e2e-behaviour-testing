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
import { PageObjectSelector, SeeOptions } from '../types';
import { CypressSavedElement, extractCommonGetOptions, getElement } from '../../src/core/functions';
import { TableDefinition } from 'cucumber';

export function register() {
    When(`I see (element ){string}`, (selectorString: string, table: TableDefinition) => {
        const options = table ? new SeeOptions(table.rowsHash()) : new SeeOptions({});
        const selector = new PageObjectSelector(selectorString);
        const getOptions = extractCommonGetOptions(options);

        let element: CypressSavedElement = getElement(selector, getOptions);
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
    });
}
