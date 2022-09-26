import {
  HttpGetClient,
  HttpGetParams,
  HttpResponse,
} from '~/data/contracts/http';
import { Storage } from '~/data/contracts/storage/storage';

export class AuthorizeHttpGetClientDecorator implements HttpGetClient {
  constructor(
    private readonly decoratee: HttpGetClient,
    private readonly storage: Storage
  ) {}

  async get(params: HttpGetParams<any>): Promise<HttpResponse<any>> {
    const accessToken = await this.storage.get('accessToken');
    return this.decoratee.get({
      ...params,
      headers: { ...params.headers, authorization: accessToken },
    });
  }
}
