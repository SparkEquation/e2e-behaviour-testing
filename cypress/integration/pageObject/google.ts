import { registerSelector, registerPageObject } from '../../../src/pageObjectRegistrator';

@registerPageObject('Google')
export class Google {
    @registerSelector('Xpath')
    public sayHello(): string {
        return 'Hello from google class';
    }

    @registerSelector('Contains')
    public cypressLink = 'cypress.io';

    @registerSelector('Selector')
    public searchResults = 'div#search';

    @registerSelector('Navigation')
    public page = 'search?q=cypress';

    @registerSelector('Action')
    public getLinkByTitle() {
        cy.get('div#search').within(el => {
            cy.get('h3').should('contain', 'JavaScript End to End Testing Framework | cypress.io');
        });
    }

}
