import { AxiosHttpAdapter } from './axios-http-adapter';
import { mockAxiosPost } from '~/infra/test';
import { mockPostRequest } from '~/data/test';
import axios from 'axios';

jest.mock('axios');

type SutTypes = { sut: AxiosHttpAdapter; axiosMock: jest.Mocked<typeof axios> };

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpAdapter();
  const axiosMock = mockAxiosPost();
  return { sut, axiosMock };
};

describe('AxiosHttpAdapter', () => {
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
});
