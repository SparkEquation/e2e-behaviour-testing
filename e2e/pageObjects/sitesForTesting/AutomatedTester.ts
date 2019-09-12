import { registerPageObject, registerSelector } from '../../../src/core';

@registerPageObject('AutomatedTester')
export class AutomatedTester {
    @registerSelector('Navigation')
    chapter1 = 'chapter1';

    @registerSelector('Selector')
    link = '#multiplewindow.multiplewindow';
}
