import { faker } from '@faker-js/faker';
import { PostUsersResponse } from '~/data/contracts/api/post-users-response';
import { HttpStatusCode } from '~/data/contracts/http';
import { HttpPostClientSpy } from '~/data/test';
import { UnexpectedError } from '~/domain/errors';
import { mockAddAccountParams } from '~/domain/test/mock-account';
import { AddAccountParams } from '~/domain/usecases';
import { RemoteAddAccount } from './remote-add-account';

const makeSut = (url: string = faker.internet.url()) => {
  const httpPostClientSpy = new HttpPostClientSpy<
    AddAccountParams,
    PostUsersResponse
  >();
  const sut = new RemoteAddAccount(url, httpPostClientSpy);
  return { sut, httpPostClientSpy };
};

describe('Remote Add Account', () => {
  it('should call http client with correct url', async () => {
    const url = faker.internet.url();
    const { sut, httpPostClientSpy } = makeSut(url);
    await sut.add(mockAddAccountParams());
    expect(httpPostClientSpy.url).toBe(url);
  });

  it('should call http client with correct body and default birthday and phone', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    const httpBody = mockAddAccountParams();
    await sut.add(httpBody);
    expect(httpPostClientSpy.body).toEqual({
      ...httpBody,
      phone: '789456123',
      birthday: '10/02/1992',
    });
  });

  it('should throw UnexpectedError if httpPostClient returns 400', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response.statusCode = HttpStatusCode.badRequest;
    const promise = sut.add(mockAddAccountParams());
    expect(promise).rejects.toThrow(new UnexpectedError());
  });
  it('should throw UnexpectedError if httpPostClient returns 500', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response.statusCode = HttpStatusCode.serverError;
    const promise = sut.add(mockAddAccountParams());
    expect(promise).rejects.toThrow(new UnexpectedError());
  });
  it('should return void if HttpPostClient returns 200', async () => {
    const { sut } = makeSut();
    const response = await sut.add(mockAddAccountParams());
    expect(response).toBe(undefined);
  });
});
