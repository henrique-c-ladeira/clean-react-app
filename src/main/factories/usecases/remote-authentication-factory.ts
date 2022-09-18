import { RemoteAuthentication } from '~/data/usecases/authentication/remote-authentication';
import { Authentication } from '~/domain/usecases';
import { makeApirUrl, makeAxiosHttpAdapter } from '../http';

export const makeRemoteAuthentication = (): Authentication =>
  new RemoteAuthentication(makeApirUrl('/token'), makeAxiosHttpAdapter());
