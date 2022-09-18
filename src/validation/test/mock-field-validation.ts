import { FieldValidation } from '../contracts/field-validation';

export class FieldValidationSpy implements FieldValidation {
  error: Error | null = null;

  constructor(readonly field: string) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  validate(input: Record<string, string>): Error | null {
    return this.error;
  }
}
