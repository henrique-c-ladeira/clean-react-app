import { FieldValidation } from '../contracts/field-validation';

export class FieldValidationSpy implements FieldValidation {
  input?: Record<string, string>;
  error: Error | null = null;

  constructor(readonly field: string) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  validate(input: Record<string, string>): Error | null {
    this.input = input;
    return this.error;
  }
}
