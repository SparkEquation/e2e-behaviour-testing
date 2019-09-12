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

import { ElementGetOptions, GetOptions, PageObjectSelector } from '../../lib/types';
import { LogInRole, PageObjectField } from './pageObjectRegistrator';
import Bluebird from 'cypress/types/bluebird';

export type CypressSavedElement = string;
export type CredentialsObject = { [key: string]: LogInRole };

const getElementAlias: CypressSavedElement = 'getElement';

export function getElement(selector: PageObjectSelector, getOptions: GetOptions = {}): CypressSavedElement{
    const element: CypressSavedElement | null = '@' + getElementAlias;

    switch (selector.fieldDescriptor.type) {
        case PageObjectField.Xpath:
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            cy.xpath(selector.getValue(), getOptions).as(getElementAlias);
            break;
        case PageObjectField.Selector: {
            const value = selector.getValue();
            if (Array.isArray(value) && typeof value[1]  === 'string') {
                const [ element, contains ] = value;
                cy.contains(element, contains, getOptions).as(getElementAlias);
            } else {
                cy.get(selector.getValue(), getOptions).as(getElementAlias);
            }
            break;
        }
        default:
            throw new Error(`Incorrect field type: '${selector.fieldDescriptor.type}' when trying to see element by selector '${selector.toString()}' `);
    }
    return element;
}

export function getNavigationUrl(selector: PageObjectSelector): string {
    if (selector.fieldDescriptor.type !== PageObjectField.Navigation) {
        throw new Error(`Incorrect field type: '${selector.fieldDescriptor.type}' when trying to get URL by selector '${selector.toString()}' `);
    }
    return selector.getValue();
}

export function extractCommonGetOptions(options: ElementGetOptions): Partial<Cypress.Timeoutable & Cypress.Withinable> {
    const result: Partial<Cypress.Timeoutable & Cypress.Withinable> = {};

    if(options.wait !== null && !isNaN(options.wait)) {
        result.timeout = options.wait;
    }
    return result;
}

export function makeCypressWaitForPromise(promiseToWait: Promise<any>): Bluebird<any> {
    return new Cypress.Promise((resolve, reject) => {
        promiseToWait.then(resolve).catch(reject);
    });
}
