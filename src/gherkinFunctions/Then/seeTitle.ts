import { Then } from "cypress-cucumber-preprocessor/steps";

export function register () {
    Then(`I see title string {string}`, (title: string) => {
        cy.title().should("include", title);
    });
}


