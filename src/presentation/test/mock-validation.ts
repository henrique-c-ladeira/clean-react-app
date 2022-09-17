/* eslint-disable @typescript-eslint/no-unused-vars */
import { Validation } from '../contracts/validation';

export class ValidationSpy implements Validation {
  errorMessage: string | null = 'error';
  fieldName?: string;
  fieldValue?: string;

  validate(fieldName: string, fieldValue: string) {
    this.fieldName = fieldName;
    this.fieldValue = fieldValue;
    return this.errorMessage;
  }
}
