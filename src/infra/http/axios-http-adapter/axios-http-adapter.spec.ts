import { AxiosHttpAdapter } from './axios-http-adapter';
import { HttpPostParams } from '~/data/protocols/http';
import axios from 'axios';
import { faker } from '@faker-js/faker';

jest.mock('axios');
const axiosMock = axios as jest.Mocked<typeof axios>;
const axiosResultMock = {
  data: JSON.parse(faker.datatype.json()),
  status: faker.random.numeric(),
};
axiosMock.post.mockImplementation(() => Promise.resolve(axiosResultMock));

type SutTypes = AxiosHttpAdapter;

const makeSut = (): SutTypes => new AxiosHttpAdapter();

const mockPostRequest = (): HttpPostParams<unknown> => ({
  url: faker.internet.url(),
  body: JSON.parse(faker.datatype.json()),
});

describe('AxiosHttpAdapter', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should call axios with correct values', async () => {
    const request = mockPostRequest();
    const sut = makeSut();
    sut.post(request);
    expect(axiosMock.post).toHaveBeenCalledWith(request.url, request.body);
  });

  it('should return correct statusCode and body', async () => {
    const sut = makeSut();
    const httpResponse = await sut.post(mockPostRequest());
    expect(httpResponse).toEqual({
      statusCode: axiosResultMock.status,
      body: axiosResultMock.data,
    });
  });
});
