import { AxiosPostHttpAdapter } from './axios-post-http-adapter';
import { mockAxiosResponse } from '~/infra/test';
import { mockPostRequest } from '~/data/test';
import axios from 'axios';
import { faker } from '@faker-js/faker';

jest.mock('axios');

type SutTypes = {
  sut: AxiosPostHttpAdapter;
  axiosMock: jest.Mocked<typeof axios>;
};

const makeSut = (): SutTypes => {
  const sut = new AxiosPostHttpAdapter();
  const axiosMock = mockAxiosResponse();
  return { sut, axiosMock };
};

describe('AxiosPostHttpAdapter', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call axios with correct values', async () => {
    const request = mockPostRequest();
    const { sut, axiosMock } = makeSut();
    sut.post(request);
    expect(axiosMock.post).toHaveBeenCalledWith(request.url, request.body);
  });

  it('should return correct statusCode and body', async () => {
    const { sut, axiosMock } = makeSut();
    const promise = sut.post(mockPostRequest());
    expect(promise).toEqual(axiosMock.post.mock.results[0].value);
  });

  it('should return correct statusCode and body on failure', async () => {
    const { sut, axiosMock } = makeSut();
    const axiosResultMock = {
      data: JSON.parse(faker.datatype.json()),
      status: faker.random.numeric(),
    };
    axiosMock.post.mockImplementation(() =>
      Promise.reject({ response: axiosResultMock })
    );
    const promise = sut.post(mockPostRequest());
    expect(promise).toEqual(axiosMock.post.mock.results[0].value);
  });

  it('should return correct statusCode and body on failure with no response data', async () => {
    const { sut, axiosMock } = makeSut();
    const axiosResultMock = {
      status: faker.random.numeric(),
    };
    axiosMock.post.mockImplementation(() =>
      Promise.reject({ response: axiosResultMock })
    );
    const promise = sut.post(mockPostRequest());
    expect(promise).toEqual(axiosMock.post.mock.results[0].value);
  });
  it('should return correct statusCode and body on failure with nothing on repsonse', async () => {
    const { sut, axiosMock } = makeSut();
    axiosMock.post.mockImplementation(() => Promise.reject());
    const promise = sut.post(mockPostRequest());
    expect(promise).toEqual(axiosMock.post.mock.results[0].value);
  });
});
