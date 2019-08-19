import {
    IPageObjectFieldDescription,
    IPageObjectMetadata,
    PageObjectFieldType,
    storage
} from '../src/pageObjectRegistrator';
import { Transform } from 'cucumber';

declare const defineParameterType: (transform: Transform) => void;

export class PageObjectSelector {
    public classInstance: IPageObjectMetadata;
    public fieldDescriptor: IPageObjectFieldDescription;
    public className: string;
    public fieldName: string;

    constructor(pageObjectSelector: string) {
        const [className, fieldName] = pageObjectSelector.split('.');
        this.fieldName = fieldName;
        this.className = className;
        this.classInstance = storage.get(className);
        this.fieldDescriptor = this.classInstance.getFieldDescriptor(this.fieldName);
    }

    public getValue() {
        if (this.fieldDescriptor.invokable) {
            return this.classInstance[this.fieldName]();
        } else {
            if (this.fieldDescriptor.type === PageObjectFieldType.Action) {
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
    defineParameterType({
        name: 'pageObjectSelector',
        regexp: /[a-zA-Z]+\.[a-zA-Z]+/,
        transformer: selector => new PageObjectSelector(selector)
    });
}

