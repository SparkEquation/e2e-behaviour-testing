import { LogInRole, PageObjectField, registerPageObject, registerSelector } from '../../../src';

@registerPageObject('PhpTravels')
export class PhpTravels {
    @registerSelector('Navigation')
    public adminPage = 'admin';

    @registerSelector('Selector')
    public logInForm = 'form.form-signin';

    @registerSelector('Selector')
    public currentUserAdmin = [ '*', 'Administrator'];

    @registerSelector('Navigation')
    public adminLoginPage = 'admin/login';

    @registerSelector(PageObjectField.RoleCredentials)
    public admin: LogInRole = [
        {
            fieldName: 'email',
            value: 'admin@phptravels.com',
        },
        {
            fieldName: 'password',
            value: 'demoadmin',
        },
    ];
}
