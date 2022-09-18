import { LocalStorageAdapter } from '~/infra/storage/local-storage-adapter';

export const makeLocalStorageAdapter = (): LocalStorageAdapter =>
  new LocalStorageAdapter();
