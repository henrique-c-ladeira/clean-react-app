export const UNEXPECTED_ERROR_NAME = 'UnexpectedError';

export class UnexpectedError extends Error {
  constructor() {
    const errorMessage = 'Something unexpected happened. Please try again.';
    super(errorMessage);
    this.name = UNEXPECTED_ERROR_NAME;
  }
}
