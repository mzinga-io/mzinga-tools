import { SanitizedConfig } from 'mzinga/config';
import type { OpenAPIV3 } from 'openapi-types';

import { Options } from '../options';
import { merge } from '../utils';
import { getAuthSchemas } from './auth-schemas';
import { createAccessRoute } from './routes/access';
import { getCollectionRoutes } from './routes/collection';
import { getCustomPaths } from './routes/custom-paths';
import { getGlobalRoutes } from './routes/global';
import { createPreferenceRouts } from './routes/preferences';

export const analyzePayload = async (mzingaConfig: SanitizedConfig, options: Options): Promise<Partial<OpenAPIV3.Document>> => {
  const { paths: preferencePaths, components: preferenceComponents } = createPreferenceRouts(options);
  const { paths: accessPath, components: accessComponents } = createAccessRoute(options);

  const collectionDefinitions = await Promise.all(
    mzingaConfig.collections.map(collection => getCollectionRoutes(collection, options, mzingaConfig)),
  );
  const globalDefinitions = await Promise.all(mzingaConfig.globals.map(global => getGlobalRoutes(global, options, mzingaConfig)));

  const { paths: customPaths, components: customComponents } = options.include.custom
    ? getCustomPaths(mzingaConfig, 'mzinga')
    : { paths: {}, components: {} };

  const paths = merge<OpenAPIV3.PathsObject>(
    {},
    ...collectionDefinitions.map(({ paths }) => paths),
    ...globalDefinitions.map(({ paths }) => paths),
    accessPath,
    preferencePaths,
    customPaths,
  );

  const components = merge<OpenAPIV3.ComponentsObject>(
    getAuthSchemas(mzingaConfig, options),
    preferenceComponents,
    accessComponents,
    ...collectionDefinitions.map(({ components }) => components),
    ...globalDefinitions.map(({ components }) => components),
    customComponents,
  );

  return {
    servers: [{ url: mzingaConfig.routes.api || '/api' }],
    paths,
    components,
  };
};
