import { CustomError } from './custom-error.js';

export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  reason = 'Error connecting to database';

  constructor() {
    super('Error connecting to db');
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
