/* eslint-disable @typescript-eslint/no-unused-vars */
import { Validation } from '../contracts/validation';

export class ValidationSpy implements Validation {
  errorMessage: string | null = 'error';
  fieldName?: string;
  input?: Record<string, string>;

  validate(fieldName: string, input: Record<string, string>) {
    this.fieldName = fieldName;
    this.input = input;
    return this.errorMessage;
  }
}
