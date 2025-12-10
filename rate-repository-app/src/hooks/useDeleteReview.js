import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';
import { GET_CURRENT_USER } from '../graphql/queries';

const useDeleteReview = () => {
     const [mutate] = useMutation(DELETE_REVIEW, {
        refetchQueries: [
            { query: GET_CURRENT_USER, variables: { includeReviews: true } }
        ],
        awaitRefetchQueries: true,
    });
    const deleteReview = async (id) => {
        try {
            const { data } = await mutate({
                variables: { deleteReviewId: id }
            });
            console.log('useDeleteReview: Success!', data);
            return data;
        } catch (error) {
            console.error('Mutation error:', error);
            throw error;
        }
    };

    return [deleteReview];
};

export default useDeleteReview;