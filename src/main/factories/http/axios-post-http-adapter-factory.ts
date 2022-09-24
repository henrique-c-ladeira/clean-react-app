import { AxiosPostHttpAdapter } from '~/infra/http/axios-post-http-adapter/axios-post-http-adapter';

export const makeAxiosPostHttpAdapter = (): AxiosPostHttpAdapter =>
  new AxiosPostHttpAdapter();
