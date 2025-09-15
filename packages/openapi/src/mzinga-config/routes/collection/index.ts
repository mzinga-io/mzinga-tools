import { SanitizedConfig } from 'mzinga/config';
import { SanitizedCollectionConfig } from 'mzinga/types';
import type { OpenAPIV3 } from 'openapi-types';
import { Options } from '../../../options';
import { merge } from '../../../utils';
import { getCustomPaths } from '../custom-paths';
import { createVersionRoutes } from '../version-paths';
import { getAuthRoutes } from './auth';
import { getBulkRoutes } from './bulk-routes';
import { getMainRoutes } from './main-routes';

export const getCollectionRoutes = async (
  collection: SanitizedCollectionConfig,
  options: Options,
  mzingaConfig: SanitizedConfig,
): Promise<Pick<Required<OpenAPIV3.Document>, 'paths' | 'components'>> => {
  const mainRoutes = await getMainRoutes(collection, options, mzingaConfig);
  const versionRoutes = await createVersionRoutes(collection, options, mzingaConfig);
  const bulkRoutes = await getBulkRoutes(collection, options);

  const authRoutes = getAuthRoutes(collection, options);
  const customRoutes = getCustomPaths(collection, 'collection');

  return merge(mainRoutes, versionRoutes, bulkRoutes, authRoutes, customRoutes);
};
