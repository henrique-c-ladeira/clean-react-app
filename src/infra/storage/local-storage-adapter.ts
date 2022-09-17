import { SetStorage } from '~/data/contracts/storage/set-storage';

export class LocalStorageAdapter implements SetStorage {
  async set(key: string, value: any): Promise<void> {
    localStorage.setItem(key, value);
  }
}
