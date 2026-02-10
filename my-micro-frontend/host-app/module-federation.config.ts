import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'host-app',
  /**
   * Production URLs:
   * user-app: http://172.28.161.184:4212
   */
  remotes: [
    ['user-app', 'http://172.28.161.184:4212/remoteEntry.mjs'],
  ],
  shared: (libraryName, sharedConfig) => {
    const isShared = libraryName.startsWith('@angular/') ||
      libraryName.startsWith('rxjs') ||
      libraryName === 'zone.js' ||
      libraryName === 'tslib' ||
      libraryName === '@ngx-translate/core';

    if (isShared) {
      return {
        ...sharedConfig,
        singleton: true,
        strictVersion: false,   // Versiyon farkı olsa da çalışma
        requiredVersion: false, // Belirli sürüm dayatmasını kaldır
        eager: false
      };
    }
    return sharedConfig;
  },
};

export default config;
