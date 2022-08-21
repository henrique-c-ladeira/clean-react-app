import { HttpPostClient } from '../../protocols/http/http-post-client';
import { RemoteAuthentication } from './remote-authentication';

const makeSUT = (url: string, httpClient: HttpPostClient) =>
  new RemoteAuthentication(url, httpClient);

class HttpPostClientSpy implements HttpPostClient {
  url?: string;

  post(url: string): Promise<void> {
    this.url = url;
    return Promise.resolve();
  }
}

describe('RemoteAuthentication', () => {
  it('should call http client with correct url', () => {
    const url = 'any_url';
    const httpPostClientSpy = new HttpPostClientSpy();
    const sut = makeSUT(url, httpPostClientSpy);
    sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});
