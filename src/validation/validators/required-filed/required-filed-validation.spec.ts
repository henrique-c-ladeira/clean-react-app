import { faker } from '@faker-js/faker';
import { RequiredFieldError } from '~/validation/errors';
import { RequiredFieldValidation } from './required-field-validation';

const makeSut = () => {
  return new RequiredFieldValidation(faker.database.column());
};

describe('Required Field Validation', () => {
  it('should return error if field is empty', () => {
    const sut = makeSut();
    const error = sut.validate('');
    expect(error).toEqual(new RequiredFieldError());
  });

  it('should return null if field is NOT empty', () => {
    const sut = new RequiredFieldValidation('email');
    const error = sut.validate(faker.random.word());
    expect(error).toBeNull();
  });
});
