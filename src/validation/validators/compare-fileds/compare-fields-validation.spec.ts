import { faker } from '@faker-js/faker';
import { InvalidFieldError } from '~/validation/errors';
import { CompareFieldsValidation } from './compare-fields-validation';

const makeSut = (fieldToCompare: string) => {
  const field = faker.database.column();
  return { sut: new CompareFieldsValidation(field, fieldToCompare), field };
};

describe('Compare Fields Validation', () => {
  it('should return error if fields are different', () => {
    const fieldToCompare = faker.database.column();
    const { sut, field } = makeSut(fieldToCompare);
    const error = sut.validate({
      [field]: faker.random.words(3),
      [fieldToCompare]: faker.random.words(4),
    });
    expect(error).toEqual(new InvalidFieldError());
  });

  it('should return null if fields are equal', () => {
    const fieldToCompare = faker.database.column();
    const { sut, field } = makeSut(fieldToCompare);
    const valueToCompare = faker.random.word();
    const error = sut.validate({
      [field]: valueToCompare,
      [fieldToCompare]: valueToCompare,
    });
    expect(error).toBeNull();
  });
});
