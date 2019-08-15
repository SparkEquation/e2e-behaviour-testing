import { registerPageObject, registerSelector } from '../../../src/pageObjectRegistrator';

@registerPageObject('Internet')
export class Internet {
    @registerSelector('Navigation')
    public mouseoverPage = 'jqueryui/menu';

    @registerSelector('Contains')
    public firstHover = 'Enabled';

    @registerSelector('Contains')
    public downloadMenuItem = 'Downloads';
}
