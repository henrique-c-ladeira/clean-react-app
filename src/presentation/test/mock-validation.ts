import { Validation } from '../protocols/validation';

export class ValidationSpy implements Validation {
  errorMessage = 'error';
  input: object = {};

  validate(input: object): string {
    this.input = input;
    return this.errorMessage;
  }
}
