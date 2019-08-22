before(() => {
    Cypress.config('baseUrl', 'http://book.theautomatedtester.co.uk');
    Cypress.env('startUrl', '/');
});
