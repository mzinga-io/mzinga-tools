import { createQuery } from '../query';
import { Access, Query, Role, User } from '../types';

/**
 * Access control function that allows access to logged in users with a given role
 * @param role the required role the get access
 * @param where optional filter
 * @returns the evaluated filter or `true` if the user has the given role, else `false`
 * @example
 * import { allowUserWithRole } from 'mzinga-rbac';
 *
 * // Allow full access to users with the 'admin' role
 * const access = allowUserWithRole('admin');
 * @example
 * import { allowUserWithRole } from 'mzinga-rbac';
 *
 * // Allow users with the 'reader' role access to published documents
 * const access =  allowUserWithRole<Media>('reader', { _status: { equals: 'published' } });
 */
export const allowUserWithRole = <TCollection extends object = any, TUser extends User = User>(
  role: Role<TUser>,
  where?: Query<TCollection, TUser>,
): Access<TCollection, TUser> => {
  const query = where && createQuery(where);
  return args => Boolean(args.req.user?.roles.includes(role)) && (!query || query._toWhere(args));
};
