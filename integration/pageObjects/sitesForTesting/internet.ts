import { registerPageObject, registerSelector } from '../../../src';

@registerPageObject('Internet')
export class Internet {
    @registerSelector('Navigation')
    public mouseoverPage = 'jqueryui/menu';

    @registerSelector('Selector')
    public firstHover = [ '*', 'Enabled'];

    @registerSelector('Selector')
    public downloadMenuItem = [ '*', 'Downloads'];
}
