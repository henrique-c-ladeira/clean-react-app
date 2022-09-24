import { Storage } from '~/data/contracts/storage/storage';
import { SaveAccessToken } from '~/domain/usecases/save-access-token';

export class LocalSaveAccessToken implements SaveAccessToken {
  constructor(private readonly setStorage: Storage) {}

  async save(accessToken: string): Promise<void> {
    this.setStorage.set('accessToken', accessToken);
  }
}
