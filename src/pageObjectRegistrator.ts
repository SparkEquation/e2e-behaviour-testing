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

export const storage = new Map<string, IPageObjectMetadata>();

// Keys should be the same as values to allow following typecheck: keyof typeof PageObjectFieldType
export enum PageObjectField {
    Selector = 'Selector',
    Xpath = 'Xpath',
    Navigation = 'Navigation',
    RoleCredentials = 'RoleCredentials'
}

export interface IRoleCredentials {
    fieldName: string;
    value: string;
}

export type PageObjectFieldType = PageObjectField | keyof typeof PageObjectField;
export type LogInRole = Array<IRoleCredentials>;

// Metadata for fields
export interface IPageObjectFieldDescription {
    invokable: boolean;
    type: PageObjectField | null;
}

export interface IPageObjectMetadata {
    getFieldDescriptor(key: string): IPageObjectFieldDescription;
}

export interface IPageObjectParams {
    name: string;
    type?: PageObjectFieldType;
}

const metadataTypeKey = 'PageObjectFieldType';
const metadataInvokableKey = 'PageObjectFieldInvokable';

export function registerPageObject<T extends {new(...args: any[]): {}}>(
    params: IPageObjectParams | string
): (constructor: T) => void {
    // TODO replace any with valid type
    const name = typeof params === 'string' ? params : params.name;
    const type = params.hasOwnProperty('type') ? (params as IPageObjectParams).type : null;
    return (constructor: T): void => {
        class MetadataProvider extends constructor implements IPageObjectMetadata{
            public getFieldDescriptor(key: keyof MetadataProvider): IPageObjectFieldDescription {
                if (Reflect.hasMetadata(metadataTypeKey, this, key)) {
                    return {
                        invokable: Reflect.getMetadata(metadataInvokableKey, this, key),
                        type: Reflect.getMetadata(metadataTypeKey, this, key),
                    };
                } else if (Reflect.hasMetadata(metadataTypeKey, this)) {
                    return {
                        type: Reflect.getMetadata(metadataTypeKey, this),
                        invokable: false,
                    };
                } else {
                    return {
                        type: null,
                        invokable: false,
                    };
                }
            }
        }

        const classInstance = new MetadataProvider();

        if (type !== null) {
            Reflect.defineMetadata(metadataTypeKey, type, MetadataProvider.prototype);
        }

        cy.log(`Added ${name}`);

        if (storage.has(name)) {
            throw new Error(`Detected page object with duplicate name ${ name }`);
        }
        storage.set(name, classInstance);
    };
}

export function registerSelector(type: PageObjectField | keyof typeof PageObjectField) {
    return function (target: Record<string, any>, key: string | symbol, descriptor?: PropertyDescriptor): void {
        const invokable = descriptor !== undefined;

        Reflect.defineMetadata(
            metadataTypeKey, type, target,  key
        );
        Reflect.defineMetadata(
            metadataInvokableKey, invokable, target, key
        );
    };
}


