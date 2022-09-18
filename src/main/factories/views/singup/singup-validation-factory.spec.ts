import { ValidationBuilder } from '~/validation/builder/validation-builder';
import { ValidationComposite } from '~/validation/validators';
import { makeSignUpValidation } from './signup-validation-factory';

describe('Signup Validation Factory', () => {
  it('should make ValidationComposite with correct validations', () => {
    const composite = makeSignUpValidation();
    expect(composite).toEqual(
      ValidationComposite.build([
        ...ValidationBuilder.field('name').required().min(2).build(),
        ...ValidationBuilder.field('email').required().email().build(),
        ...ValidationBuilder.field('password').required().min(5).build(),
        ...ValidationBuilder.field('confirmPassword')
          .required()
          .min(5)
          .match('password')
          .build(),
      ])
    );
  });
});
