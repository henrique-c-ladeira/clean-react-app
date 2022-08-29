/* eslint-disable @typescript-eslint/no-unused-vars */
import { Validation } from '../protocols/validation';

export class ValidationFake implements Validation {
  errorMessage: string | null = 'error';
  input?: object;

  validate(input: object) {
    this.input = input;
    return this.errorMessage;
  }
}
