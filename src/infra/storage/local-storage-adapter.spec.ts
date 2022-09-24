import { faker } from '@faker-js/faker';
import { LocalStorageAdapter } from './local-storage-adapter';
import 'jest-localstorage-mock';

const makeSut = () => {
  const sut = new LocalStorageAdapter();
  return { sut };
};

describe('Local Storage Adapter', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should call set local storage correctly', async () => {
    const { sut } = makeSut();
    const key = faker.database.column();
    const value = faker.random.word();
    await sut.set(key, value);
    expect(localStorage.setItem).toHaveBeenCalledWith(key, value);
  });

  it('should call get local storage correctly', async () => {
    const { sut } = makeSut();
    const key = faker.database.column();
    await sut.get(key);
    expect(localStorage.getItem).toHaveBeenCalledWith(key);
  });
});
