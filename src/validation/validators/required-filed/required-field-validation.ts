import { RequiredFieldError } from '~/validation/errors';
import { FieldValidation } from '~/validation/contracts/field-validation';

export class RequiredFieldValidation implements FieldValidation {
  constructor(readonly field: string) {}

  validate(value: string): Error | null {
    return value ? null : new RequiredFieldError();
  }
}
