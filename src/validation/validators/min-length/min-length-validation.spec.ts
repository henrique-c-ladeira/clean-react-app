import { faker } from '@faker-js/faker';
import { InvalidFieldError } from '~/validation/errors/invalid-field-error';
import { MinLengthValidation } from './min-length-validation';

const makeSut = () => {
  return new MinLengthValidation(faker.database.column(), 5);
};

describe('Min Length Validation', () => {
  it('should return error if value is NOT valid', () => {
    const sut = makeSut();
    const error = sut.validate(faker.random.alphaNumeric(3));
    expect(error).toEqual(new InvalidFieldError());
  });

  it('should return null if value is valid', () => {
    const sut = makeSut();
    const error = sut.validate(faker.random.alphaNumeric(5));
    expect(error).toBeNull();
  });
});
