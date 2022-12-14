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

  it('should call local storage correctly', async () => {
    const { sut } = makeSut();
    const key = faker.database.column();
    const value = faker.random.word();
    await sut.set(key, value);
    expect(localStorage.setItem).toHaveBeenCalledWith(key, value);
  });
});
