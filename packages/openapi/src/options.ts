import { SanitizedConfig } from 'mzinga/config';
import { Version, getMZingaVersion, supports, toVersion } from './utils';

/**
 * MZinga openapi options
 */
export interface RawOptions {
  /**
   * By default the access functions on all collections in the config are called to determine the access level of the operations.
   * @type {boolean} set to `true` to disable this behaviour
   * @type {string[]} or list the collections for which to opt out
   */
  disableAccessAnalysis?: boolean | string[];
  /**
   * Exclude parts of the payload config from document generation
   */
  exclude?: {
    authPaths?: boolean;
    authCollection?: boolean;
    passwordRecovery?: boolean;
    preferences?: boolean;
    custom?: boolean;
  };
  /**
   * MZinga version is automatically determined.
   * If this is not possible (for instance in monorepo), it can be provided as option
   */
  mzingaVersion?: string;
}

export interface Options {
  mzingaVersion?: Version;
  access: {
    analyze: (slug: string) => boolean;
    cookieName: string;
    apiKey: boolean;
  };
  include: {
    authPaths: boolean;
    authCollection: boolean;
    passwordRecovery: boolean;
    preferences: boolean;
    custom: boolean;
  };
  supports: {
    bulkOperations: boolean;
  };
}

export const parseOptions = async (options: RawOptions = {}, mzingaConfig: SanitizedConfig): Promise<Options> => {
  const mzingaVersion = options.mzingaVersion ? toVersion(options.mzingaVersion) : await getMZingaVersion();

  return {
    mzingaVersion,
    access: {
      analyze: Array.isArray(options.disableAccessAnalysis)
        ? slug => !(options.disableAccessAnalysis as string[]).includes(slug)
        : () => !options.disableAccessAnalysis,
      cookieName: `${mzingaConfig.cookiePrefix || 'payload'}-token`,
      apiKey: mzingaConfig.collections.some(collection => collection.auth?.useAPIKey),
    },
    include: {
      authPaths: !options.exclude?.authPaths,
      authCollection: !options.exclude?.authCollection,
      passwordRecovery: options.exclude?.passwordRecovery === false,
      preferences: options.exclude?.preferences === false,
      custom: !options.exclude?.custom,
    },
    supports: {
      bulkOperations: supports(toVersion('1.6.24'), mzingaVersion),
    },
  };
};
