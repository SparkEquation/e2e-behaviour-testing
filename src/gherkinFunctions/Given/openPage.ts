import { Given } from "cypress-cucumber-preprocessor/steps";
import { PageObjectSelector } from '../types';
import { PageObjectFieldType } from '../../pageObjectRegistrator';


export function register () {
    Given(`I open {string}`, (selectorString: string) => {
        const selector = new PageObjectSelector(selectorString);
        const fieldInfo = selector.classInstance.getFieldDescriptor(selector.fieldName);
        switch (fieldInfo.type) {
            case PageObjectFieldType.Navigation:
                cy.visit(selector.getValue(fieldInfo));
                break;
            case PageObjectFieldType.Action:
                selector.getValue(fieldInfo);
                break;
            default:
                throw new Error(`Incorrect page object selector '${selector.toString()}' cannot be used to open page `)
        }
    });
}

