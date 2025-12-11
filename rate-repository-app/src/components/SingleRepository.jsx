import { View, StyleSheet, FlatList } from 'react-native';
import { GET_REPOSITORY } from '../graphql/queries';
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';
import Text from './Text';
import RepositoryInfo from './RepositoryInfo';
import { format } from 'date-fns';
import theme from '../theme';
import useRepository from '../hooks/useRepository';

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
    },
    date: {
        marginBottom: 5,
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
                <Text color='textSecondary' style={styles.date}>{formattedDate}</Text>
                <Text style={styles.textReview}>{review.text}</Text>
            </View>
        </View>
    )
}

export const SingleRepositoryContainer = ({repository, onEndReach}) => {
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
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
        />
    )
}

const SingleRepository = () => {
   const {id} = useParams();
   const {repository, fetchMore} = useRepository(id)

   if (!repository) {
    console.log('no repository yet');
    return null;
   }

   const onEndReach = () => {
        console.log('End reached, fetching more');
        fetchMore();
   }

   return (
    <SingleRepositoryContainer 
        repository={repository} 
        onEndReach={onEndReach}
    />
   )
}

export default SingleRepository;
