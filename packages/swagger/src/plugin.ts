import { Payload } from 'mzinga';
import { Config } from 'mzinga/config';
import path from 'path';
import { loadSwagger } from './swagger';
import { Options } from './types';

/**
 * MZinga swagger plugin
 */
export const swagger =
  (options?: Options) =>
  (config: Config): Config => ({
    ...config,
    admin: {
      ...config.admin,
      webpack: webpackConfig => {
        const modifiedConfig = {
          ...webpackConfig,
          resolve: {
            ...webpackConfig.resolve,
            fallback: {
              fs: false,
              ...webpackConfig.resolve?.fallback,
            },
            alias: {
              ...webpackConfig.resolve?.alias,
              [path.resolve(__dirname, './swagger')]: path.resolve(__dirname, 'utils/dummy-module'),
            },
          },
        } as any;
        if (config.admin?.webpack) {
          return config.admin.webpack(modifiedConfig);
        }
        return modifiedConfig;
      },
    },
    onInit: async (payload: Payload) => {
      await loadSwagger(payload, options);

      if (config.onInit) {
        return config.onInit(payload);
      }
    },
  });
