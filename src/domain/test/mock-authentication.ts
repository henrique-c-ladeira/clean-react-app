import { faker } from '@faker-js/faker';
import { AuthenticationParams } from '~/domain/usecases/authentication';

export const mockAuthenticationParams = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});
