import axios from 'axios';
import { HttpGetClient, HttpGetParams } from '~/data/contracts/http';

export class AxiosGetHttpAdapter implements HttpGetClient<unknown, unknown> {
  async get(params: HttpGetParams<unknown>) {
    try {
      const httpResponse = await axios.get(params.url, {
        params: params.queryStringUrl,
      });
      return {
        statusCode: httpResponse.status,
        body: httpResponse.data,
      };
    } catch (error: any) {
      return {
        ...(error?.response?.status && { statusCode: error?.response?.status }),
        ...(error?.response?.data && { body: error?.response?.data }),
      };
    }
  }
}
