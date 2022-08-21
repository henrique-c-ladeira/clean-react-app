export const INVALID_CREDENTIALS_ERROR_NAME = 'InvalidCredentials';

export class InvalidCredentialsError extends Error {
  constructor() {
    const errorMessage = 'Invalid credentials';
    super(errorMessage);
    this.name = INVALID_CREDENTIALS_ERROR_NAME;
  }
}
