/* eslint-disable @typescript-eslint/no-unused-vars */
import { Validation } from '../protocols/validation';

export class ValidationFake implements Validation {
  errorMessage: string | null = 'error';
  fieldName?: string;
  fieldValue?: string;

  validate(fieldName: string, fieldValue: string) {
    this.fieldName = fieldName;
    this.fieldValue = fieldValue;
    return this.errorMessage;
  }
}
