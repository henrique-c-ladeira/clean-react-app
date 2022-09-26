import { UserModel } from '../models/user-model';

export interface LoadUsers {
  load: () => Promise<LoadUsers.Return>;
}

export namespace LoadUsers {
  export type Return = UserModel[];
}
