import { Pressable, View, StyleSheet, FlatList } from 'react-native';
import { GET_REPOSITORY } from '../graphql/queries';
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';
import Text from './Text';
import RepositoryInfo from './RepositoryInfo';
import { format } from 'date-fns';
import theme from '../theme';

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
    reviewContainer: {
        flexDirection: 'row',
        backgroundColor: theme.colors.whiteText,
        marginTop: 5,
        padding: 10,
    },
    ratingContainer: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        color: theme.colors.textPrimary,
        borderColor: theme.colors.primary,
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 2,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rating: {
        color: theme.colors.primary,
        fontWeight: theme.fontWeights.bold,
        fontSize: theme.fontSizes.subheading,
    }, 
    reviewUserContainer: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        flex: 1,
        flexShrink: 1,
    },
    textReview: {
        flexWrap: 'wrap',
    }
})

const ItemSeparator = () => <View style={styles.separator} />;


const ReviewItem = ({review}) => {
    const formattedDate = format(new Date(review.createdAt), 'dd.MM.yyyy');
    return (
        <View style={styles.reviewContainer}>
            <View style={styles.ratingContainer}>
                <Text style={styles.rating}>{review.rating}</Text>
            </View>
            <View style={styles.reviewUserContainer}>
                <Text fontWeight='bold' fontSize='subheading'>{review.user.username}</Text>
                <Text>{formattedDate}</Text>
                <Text style={styles.textReview}>{review.text}</Text>
            </View>
        </View>
    )
}

const SingleRepository = () => {
   const {id} = useParams();
   const {data, loading, error} = useQuery(GET_REPOSITORY, {
    variables: { repositoryId: id}
   })

   if (loading) {
    return <Text>Loading ...</Text>
   }
   if (error) {
    return <Text>Error: {error.message}</Text>
   }
   if (data) {
    console.log('data single repo', data);
   }

   const repository = data?.repository;
   const reviewNodes = repository?.reviews 
    ? repository.reviews.edges.map(edge => edge.node)
    : [];

   console.log('reviews data', reviewNodes);

   return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      ItemSeparatorComponent={ItemSeparator}
    />
   )
}

export default SingleRepository;
