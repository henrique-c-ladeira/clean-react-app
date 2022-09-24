import { HttpResponse } from './http-response';

export type HttpGetParams<T> = {
  url: string;
  queryStringUrl?: T;
};

export interface HttpGetClient<T = any, R = any> {
  get(params: HttpGetParams<T>): Promise<HttpResponse<R>>;
}
