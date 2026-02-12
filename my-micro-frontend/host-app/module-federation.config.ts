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
      libraryName === '@ngx-translate/core' ||
      libraryName === 'primeng' ||
      libraryName.startsWith('primeng/') ||
      libraryName === '@primeng/themes' ||
      libraryName.startsWith('@primeng/themes/') ||
      libraryName === 'devextreme' ||
      libraryName.startsWith('devextreme/') ||
      libraryName === 'devextreme-angular' ||
      libraryName.startsWith('devextreme-angular/');

    if (isShared) {
      // Core Angular packages must be eager to avoid loadShareSync errors
      const isEager = libraryName.startsWith('@angular/') ||
        libraryName === 'zone.js' ||
        libraryName.startsWith('rxjs') ||
        libraryName === 'devextreme' ||
        libraryName.startsWith('devextreme/') ||
        libraryName === 'devextreme-angular' ||
        libraryName.startsWith('devextreme-angular/');

      return {
        ...sharedConfig,
        singleton: true,
        strictVersion: false,
        requiredVersion: false,
        eager: isEager  // Critical packages loaded eagerly
      };
    }
    return sharedConfig;
  },
};

export default config;
