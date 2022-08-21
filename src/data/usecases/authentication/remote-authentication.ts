import {
  Authentication,
  AuthenticationParams,
} from '~/domain/usecases/authentication';
import { InvalidCredentialsError, UnexpectedError } from '~/domain/errors';
import { AccountModel } from '~/domain/models';
import { HttpPostClient, HttpStatusCode } from '~/data/protocols/http';

export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpPostClient<
      AuthenticationParams,
      AccountModel
    >
  ) {}

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpClient.post({
      url: this.url,
      body: params,
    });
    switch (httpResponse.statusCode) {
      case HttpStatusCode.success:
        if (httpResponse.body?.accessToken) return httpResponse.body;
        break;
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
    }
    throw new UnexpectedError();
  }
}
