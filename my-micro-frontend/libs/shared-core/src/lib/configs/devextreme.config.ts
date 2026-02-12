import { EnvironmentProviders, makeEnvironmentProviders, APP_INITIALIZER } from '@angular/core';
import config from 'devextreme/core/config';


export const DEVEXTREME_LICENSE_KEY = 'ewogICJmb3JtYXQiOiAxLAogICJjdXN0b21lcklkIjogIjcwYzA0YzlhLTdjODgtMTFlNC04MGMwLTAwMjU5MGQ5ZDVmZiIsCiAgIm1heFZlcnNpb25BbGxvd2VkIjogMjQyCn0=.n0KFesbgrGJz/hdWKBs2wzCc0K/jvIw5FdP57Fta/Bd3qTEcfP7uuu0ZxbCbrzrenVGhEc/MPo0e8Ji+/Gctrz9A79dPQPMHpeDr9Wad4lJFpDf6ddFpGb4/Cp585wSU1P83MA==';

export function registerDevExtremeLicense() {
    console.log('Attempting to register DevExtreme license...', DEVEXTREME_LICENSE_KEY);
    config({
        licenseKey: DEVEXTREME_LICENSE_KEY
    });
    console.log('DevExtreme license registered.');
}

export function provideDevExtreme(): EnvironmentProviders {
    return makeEnvironmentProviders([
        {
            provide: APP_INITIALIZER,
            useFactory: () => {
                return () => {
                    registerDevExtremeLicense();
                };
            },
            multi: true
        }
    ]);
}
