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

export function register() {
    When(`I type {string} into element {string}`, (text: string, selectorString: string) => {
        const selector = new PageObjectSelector(selectorString);
        let element: CypressSavedElement = getElement(selector);

        if (element === null) {
            return;
        }

        cy.get(element)
            .scrollIntoView()
            .should('be.visible')
            .type(`${text}{enter}`)
    })
}
