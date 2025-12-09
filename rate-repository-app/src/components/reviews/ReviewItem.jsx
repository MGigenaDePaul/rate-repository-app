import { View, StyleSheet } from 'react-native';
import Text from '../Text';
import theme from '../../theme';
import { format } from 'date-fns';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    flexDirection: 'row',
  },
  ratingContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  ratingText: {
    color: theme.colors.primary,
    fontWeight: 'bold',
    fontSize: 18,
  },
  contentContainer: {
    flex: 1,
  },
  repositoryName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  date: {
    color: theme.colors.textSecondary,
    marginBottom: 5,
  },
});

const ReviewItem = ({ review }) => {
  const formattedDate = format(new Date(review.createdAt), 'dd.MM.yyyy');

  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>{review.rating}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.repositoryName}>{review.repository.fullName}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;