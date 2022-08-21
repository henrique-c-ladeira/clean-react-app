import { faker } from '@faker-js/faker';
import { AxiosHttpClient } from './axios-http-client';
import axios from 'axios';

jest.mock('axios');
const axiosMock = axios as jest.Mocked<typeof axios>;

describe('AxiosHttpClient', () => {
  it('should call axios with correct url', async () => {
    const url = faker.internet.url();
    const sut = new AxiosHttpClient();
    sut.post({ url });
    expect(axiosMock).toHaveBeenCalledWith(url);
  });
});
