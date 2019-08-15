import * as Click from './click';
import * as See from './see';
import * as LogIn from './logIn';
import * as TypingIn from './typingIn';
import * as Hover from './hover';

export function register() {
    Click.register();
    See.register();
    LogIn.register();
    TypingIn.register();
    Hover.register();
}
