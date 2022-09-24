import { Authentication } from '~/domain/usecases/authentication';
import { InvalidCredentialsError, UnexpectedError } from '~/domain/errors';
import { AccountModel } from '~/domain/models';
import { HttpPostClient, HttpStatusCode } from '~/data/contracts/http';
import { PostTokenResponse } from '~/data/contracts/api/post-token-response';

export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpPostClient<
      Authentication.Params,
      PostTokenResponse
    >
  ) {}

  async auth(params: Authentication.Params): Promise<AccountModel> {
    const httpResponse = await this.httpClient.post({
      url: this.url,
      body: params,
    });
    switch (httpResponse.statusCode) {
      case HttpStatusCode.success:
        if (httpResponse.body?.jwt)
          return { accessToken: httpResponse.body.jwt };
        break;
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
    }
    throw new UnexpectedError();
  }
}
