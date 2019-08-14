import { Then } from "cypress-cucumber-preprocessor/steps";

export function register () {
    Then(`I see {string} in the title`, (title: string) => {
        cy.title().should("include", title);
    });
}


