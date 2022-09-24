import { RequiredFieldError } from '~/validation/errors';
import { FieldValidation } from '~/validation/contracts/field-validation';

export class RequiredFieldValidation implements FieldValidation {
  constructor(readonly field: string) {}

  validate(input: Record<string, string>): Error | null {
    return input[this.field] ? null : new RequiredFieldError();
  }
}
