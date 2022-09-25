import { HttpResponse } from './http-response';

export type HttpGetParams<T, Headers = any> = {
  url: string;
  queryStringUrl?: T;
  headers?: Headers;
};

export interface HttpGetClient<T = any, R = any, Headers = any> {
  get(params: HttpGetParams<T, Headers>): Promise<HttpResponse<R>>;
}
