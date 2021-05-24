import { CustomError } from './custom-error.js';

export class NotFoundError extends CustomError {
  statusCode = 404;

  constructor() {
    super('Route not found');
  }

  serializeErrors() {
    return [{ message: 'Not Found' }];
  }
}
