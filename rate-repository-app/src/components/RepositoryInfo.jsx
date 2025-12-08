import { View, Pressable, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import theme from "../theme";
import Text from "./Text";
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.whiteText,
        padding: 5,        
    },
    openButton: {
        color: theme.colors.whiteText,
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
        padding: 5,
        width: '90%',
        alignSelf: 'center',
    }, 
    text: {
        alignSelf: 'center',
    }
})

const RepositoryInfo = ({ repository }) => {
    return (
        <View style={styles.container}>
            <RepositoryItem item={repository} />
            <Pressable style={styles.openButton} onPress={() => Linking.openURL(repository.url)}>
                <Text color='white' style={styles.text}>Open in GitHub</Text>
            </Pressable>
        </View>
    )
}

export default RepositoryInfo;