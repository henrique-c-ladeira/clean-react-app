import { faker } from '@faker-js/faker';
import { InvalidFieldError } from '../../errors/invalid-field-error';
import { EmailValidation } from './email-validation';

const makeSut = () => {
  return new EmailValidation(faker.database.column());
};

describe('Email Validation', () => {
  it('should return error if email is NOT valid', () => {
    const sut = makeSut();
    const error = sut.validate(faker.random.word());
    expect(error).toEqual(new InvalidFieldError());
  });

  it('should return null if email is valid', () => {
    const sut = makeSut();
    const error = sut.validate(faker.internet.email());
    expect(error).toBeNull();
  });
  it('should return null if email is empty', () => {
    const sut = makeSut();
    const error = sut.validate('');
    expect(error).toBeNull();
  });
});
