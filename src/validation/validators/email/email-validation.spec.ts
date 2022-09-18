import { faker } from '@faker-js/faker';
import { InvalidFieldError } from '../../errors/invalid-field-error';
import { EmailValidation } from './email-validation';

const makeSut = () => {
  const field = faker.database.column();
  return { sut: new EmailValidation(field), field };
};

describe('Email Validation', () => {
  it('should return error if email is NOT valid', () => {
    const { sut, field } = makeSut();
    const error = sut.validate({ [field]: faker.random.word() });
    expect(error).toEqual(new InvalidFieldError());
  });

  it('should return null if email is valid', () => {
    const { sut, field } = makeSut();
    const error = sut.validate({ [field]: faker.internet.email() });
    expect(error).toBeNull();
  });
  it('should return null if email is empty', () => {
    const { sut, field } = makeSut();
    const error = sut.validate({ [field]: '' });
    expect(error).toBeNull();
  });
});
