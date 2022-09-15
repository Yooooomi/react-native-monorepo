// WARNING THIS ISN'T VERSIONED
import {ExpoConfig, ConfigContext} from '@expo/config';

const PACKAGE_NAME = 'com.monorepo.monorepo';
const EAS_PROJECT_ID = '';

export default ({config}: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'Monorepo',
  slug: 'monorepo',
  icon: './assets/images/icon.png',

  splash: {
    image: './assets/images/splash.png',
    resizeMode: 'cover',
  },
  ios: {
    bundleIdentifier: PACKAGE_NAME,
    buildNumber: '1',
  },
  android: {
    package: PACKAGE_NAME,
    versionCode: 1,
    adaptiveIcon: {
      backgroundColor: '#FFF',
      foregroundImage: './assets/images/adaptive-icon.png',
    },
  },
  extra: {
    eas: {
      projectId: EAS_PROJECT_ID,
    },
  },
});
