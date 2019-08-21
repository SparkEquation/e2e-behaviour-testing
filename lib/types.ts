import { IPageObjectFieldDescription, IPageObjectMetadata, storage } from '../src/pageObjectRegistrator';
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
            return this.classInstance[this.fieldName];
        }
    }

    public toString(): string {
        return `${this.className}.${this.fieldName}`;
    }
}

export type DataTableRowsHash = { [key: string]: string };

export abstract class ElementGetOptions {
    public wait: number = null;

    protected constructor(props: DataTableRowsHash) {
        this.wait = Number(props.wait) || this.wait;
    }
}

export type GetOptions = Partial<Cypress.Timeoutable>;

export class ClickOptions extends ElementGetOptions{
    public first: boolean = false;
    public force: boolean = false;

    constructor(props: DataTableRowsHash) {
        super(props);
        this.first = Boolean(props.first) || this.first;
        this.force = Boolean(props.force) || this.force;
    }
}

export class SeeOptions extends ElementGetOptions {
    public amount: number = null;

    constructor(props: DataTableRowsHash) {
        super(props);
        this.amount = Number(props.amount) || this.amount;
    }
}

export function register() {
    defineParameterType({
        name: 'pageObjectSelector',
        regexp: /[a-zA-Z]+\.[a-zA-Z]+/,
        transformer: selector => new PageObjectSelector(selector)
    });
}

