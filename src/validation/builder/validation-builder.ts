import { FieldValidation } from '../contracts/field-validation';
import {
  EmailValidation,
  MinLengthValidation,
  RequiredFieldValidation,
} from '../validators';
import { CompareFieldsValidation } from '../validators/compare-fileds/compare-fields-validation';

export class ValidationBuilder {
  private constructor(
    private readonly fieldName: string,
    private readonly validations: FieldValidation[]
  ) {}

  static field(fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, []);
  }

  required(): ValidationBuilder {
    this.validations.push(new RequiredFieldValidation(this.fieldName));
    return this;
  }

  email(): ValidationBuilder {
    this.validations.push(new EmailValidation(this.fieldName));
    return this;
  }

  min(minLength: number) {
    this.validations.push(new MinLengthValidation(this.fieldName, minLength));
    return this;
  }

  match(valueToCompare: string) {
    this.validations.push(
      new CompareFieldsValidation(this.fieldName, valueToCompare)
    );
    return this;
  }

  build(): FieldValidation[] {
    return this.validations;
  }
}
