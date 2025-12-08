import {StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import { Route, Routes, Navigate } from 'react-router-native';

import theme from '../theme';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SingleRepository from './SingleRepository';
import CreateReview from './CreateReview';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/createReview' element={<CreateReview />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path='/repository/:id' element={<SingleRepository />} />
      </Routes>
    </View>
  );
};

export default Main;