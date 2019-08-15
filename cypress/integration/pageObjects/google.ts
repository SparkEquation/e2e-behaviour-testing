import { registerSelector, registerPageObject } from '../../../src/pageObjectRegistrator';

@registerPageObject('Google')
export class Google {
    @registerSelector('Navigation')
    public searchCypress = 'search?q=cypress';

    @registerSelector('Navigation')
    public page = '/';

    @registerSelector('Contains')
    public cypressLink = 'cypress.io';

    @registerSelector('Selector')
    public searchResults = 'div#search';

    @registerSelector('Selector')
    public searchInput = 'input[name="q"]';

    @registerSelector('Action')
    public getLinkByTitle() {
        cy.get('div#search').within(el => {
            cy.get('h3').should('contain', 'JavaScript End to End Testing Framework | cypress.io');
        });
    }

}
