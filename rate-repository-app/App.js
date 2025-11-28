import { StatusBar } from 'expo-status-bar';
import { ApolloProvider } from '@apollo/client/react';
import { NativeRouter } from 'react-router-native';
import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient';
import Constants from 'expo-constants';


const apolloClient = createApolloClient();

const App = () => {
  console.log('EXPO CONSTANTS', Constants.expoConfig);
  console.log("APOLLO URI:", Constants.expoConfig.extra.apolloUri);

  return (
      <NativeRouter>
        <ApolloProvider client={apolloClient} >
        <Main />
        </ApolloProvider>
      </NativeRouter>
  );
};

export default App;