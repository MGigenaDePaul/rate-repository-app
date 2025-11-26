import { View, Text, StyleSheet, Pressable } from 'react-native';
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
        <Pressable>
            <Text style={styles.tabText}>Repositories</Text>
        </Pressable>
    </View>
  );
};

export default AppBar;