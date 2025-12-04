import * as Linking from 'expo-linking';
import { Pressable, View, StyleSheet } from 'react-native';
import { GET_REPOSITORY } from '../graphql/queries';
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';
import Text from './Text';
import RepositoryItem from './RepositoryItem';
import theme from '../theme';

const styles = StyleSheet.create({
    openButton: {
        color: theme.colors.whiteText,
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
        padding: 5,
        textAlign: 'center', 
        width: '100%',
    }
})

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

   return (
    <View>
        <RepositoryItem item={repository}/>
        <Pressable onPress={() => Linking.openURL(repository.url)}>
            <Text style={styles.openButton}>Open in GitHub</Text>
        </Pressable>
    </View>
   )
}

export default SingleRepository;
