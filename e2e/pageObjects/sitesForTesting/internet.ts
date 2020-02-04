import { registerPageObject, registerSelector } from '../../../src/core';

@registerPageObject('Internet')
export class Internet {
    @registerSelector('Navigation')
    public mouseoverPage = 'jqueryui/menu';

    @registerSelector('Selector')
    public firstHover = [ '*', 'Enabled'];

    @registerSelector('Selector')
    public downloadMenuItem = [ '*', 'Downloads'];
}
