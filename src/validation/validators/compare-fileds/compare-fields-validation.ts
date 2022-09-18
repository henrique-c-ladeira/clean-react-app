import { FieldValidation } from '~/validation/contracts/field-validation';
import { InvalidFieldError } from '~/validation/errors';

export class CompareFieldsValidation implements FieldValidation {
  constructor(
    readonly field: string,
    private readonly fieldToCompare: string
  ) {}

  validate(input: Record<string, string>): Error | null {
    if (input[this.field] === input[this.fieldToCompare]) return null;
    return new InvalidFieldError();
  }
}
