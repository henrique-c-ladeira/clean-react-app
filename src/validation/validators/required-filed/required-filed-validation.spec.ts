import { faker } from '@faker-js/faker';
import { RequiredFieldError } from '~/validation/errors';
import { RequiredFieldValidation } from './required-field-validation';

const makeSut = () => {
  const field = faker.database.column();
  return { sut: new RequiredFieldValidation(field), field };
};

describe('Required Field Validation', () => {
  it('should return error if field is empty', () => {
    const { sut, field } = makeSut();
    const error = sut.validate({ [field]: '' });
    expect(error).toEqual(new RequiredFieldError());
  });

  it('should return null if field is NOT empty', () => {
    const { sut, field } = makeSut();
    const error = sut.validate({ [field]: faker.random.word() });
    expect(error).toBeNull();
  });
});
