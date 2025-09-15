import { entityToJSONSchema } from 'mzinga/utilities';
import { OpenAPIV3 } from 'openapi-types';
import createBaseConfig from '../base-config';
import { Options } from '../options';
import { Version, greaterOrEqual, toVersion } from './version';

export const isSupported = (version?: Version) => {
  if (
    !version ||
    greaterOrEqual(toVersion('1.6.0'), version) ||
    (greaterOrEqual(version, toVersion('1.9.3')) && greaterOrEqual(toVersion('1.10.1'), version))
  ) {
    return typeof entityToJSONSchema === 'function';
  }

  // If the version is not any of the known unsupported versions, it should supported.
  // If it's not, we might have a bug and we don't want to hide that.
  return true;
};

export const getUnsupportedSchema = (options: Options): OpenAPIV3.Document => {
  const base = createBaseConfig(options);
  return {
    ...base,
    info: {
      ...base.info,
      description: `OpenAPI documentation is not supported for this version of MZinga.<br/>
        Please make sure  you are using mzinga version 0.0.2 or higher.`,
    },
  };
};
