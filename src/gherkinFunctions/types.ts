import { defineParameterType } from 'cucumber';
import {
    IPageObjectFieldDescription,
    IPageObjectMetadata,
    PageObjectFieldType,
    storage
} from '../pageObjectRegistrator';

export class PageObjectSelector {
    public classInstance: IPageObjectMetadata;
    public className: string;
    public fieldName: string;

    constructor(pageObjectSelector: string) {
        const [className, fieldName] = pageObjectSelector.split('.');
        this.fieldName = fieldName;
        this.className = className;
        this.classInstance = storage.get(className);
    }

    public getValue(fieldDescriptor: IPageObjectFieldDescription) {
        if (fieldDescriptor.invokable) {
            return this.classInstance[this.fieldName]();
        } else {
            if (fieldDescriptor.type === PageObjectFieldType.Action) {
                throw new Error('Action cannot be non-invokable')
            }
            return this.classInstance[this.fieldName];
        }
    }

    public toString(): string {
        return `${this.className}.${this.fieldName}`;
    }
}

export function register() {
    /*defineParameterType({
        name: 'pageObjectSelector',
        preferForRegexpMatch: true,
        useForSnippets: true,
        regexp: /.*!/,
        transformer: selector => new PageObjectSelector(selector)
    });*/
}

