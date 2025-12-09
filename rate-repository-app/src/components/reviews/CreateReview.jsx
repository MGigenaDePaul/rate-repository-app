import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-native';
import { CREATE_REVIEW } from '../../graphql/mutations';
import CreateReviewForm from './CreateReviewForm';

const CreateReview = () => {
    const navigate = useNavigate();
    const [createReview] = useMutation(CREATE_REVIEW); 

    const onSubmit = async (values) => {
        const { ownerName, repositoryName, rating, text } = values;

        try {
            const { data } = await createReview({
                variables: {
                    review: {
                        ownerName,
                        repositoryName,
                        rating: Number(rating),
                        text: text || undefined,
                    },
                },
            });

            navigate(`/repository/${data.createReview.repositoryId}`);
        } catch (e) {
            console.log('Error creating review:', e);
        }
    };

    return <CreateReviewForm onSubmit={onSubmit} />;
};

export default CreateReview;