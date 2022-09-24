import { ValidationBuilder } from '~/validation/builder/validation-builder';
import { ValidationComposite } from '~/validation/validators';

export const makeSignUpValidation = () =>
  ValidationComposite.build([
    ...ValidationBuilder.field('name').required().min(2).build(),
    ...ValidationBuilder.field('email').required().email().build(),
    ...ValidationBuilder.field('password').required().min(5).build(),
    ...ValidationBuilder.field('confirmPassword')
      .required()
      .min(5)
      .match('password')
      .build(),
  ]);
