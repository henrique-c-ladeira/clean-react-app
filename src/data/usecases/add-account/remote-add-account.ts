import { PostUsersResponse } from '~/data/contracts/api/post-users-response';
import { HttpPostClient, HttpStatusCode } from '~/data/contracts/http';
import { UnexpectedError } from '~/domain/errors';
import { AddAccount, AddAccountParams } from '~/domain/usecases';

export class RemoteAddAccount implements AddAccount {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
      AddAccountParams,
      PostUsersResponse
    >
  ) {}
  async add(params: AddAccountParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    });
    if (httpResponse.statusCode === HttpStatusCode.serverError)
      throw new UnexpectedError();
    if (httpResponse.statusCode === HttpStatusCode.badRequest)
      throw new UnexpectedError();
  }
}
