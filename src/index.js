import React from 'react';
import { TOKEN } from 'react-native-dotenv';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import store from '~/store';

import Routes from './routes';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        authorization: `bearer ${TOKEN}`,
      },
    }));
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <StatusBar barStyle="light-content" backgroundColor="#ED213A" />
        <Routes />
      </ApolloProvider>
    </Provider>
  );
}
