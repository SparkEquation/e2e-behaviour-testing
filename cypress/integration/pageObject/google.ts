import { register, registerPageObject } from '../../../src/pageObjectRegistrator';

@registerPageObject('Google')
export class Google {
    @register('Xpath')
    public sayHello(): string {
        return 'Hello from google class';
    }

    @register('Contains')
    public cypressLink = 'cypress.io';

    @register('Selector')
    public searchResults = 'div#search';

    @register('Navigation')
    public page = 'search?q=cypress';

    @register('Action')
    public getLinkByTitle() {
        cy.get('div#search').within(el => {
            cy.get('h3').should('contain', 'JavaScript End to End Testing Framework | cypress.io');
        });
    }

}
