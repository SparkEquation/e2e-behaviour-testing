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

import { PageObjectField, registerPageObject } from '../src';
import { CredentialsObject } from '../src/functions';

function extractCredentials(credentials: CredentialsObject) {
    @registerPageObject({ name: 'Credentials', type: PageObjectField.RoleCredentials })
    class Credentials {
        constructor () {
            if (credentials) {
                Object.entries(credentials).forEach(([key, value]) => {
                    this[key] = value;
                })
            }
        }
    }
}

export function register() {
    before(() => {
        cy.log('Before hook to add credentials');
        const credentials: CredentialsObject = Cypress.env('credentials') || {};
        extractCredentials(credentials);
    });

    beforeEach(() => {
        cy.log('Before each navigating to blank page');
        const urlToVisit = Cypress.env('startUrl') || '/';
        cy.visit(urlToVisit);
    });
}
