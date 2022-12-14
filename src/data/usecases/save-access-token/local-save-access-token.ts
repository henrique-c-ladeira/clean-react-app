import { SetStorage } from '~/data/contracts/storage/set-storage';
import { SaveAccessToken } from '~/domain/usecases/save-access-token';

export class LocalSaveAccessToken implements SaveAccessToken {
  constructor(private readonly setStorage: SetStorage) {}

  async save(accessToken: string): Promise<void> {
    this.setStorage.set('accessToken', accessToken);
  }
}
