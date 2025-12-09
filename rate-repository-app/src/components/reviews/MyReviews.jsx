import { FlatList, View, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../../graphql/queries';
import ReviewItem from './ReviewItem';
import Text from '../Text';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  loading: {
    padding: 20,
    textAlign: 'center',
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const MyReviews = () => {
  const { data, loading } = useQuery(GET_CURRENT_USER, {
    variables: { includeReviews: true }, 
    fetchPolicy: 'cache-and-network',
  });

  console.log('data my reviews', data);

  if (loading) {
    return <Text style={styles.loading}>Loading...</Text>;
  }

  const reviews = data?.me?.reviews
    ? data.me.reviews.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default MyReviews;