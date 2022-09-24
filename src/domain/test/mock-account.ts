import { faker } from '@faker-js/faker';
import { Authentication } from '~/domain/usecases/authentication';
import { AccountModel } from '../models';
import { AddAccount } from '../usecases';

export const mockAuthenticationParams = (): Authentication.Params => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.datatype.uuid(),
});

export const mockAddAccountParams = (): AddAccount.Params => ({
  name: faker.name.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});
