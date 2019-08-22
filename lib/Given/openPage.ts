import { Given } from 'cypress-cucumber-preprocessor/steps';
import { PageObjectSelector } from '../types';
import { getNavigationUrl } from '../../src/functions';


export function register () {
    Given(`I open {string}`, (selectorString: string) => {
        const selector = new PageObjectSelector(selectorString);
        cy.visit(getNavigationUrl(selector));
    });
}

