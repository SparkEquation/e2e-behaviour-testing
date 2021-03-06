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
import { PageObjectSelector } from '../types';
import { CypressSavedElement, getElement } from '../../src/core/functions';
import { LogInRole } from '../../src/core/index';

export function register(): void {
    When(`I log in at {string} as {string}`, async (selectorString: string, roleSelectorString: string) => {
        const elementSelector = new PageObjectSelector(selectorString);
        const roleSelector = new PageObjectSelector(roleSelectorString);

        const element: CypressSavedElement = getElement(elementSelector);
        cy.get(element).within(form => {
            cy.root().should('be.visible');
            const credentials: LogInRole = roleSelector.getValue();
            for (const field of credentials) {
                cy.get(`input[name="${field.fieldName}"]`).type(field.value);
            }

            cy.wrap(form).submit();
        });
    });
}
