import { InvalidFieldError } from '../../errors/invalid-field-error';
import { FieldValidation } from '../../contracts/field-validation';

export class EmailValidation implements FieldValidation {
  constructor(readonly field: string) {}

  validate(input: Record<string, string>): Error | null {
    if (!input[this.field]) return null;
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(input[this.field]) ? null : new InvalidFieldError();
  }
}
