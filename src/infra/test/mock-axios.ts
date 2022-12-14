import { faker } from '@faker-js/faker';
import axios from 'axios';

export const mockAxiosPost = (): jest.Mocked<typeof axios> => {
  const axiosMock = axios as jest.Mocked<typeof axios>;
  const axiosResultMock = {
    data: JSON.parse(faker.datatype.json()),
    status: faker.random.numeric(),
  };
  axiosMock.post.mockImplementation(() => Promise.resolve(axiosResultMock));
  return axiosMock;
};
