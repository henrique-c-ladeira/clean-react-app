import { faker } from '@faker-js/faker';
import { AxiosHttpClient } from './axios-http-client';
import axios from 'axios';
import { HttpPostParams } from '~/data/protocols/http';

jest.mock('axios');
const axiosMock = axios as jest.Mocked<typeof axios>;

type SutTypes = AxiosHttpClient;

const makeSut = (): SutTypes => new AxiosHttpClient();

const mockPostRequest = (): HttpPostParams<unknown> => ({
  url: faker.internet.url(),
  body: JSON.parse(faker.datatype.json()),
});

describe('AxiosHttpClient', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should call axios with correct url and method', async () => {
    const request = mockPostRequest();
    const sut = makeSut();
    sut.post(request);
    expect(axiosMock.post).toHaveBeenCalledWith(request.url);
  });
});
