import React from 'react';
import { WebView } from 'react-native-webview';

export default function RepoPage({ navigation }) {
  const url = navigation.getParam('url');
  return <WebView source={{ uri: url }} style={{ flex: 1 }} />;
}
