import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Link, useNavigate } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../theme';
import { useApolloClient, useQuery } from '@apollo/client/react';
import useAuthStorage from '../hooks/useAuthStorage';
import { ME } from '../graphql/queries';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.backgroundAppBar,
  }, 
  tabText: {
    color: theme.colors.whiteText,
    fontSize: theme.fontSizes.subheading,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontWeight: theme.fontWeights.bold
  },
  scroll: {
    flexDirection: 'row',
  }
});

const AppBar = () => {
  const { data } = useQuery(ME);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();


  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    navigate('/signIn');
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View style={styles.scroll}>
          <Link to='/'>
              <Text style={styles.tabText}>Repositories</Text>
          </Link>
          
          {(data && data.me) ? (
            <Pressable onPress={handleSignOut}>
              <Text style={styles.tabText}>Sign Out</Text>
            </Pressable>
            )
          : <Link to='/signIn'>
              <Text style={styles.tabText}>Sign In</Text>
            </Link>}
        </View>
      </ScrollView>
    </View>
  );
};

export default AppBar;