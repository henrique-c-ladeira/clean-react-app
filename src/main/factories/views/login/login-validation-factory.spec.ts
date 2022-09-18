import { ValidationBuilder } from '~/validation/builder/validation-builder';
import { ValidationComposite } from '~/validation/validators';
import { makeLoginValidation } from './login-validation-factory';

describe('Login Validation Factory', () => {
  it('should make ValidationComposite with correct validations', () => {
    const composite = makeLoginValidation();
    expect(composite).toEqual(
      ValidationComposite.build([
        ...ValidationBuilder.field('email').required().email().build(),
        ...ValidationBuilder.field('password').required().min(5).build(),
      ])
    );
  });
});
