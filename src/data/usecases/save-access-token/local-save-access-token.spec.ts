import { faker } from '@faker-js/faker';
import { SetStorageMock } from '~/data/test';
import { LocalSaveAccessToken } from './local-save-access-token';

const makeSut = () => {
  const setStorage = new SetStorageMock();
  const sut = new LocalSaveAccessToken(setStorage);
  return { sut, setStorage };
};

describe('Local save access token', () => {
  it('should call SetStorage with correct values', async () => {
    const { sut, setStorage } = makeSut();
    const accessToken = faker.datatype.uuid();
    await sut.save(accessToken);
    expect(setStorage.key).toBe('accessToken');
    expect(setStorage.value).toBe(accessToken);
  });
  it('should throws if SetStorage throws', async () => {
    const { sut, setStorage } = makeSut();
    jest.spyOn(setStorage, 'set').mockImplementationOnce(() => {
      throw new Error();
    });
    const accessToken = faker.datatype.uuid();
    const promise = sut.save(accessToken);
    await expect(promise).rejects.toThrow(new Error());
  });
});
