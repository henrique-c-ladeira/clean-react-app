import { faker } from '@faker-js/faker';
import { InvalidFieldError } from '~/validation/errors';
import { CompareFieldsValidation } from './compare-fields-validation';

const makeSut = (valueToCompare: string) => {
  return new CompareFieldsValidation(faker.database.column(), valueToCompare);
};

describe('Compare Fields Validation', () => {
  it('should return error if fields are different', () => {
    const sut = makeSut(faker.random.word());
    const error = sut.validate(faker.random.word());
    expect(error).toEqual(new InvalidFieldError());
  });

  it('should return null if fields are equal', () => {
    const valueToCompare = faker.random.word();
    const sut = makeSut(valueToCompare);
    const error = sut.validate(valueToCompare);
    expect(error).toBeNull();
  });
});
