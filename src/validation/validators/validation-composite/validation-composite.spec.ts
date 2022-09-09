import { faker } from '@faker-js/faker';
import { Validation } from '~/presentation/protocols/validation';
import { FieldValidation } from '~/validation/protocols/field-validation';
import { FieldValidationSpy } from '~/validation/test/mock-field-validation';
import { ValidationComposite } from './validation-composite';

type SutTypes = {
  sut: Validation;
};

const makeSut = (validators: FieldValidation[]): SutTypes => {
  const sut = ValidationComposite.build(validators);
  return {
    sut,
  };
};

describe('Validation Composite', () => {
  it('should return error if any validation fails', () => {
    const fieldName = faker.database.column();
    const firstErrorMessage = faker.random.word();
    const secondErrorMessage = faker.random.word();

    const fieldValidationSpyError1 = new FieldValidationSpy(fieldName);
    fieldValidationSpyError1.error = new Error(firstErrorMessage);
    const fieldValidationSpyError2 = new FieldValidationSpy(fieldName);
    fieldValidationSpyError2.error = new Error(secondErrorMessage);

    const { sut } = makeSut([
      fieldValidationSpyError1,
      fieldValidationSpyError2,
    ]);

    const error = sut.validate(fieldName, faker.random.word());

    expect(error).toBe(firstErrorMessage);
  });

  it('should return null if all validation succeeds', () => {
    const fieldName = faker.database.column();

    const fieldValidationSpySuccess1 = new FieldValidationSpy(fieldName);
    const fieldValidationSpySuccess2 = new FieldValidationSpy(fieldName);

    const { sut } = makeSut([
      fieldValidationSpySuccess1,
      fieldValidationSpySuccess2,
    ]);

    const error = sut.validate(fieldName, faker.random.word());

    expect(error).toBeNull();
  });
});
