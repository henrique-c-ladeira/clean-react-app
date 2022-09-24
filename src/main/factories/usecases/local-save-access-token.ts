import { LocalSaveAccessToken } from '~/data/usecases/save-access-token/local-save-access-token';
import { makeLocalStorageAdapter } from '../storage';

export const makeLocalSaveAccessToken = () =>
  new LocalSaveAccessToken(makeLocalStorageAdapter());
