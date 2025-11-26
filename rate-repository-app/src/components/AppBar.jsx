import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.backgroundAppBar,
  }, 
  tabText: {
    color: theme.colors.whiteText,
    fontSize: theme.fontSizes.subheading,
    paddingHorizontal: 10,
    marginBottom: 15
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
        <Link to='/'>
            <Text style={styles.tabText}>Repositories</Text>
        </Link>
        <Link to='/signIn'>
            <Text style={styles.tabText}>Sign In</Text>
        </Link>
    </View>
  );
};

export default AppBar;