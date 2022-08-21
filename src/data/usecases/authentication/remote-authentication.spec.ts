import { HttpPostClientSpy } from '~/data/test/mock-http-client';
import { RemoteAuthentication } from './remote-authentication';
import { faker } from '@faker-js/faker';
import { mockAuthenticationParams } from '~/domain/test/mock-authentication';

type SutTypes = {
  sut: RemoteAuthentication;
  httpPostClientSpy: HttpPostClientSpy;
};

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy();
  const sut = new RemoteAuthentication(url, httpPostClientSpy);
  return { sut, httpPostClientSpy };
};

describe('RemoteAuthentication', () => {
  it('should call http client with correct url', () => {
    const url = faker.internet.url();
    const { sut, httpPostClientSpy } = makeSut(url);
    sut.auth(mockAuthenticationParams());
    expect(httpPostClientSpy.url).toBe(url);
  });

  it('should call http client with correct body', () => {
    const { sut, httpPostClientSpy } = makeSut();
    const authenticationParams = mockAuthenticationParams();
    sut.auth(authenticationParams);
    expect(httpPostClientSpy.body).toEqual(authenticationParams);
  });
});
