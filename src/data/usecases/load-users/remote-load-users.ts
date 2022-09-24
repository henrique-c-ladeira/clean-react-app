import { GetUsersResponse } from '~/data/contracts/api/get-users-response';
import { HttpGetClient, HttpStatusCode } from '~/data/contracts/http';
import { UnexpectedError } from '~/domain/errors';
import { LoadUsers } from '~/domain/usecases/load-users';

export class RemoteLoadUsers implements LoadUsers {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<void, GetUsersResponse>
  ) {}

  async load(): Promise<LoadUsers.Return> {
    const response = await this.httpGetClient.get({ url: this.url });

    if (response.statusCode === HttpStatusCode.badRequest)
      throw new UnexpectedError();
    if (response.statusCode === HttpStatusCode.serverError)
      throw new UnexpectedError();

    const users: LoadUsers.Return | undefined = response.body?.map((item) => ({
      name: item.name,
      imageUrl: 'imageUrl',
      email: item.email,
    }));

    if (!users?.length) throw new UnexpectedError();

    return users;
  }
}
