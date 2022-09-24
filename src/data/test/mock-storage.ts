import { Storage } from '../contracts/storage/storage';

export class StorageSpy implements Storage {
  key?: string;
  value: any;

  async set(key: string, value: any): Promise<void> {
    this.key = key;
    this.value = value;
  }

  async get(key: string): Promise<any> {
    this.key = key;
    return this.value;
  }
}
