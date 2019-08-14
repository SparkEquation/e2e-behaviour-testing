import { storage } from '../../pageObjectRegistrator';
import { When } from "cypress-cucumber-preprocessor/steps";

export function register() {
    When(`I click {string}`, async (element: string) => {
        const [filename, method] = element.split('.');
        const pageObject = storage.get(filename);

        expect(pageObject[method]()).to.equal('Hello from google class');
    });
}
