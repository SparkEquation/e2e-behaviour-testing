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

import { IPageObjectFieldDescription, IPageObjectMetadata, storage } from '../src/core';

export class PageObjectSelector {
    public classInstance: IPageObjectMetadata;
    public fieldDescriptor: IPageObjectFieldDescription;
    public className: string;
    public fieldName: string;

    constructor(pageObjectSelector: string) {
        const [className, fieldName] = pageObjectSelector.split('.');
        this.fieldName = fieldName;
        this.className = className;
        const classInstance = storage.get(className);
        if (classInstance === undefined) {
            throw new Error(`Cannot find page object class ${className}`);
        }
        this.classInstance = classInstance;
        this.fieldDescriptor = this.classInstance.getFieldDescriptor(this.fieldName);
    }

    public getValue(): any {
        if (this.fieldDescriptor.invokable) {
            return this.classInstance[this.fieldName]();
        } else {
            return this.classInstance[this.fieldName];
        }
    }

    public toString(): string {
        return `${this.className}.${this.fieldName}`;
    }
}

export type DataTableRowsHash = { [key: string]: string };

export abstract class ElementGetOptions {
    public wait: number | null = null;

    protected constructor(props: DataTableRowsHash) {
        this.wait = Number(props.wait) || this.wait;
    }
}

export type GetOptions = Partial<Cypress.Timeoutable>;

export class ClickOptions extends ElementGetOptions {
    public first = false;
    public force = false;

    constructor(props: DataTableRowsHash) {
        super(props);
        this.first = Boolean(props.first) || this.first;
        this.force = Boolean(props.force) || this.force;
    }
}

export class BlankLinkClickOptions extends ClickOptions {
    public customClick = false;

    constructor(props: DataTableRowsHash) {
        super(props);
        this.customClick = Boolean(props.customClick) || this.customClick;
    }
}

export class SeeOptions extends ElementGetOptions {
    public amount: number | null = null;

    constructor(props: DataTableRowsHash) {
        super(props);
        this.amount = Number(props.amount) || this.amount;
    }
}

export function register(): void {
    /* Use this across project as soon as
    https://youtrack.jetbrains.com/issue/WEB-39983?_ga=2.137121712.1268965974.1566197839-869244565.1565073645
    is resolved

    defineParameterType({
        name: 'pageObjectSelector',
        regexp: /[a-zA-Z]+\.[a-zA-Z]+/,
        transformer: selector => new PageObjectSelector(selector)
    });
     */
}
