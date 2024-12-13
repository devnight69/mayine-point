import React, { useState } from 'react';
import { SafeAreaView, StatusBar, BackHandler } from 'react-native';
import WebView from 'react-native-webview';

const App = () => {
  const [canGoBack, setCanGoBack] = useState(false);

  const handleWebViewNavigationStateChange = (newState:any) => {
    setCanGoBack(newState.canGoBack);
  };

  const handleBackButtonPress = () => {
    if (canGoBack) {
      webViewRef.current.goBack();
      return true;
    } else {
      return false;
    }
  };

  const webViewRef:any = React.createRef();

  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButtonPress);
    return () => backHandler.remove();
  }, [canGoBack]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={'#533dea'} barStyle="default" />
      <WebView
        ref={webViewRef}
        source={{ uri: 'https://mayinepoint.com/usernew/' }}
        onNavigationStateChange={handleWebViewNavigationStateChange}
      />
    </SafeAreaView>
  );
};

export default App;