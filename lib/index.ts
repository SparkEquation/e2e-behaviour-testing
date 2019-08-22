import 'reflect-metadata';
import * as Types from './types';
import * as GlobalHooks from './globalHooks';
import * as Then from './Then';
import * as When from './When';
import * as Given from './Given';

export function register() {
    Types.register();
    GlobalHooks.register();
    Given.register();
    When.register();
    Then.register();
}
