import { faker } from '@faker-js/faker';
import { InvalidFieldError } from '~/validation/errors/invalid-field-error';
import { MinLengthValidation } from './min-length-validation';

const makeSut = () => {
  const field = faker.database.column();
  return { sut: new MinLengthValidation(field, 5), field };
};

describe('Min Length Validation', () => {
  it('should return error if value is NOT valid', () => {
    const { sut, field } = makeSut();
    const error = sut.validate({ [field]: faker.random.alphaNumeric(3) });
    expect(error).toEqual(new InvalidFieldError());
  });

  it('should return null if value is valid', () => {
    const { sut, field } = makeSut();
    const error = sut.validate({ [field]: faker.random.alphaNumeric(5) });
    expect(error).toBeNull();
  });
  it('should return null if field does not exist', () => {
    const { sut } = makeSut();
    const error = sut.validate({
      [faker.database.column()]: faker.random.alphaNumeric(5),
    });
    expect(error).toBeNull();
  });
});
