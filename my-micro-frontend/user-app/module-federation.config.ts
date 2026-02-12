import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'user-app',
  exposes: {
    './Routes': 'user-app/src/app/remote-entry/entry.routes.ts',
  },
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
