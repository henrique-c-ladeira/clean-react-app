import { PostUsersResponse } from '~/data/contracts/api/post-users-response';
import { HttpPostClient, HttpStatusCode } from '~/data/contracts/http';
import { UnexpectedError } from '~/domain/errors';
import { AddAccount } from '~/domain/usecases';

export class RemoteAddAccount implements AddAccount {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
      AddAccount.Params & { phone: string; birthday: string },
      PostUsersResponse
    >
  ) {}
  async add(params: AddAccount.Params): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: { ...params, phone: '789456123', birthday: '10/02/1992' },
    });
    if (httpResponse.statusCode === HttpStatusCode.serverError)
      throw new UnexpectedError();
    if (httpResponse.statusCode === HttpStatusCode.badRequest)
      throw new UnexpectedError();
  }
}
