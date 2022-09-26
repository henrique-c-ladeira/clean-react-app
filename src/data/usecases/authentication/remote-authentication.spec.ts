import { faker } from '@faker-js/faker';
import { RemoteAuthentication } from './remote-authentication';
import { HttpPostClientSpy } from '~/data/test/mock-http';
import { AccountModel } from '~/domain/models';
import { HttpStatusCode } from '~/data/contracts/http';
import { InvalidCredentialsError, UnexpectedError } from '~/domain/errors';
import { mockAuthenticationParams } from '~/domain/test/mock-account';
import { Authentication } from '~/domain/usecases/authentication';
import { PostTokenResponse } from '~/data/contracts/api/post-token-response';

type SutTypes = {
  sut: RemoteAuthentication;
  httpPostClientSpy: HttpPostClientSpy<
    Authentication.Params,
    PostTokenResponse
  >;
};

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy<
    Authentication.Params,
    PostTokenResponse
  >();
  httpPostClientSpy.response.body = {
    username: faker.name.firstName(),
    jwt: faker.datatype.uuid(),
  };
  const sut = new RemoteAuthentication(url, httpPostClientSpy);
  return { sut, httpPostClientSpy };
};

describe('RemoteAuthentication', () => {
  it('should call http client with correct url', async () => {
    const url = faker.internet.url();
    const { sut, httpPostClientSpy } = makeSut(url);
    await sut.auth(mockAuthenticationParams());
    expect(httpPostClientSpy.url).toBe(url);
  });

  it('should call http client with correct body', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    const authenticationParams = mockAuthenticationParams();
    await sut.auth(authenticationParams);
    expect(httpPostClientSpy.body).toEqual(authenticationParams);
  });

  it('should throw InvalidCredentialsError if httpPostClient returns 401', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized,
    };
    const promise = sut.auth(mockAuthenticationParams());
    await expect(promise).rejects.toThrow(new InvalidCredentialsError());
  });

  it('should throw UnexpectedError if httpPostClient returns 400', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.badRequest,
    };
    const promise = sut.auth(mockAuthenticationParams());
    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  it('should throw UnexpectedError if httpPostClient returns 500', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.serverError,
    };
    const promise = sut.auth(mockAuthenticationParams());
    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  it('should throw UnexpectedError if httpPostClient returns 404', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.notFound,
    };
    const promise = sut.auth(mockAuthenticationParams());
    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  it('should return an AccountModel if HttpPostClient returns 200', async () => {
    const { sut, httpPostClientSpy } = makeSut();

    const accessToken = faker.datatype.uuid();
    const httpResult = {
      username: faker.name.firstName(),
      jwt: accessToken,
    };
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.success,
      body: httpResult,
    };

    const authResult: AccountModel = {
      accessToken,
    };

    const account = await sut.auth(mockAuthenticationParams());
    await expect(account).toEqual(authResult);
  });
});
