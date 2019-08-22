import { Then } from 'cypress-cucumber-preprocessor/steps';

export function register () {
    Then(`I see {string} in title`, (title: string) => {
        cy.title().should("include", title);
    });
}


