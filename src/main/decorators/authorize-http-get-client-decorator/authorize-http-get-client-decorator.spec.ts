import { HttpGetClientSpy, mockGetRequest, StorageSpy } from '~/data/test';
import { AuthorizeHttpGetClientDecorator } from './authorize-http-get-client-decorator';

const makeSut = () => {
  const storageSpy = new StorageSpy();
  const httpGetSpy = new HttpGetClientSpy();
  const sut = new AuthorizeHttpGetClientDecorator(httpGetSpy, storageSpy);
  return { sut, storageSpy, httpGetSpy };
};

describe('Authorize http get client decorator', () => {
  it('should call storage get correctly', async () => {
    const { sut, storageSpy } = makeSut();
    await sut.get(mockGetRequest());
    expect(storageSpy.key).toBe('accessToken');
  });
  it('should call same url', async () => {
    const { sut, httpGetSpy } = makeSut();
    const request = mockGetRequest();
    await sut.get(request);
    expect(httpGetSpy.url).toBe(request.url);
  });
  it('should pass accessToken to get request', async () => {
    const { sut, storageSpy, httpGetSpy } = makeSut();
    const accessToken = 'any_access_token';
    await storageSpy.set('accessToken', accessToken);
    const request = mockGetRequest();
    await sut.get(request);
    expect(httpGetSpy.headers).toEqual({
      ...request.headers,
      authorization: accessToken,
    });
  });
});
