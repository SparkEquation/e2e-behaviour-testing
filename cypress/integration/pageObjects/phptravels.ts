import { PageObjectFieldType, registerPageObject, registerSelector } from '../../../src/pageObjectRegistrator';
import { LogInRole } from '../../../src/util/models';

@registerPageObject('PhpTravels')
export class PhpTravels {

    @registerSelector('Navigation')
    public adminPage = 'admin';

    @registerSelector('Selector')
    public logInForm = 'form.form-signin';

    @registerSelector('Contains')
    public currentUserAdmin = 'Administrator';

    @registerSelector('Navigation')
    public adminLoginPage = 'admin/login';

    @registerSelector(PageObjectFieldType.RoleCredentials)
    public admin: LogInRole = [
        {
            fieldName: 'email',
            value: 'admin@phptravels.com'
        },
        {
            fieldName: 'password',
            value: 'demoadmin'
        }
    ];


}
