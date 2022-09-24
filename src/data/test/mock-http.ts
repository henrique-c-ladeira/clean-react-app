import { faker } from '@faker-js/faker';
import {
  HttpGetClient,
  HttpGetParams,
  HttpPostClient,
  HttpPostParams,
  HttpResponse,
  HttpStatusCode,
} from '~/data/contracts/http';

export class HttpPostClientSpy<T, R> implements HttpPostClient<T, R> {
  url?: string;
  body?: T;
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.success,
  };

  post(params: HttpPostParams<T>): Promise<HttpResponse<R>> {
    this.url = params.url;
    this.body = params.body;
    return Promise.resolve(this.response);
  }
}

export class HttpGetClientSpy<T, R> implements HttpGetClient<T, R> {
  url?: string;
  queryStringUrl?: T;
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.success,
  };

  get(params: HttpGetParams<T>): Promise<HttpResponse<R>> {
    this.url = params.url;
    this.queryStringUrl = params.queryStringUrl;
    return Promise.resolve(this.response);
  }
}

export const mockPostRequest = (): HttpPostParams<unknown> => ({
  url: faker.internet.url(),
  body: JSON.parse(faker.datatype.json()),
});

export const mockGetRequest = (): HttpGetParams<unknown> => ({
  url: faker.internet.url(),
  queryStringUrl: JSON.parse(faker.datatype.json()),
});
