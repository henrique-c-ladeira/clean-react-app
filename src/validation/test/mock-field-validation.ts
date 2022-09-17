import { FieldValidation } from '../contracts/field-validation';

export class FieldValidationSpy implements FieldValidation {
  error: Error | null = null;

  constructor(readonly field: string) {}

  validate(value: string): Error | null {
    return this.error;
  }
}
