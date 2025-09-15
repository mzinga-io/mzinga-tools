import { PayloadRequest } from 'mzinga/types';
import { User } from '../../src';

export const mockRequest = (user?: User): PayloadRequest =>
  ({
    user,
  } as PayloadRequest);
