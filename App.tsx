import React, { FC, useState } from 'react';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';

import LoginScreen from './screens/LoginScreen';

const cacheImages = (images: any) => {
  return images.map((image: any) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};

const App: FC = () => {
  const [isReady, setIsReady] = useState<boolean>(false);

  const _loadAssetsAsync = async () => {
    const imageAssets = cacheImages([require('./assets/background.jpg')]);

    await Promise.all([...imageAssets]);
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={_loadAssetsAsync}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return <LoginScreen />;
};

export default App;
