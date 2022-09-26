import { faker } from '@faker-js/faker';
import { GetUsersResponse } from '~/data/contracts/api/get-users-response';
import { HttpStatusCode } from '~/data/contracts/http';
import { HttpGetClientSpy } from '~/data/test';
import { UnexpectedError } from '~/domain/errors';
import { RemoteLoadUsers } from './remote-load-users';

const makeSut = (url: string = faker.internet.url()) => {
  const httpGetClientSpy = new HttpGetClientSpy<void, GetUsersResponse>();
  const sut = new RemoteLoadUsers(url, httpGetClientSpy);
  return { sut, httpGetClientSpy };
};

describe('Remote Load Users', () => {
  it('should call http client with correct url', async () => {
    const url = faker.internet.url();
    const { sut, httpGetClientSpy } = makeSut(url);
    httpGetClientSpy.response.body = [{ name: 'name', email: 'email' }];
    await sut.load();
    expect(httpGetClientSpy.url).toBe(url);
  });

  it('should throw UnexpectedError if httpGetClient returns 400', async () => {
    const { sut, httpGetClientSpy } = makeSut();
    httpGetClientSpy.response.statusCode = HttpStatusCode.badRequest;
    const promise = sut.load();
    expect(promise).rejects.toThrow(new UnexpectedError());
  });
  it('should throw UnexpectedError if httpGetClient returns 500', async () => {
    const { sut, httpGetClientSpy } = makeSut();
    httpGetClientSpy.response.statusCode = HttpStatusCode.serverError;
    const promise = sut.load();
    expect(promise).rejects.toThrow(new UnexpectedError());
  });
  it('should return users if HttpGetClient returns 200', async () => {
    const { sut, httpGetClientSpy } = makeSut();
    const body = [
      {
        name: faker.name.firstName(),
        email: faker.image.imageUrl(),
      },
      {
        name: faker.name.firstName(),
        email: faker.image.imageUrl(),
      },
    ];
    httpGetClientSpy.response.body = body;
    const response = await sut.load();
    expect(response[0].name).toBe(body[0].name);
    expect(response[1].name).toBe(body[1].name);
  });
});
