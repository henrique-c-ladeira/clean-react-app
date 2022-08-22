import { AccountModel } from '~/domain/models';

export type AuthenticationParams = {
  email: string;
  passwosrd: string;
};

export interface Authentication {
  auth(params: AuthenticationParams): Promise<AccountModel>;
}
