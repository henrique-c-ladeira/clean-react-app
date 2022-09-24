import { Storage } from '~/data/contracts/storage/storage';

export class LocalStorageAdapter implements Storage {
  async set(key: string, value: any): Promise<void> {
    localStorage.setItem(key, value);
  }

  async get(key: string): Promise<void> {
    localStorage.getItem(key);
  }
}
