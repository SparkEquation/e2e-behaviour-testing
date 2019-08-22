import { registerPageObject, registerSelector } from '../../../src';

@registerPageObject('AutomatedTester')
export class AutomatedTester {
    @registerSelector('Navigation')
    chapter1 = 'chapter1';

    @registerSelector('Selector')
    link = '#multiplewindow.multiplewindow';
}
