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

import { Given } from 'cypress-cucumber-preprocessor/steps';
import { PageObjectSelector } from '../types';
import { LogInRole } from '../../src';
import { getNavigationUrl } from '../../src/functions';

export function register () {
    const loggedInAsFunction = (apiSelectorString: string, roleSelectorString: string, redirectSelectorString?: string) => {
        const navigationSelector = new PageObjectSelector(apiSelectorString);
        const roleSelector = new PageObjectSelector(roleSelectorString);
        const url = getNavigationUrl(navigationSelector);

        const requestBody = {};
        for (let field of roleSelector.getValue() as LogInRole) {
            requestBody[field.fieldName] = field.value;
        }

        cy.request({
            method: 'POST',
            url,
            form: true,
            body: requestBody,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response).to.have.property('headers');
        });

        if (redirectSelectorString) {
            const redirectSelector = new PageObjectSelector(redirectSelectorString);
            cy.visit(getNavigationUrl(redirectSelector));
        }
    };


    Given(`I logged in at {string} as {string}`, loggedInAsFunction);
    Given(`I logged in at {string} as {string} and visit {string}`, loggedInAsFunction);
}
