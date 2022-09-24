import { faker } from '@faker-js/faker';
import { AuthenticationParams } from '~/domain/usecases/authentication';
import { AccountModel } from '../models';
import { AddAccountParams } from '../usecases';

export const mockAuthenticationParams = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.datatype.uuid(),
});

export const mockAddAccountParams = (): AddAccountParams => ({
  name: faker.name.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});
