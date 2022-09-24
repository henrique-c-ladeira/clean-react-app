import axios from 'axios';
import { HttpPostClient, HttpPostParams } from '~/data/contracts/http';

export class AxiosPostHttpAdapter implements HttpPostClient<unknown, unknown> {
  async post(params: HttpPostParams<unknown>) {
    try {
      const httpResponse = await axios.post(params.url, params.body);
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
