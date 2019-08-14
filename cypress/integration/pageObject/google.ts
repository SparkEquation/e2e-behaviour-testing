import { register, registerPageObject } from '../../../src/pageObjectRegistrator';

@registerPageObject('Google')
export class Google {
    @register('Xpath')
    public sayHello(): string {
        return 'Hello from google class'
    }

    @register('Selector')
    public str = 'Hello';
}
