import { View, StyleSheet, Pressable, Alert } from 'react-native';
import Text from '../Text';
import theme from '../../theme';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-native';

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
  viewRepositoryButton: {
    color: theme.colors.whiteText,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 10,
    textAlign: 'center', 
  },
  deleteReviewButton: {
    color: theme.colors.whiteText,
    backgroundColor: theme.colors.error,
    borderRadius: 5,
    padding: 10,
    textAlign: 'center', 
    marginLeft: 10,
  },
  viewButtons: {
    flexDirection: 'row',
    marginTop: 10,
    width: '50%',
    padding: 10,
  }
  
});

const ReviewItem = ({ review, onDelete }) => {
  const navigate = useNavigate();
  const formattedDate = format(new Date(review.createdAt), 'dd.MM.yyyy');

  const handleViewRepository = () => {
    navigate(`/repository/${review.repository.id}`)
  }

   const handleDelete = () => {
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => onDelete(review.id), 
          style: 'destructive',
        },
      ]
    );
  };

  console.log('Full review object:', review);
  console.log('Review ID:', review.id);
  
  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>{review.rating}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.repositoryName}>{review.repository.fullName}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
        <Text>{review.text}</Text>
        <View style={styles.viewButtons}>
          <Pressable onPress={handleViewRepository}>
            <Text style={styles.viewRepositoryButton}>View repository</Text>
          </Pressable>
          <Pressable onPress={handleDelete}>
            <Text style={styles.deleteReviewButton}>Delete review</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ReviewItem;