import { faker } from '@faker-js/faker';
import { EmailValidation, MinLengthValidation } from '../validators';
import { RequiredFieldValidation } from '../validators/required-filed/required-field-validation';
import { ValidationBuilder as sut } from './validation-builder';

describe('Validation Builder', () => {
  it('should return RequiredFieldValidation', () => {
    const fieldName = faker.database.column();
    const validations = sut.field(fieldName).required().build();
    expect(validations).toEqual([new RequiredFieldValidation(fieldName)]);
  });

  it('should return EmailValidation', () => {
    const fieldName = faker.database.column();
    const validations = sut.field(fieldName).email().build();
    expect(validations).toEqual([new EmailValidation(fieldName)]);
  });

  it('should return MinLengthValidation', () => {
    const fieldName = faker.database.column();
    const minLength = 5;
    const validations = sut.field(fieldName).min(minLength).build();
    expect(validations).toEqual([
      new MinLengthValidation(fieldName, minLength),
    ]);
  });
  it('should return a list of validations', () => {
    const fieldName = faker.database.column();
    const minLength = 5;
    const validations = sut
      .field(fieldName)
      .required()
      .email()
      .min(minLength)
      .build();
    expect(validations).toEqual([
      new RequiredFieldValidation(fieldName),
      new EmailValidation(fieldName),
      new MinLengthValidation(fieldName, minLength),
    ]);
  });
});
