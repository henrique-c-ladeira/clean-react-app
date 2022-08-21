import { HttpResponse } from './http-response';

export type HttpPostParams = {
  url: string;
  body?: number;
};
export interface HttpPostClient {
  post(params: HttpPostParams): Promise<HttpResponse>;
}
