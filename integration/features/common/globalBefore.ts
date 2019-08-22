import { register } from '../../../lib';

register();

before(() => {
  import('../../pageObjects/index');
});
