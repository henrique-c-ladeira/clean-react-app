import { AxiosGetHttpAdapter } from './axios-get-http-adapter';
import { mockAxiosResponse } from '~/infra/test';
import { mockGetRequest } from '~/data/test';
import axios from 'axios';
import { faker } from '@faker-js/faker';

jest.mock('axios');

type SutTypes = {
  sut: AxiosGetHttpAdapter;
  axiosMock: jest.Mocked<typeof axios>;
};

const makeSut = (): SutTypes => {
  const sut = new AxiosGetHttpAdapter();
  const axiosMock = mockAxiosResponse();
  return { sut, axiosMock };
};

describe('AxiosGetHttpAdapter', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call axios with correct values', async () => {
    const request = mockGetRequest();
    const { sut, axiosMock } = makeSut();
    sut.get(request);
    expect(axiosMock.get).toHaveBeenCalledWith(request.url, {
      params: request.queryStringUrl,
    });
  });

  it('should return correct statusCode and body', async () => {
    const { sut, axiosMock } = makeSut();
    const promise = sut.get(mockGetRequest());
    expect(promise).toEqual(axiosMock.get.mock.results[0].value);
  });

  it('should return correct statusCode and body on failure', async () => {
    const { sut, axiosMock } = makeSut();
    const axiosResultMock = {
      data: JSON.parse(faker.datatype.json()),
      status: faker.random.numeric(),
    };
    axiosMock.get.mockImplementation(() =>
      Promise.reject({ response: axiosResultMock })
    );
    const promise = sut.get(mockGetRequest());
    expect(promise).toEqual(axiosMock.get.mock.results[0].value);
  });

  it('should return correct statusCode and body on failure with no response data', async () => {
    const { sut, axiosMock } = makeSut();
    const axiosResultMock = {
      status: faker.random.numeric(),
    };
    axiosMock.get.mockImplementation(() =>
      Promise.reject({ response: axiosResultMock })
    );
    const promise = sut.get(mockGetRequest());
    expect(promise).toEqual(axiosMock.get.mock.results[0].value);
  });
  it('should return correct statusCode and body on failure with nothing on repsonse', async () => {
    const { sut, axiosMock } = makeSut();
    axiosMock.get.mockImplementation(() => Promise.reject());
    const promise = sut.get(mockGetRequest());
    expect(promise).toEqual(axiosMock.get.mock.results[0].value);
  });
});
