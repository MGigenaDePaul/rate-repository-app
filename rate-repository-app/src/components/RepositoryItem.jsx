import { View, Image, StyleSheet} from 'react-native';
import Text from './Text';

const formatCount = (count) => {
  if (count >= 1000) {
    return (count / 1000).toFixed() + 'k';
  }
  return count.toString();
}

const RepositoryItem = ({ item }) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      backgroundColor: '#ffff',
    },
    avatar: {
      width: 50,
      height: 50, 
      borderRadius: 5,
      marginRight: 15,
      marginLeft: 10,
      marginTop: 5,
    },
    topSection: {
      flexDirection: 'row',
      marginBottom: 15,
      maxWidth: '80%',
      marginTop: 8
    },
    bottomSection: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginBottom: 8
    },
    statItem: {
      alignItems: 'center',
    },
  })
  return (
    <View testID="repositoryItem" style={styles.container}>
      <View style={styles.topSection}>
        <Image style={styles.avatar} source={{uri: item.ownerAvatarUrl}} />
        <View>
          <Text fontWeight='bold' fontSize='heading'>{item.fullName}</Text>
          <Text fontSize='subheading'>{item.description}{'\n'}</Text>
          <Text color='white'>{item.language}</Text>
        </View>
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.statItem}>
          <Text color='textPrimary' fontWeight='bold'>{formatCount(item.stargazersCount)}</Text>
          <Text style={styles.statText}>Stars</Text>
        </View>
        <View style={styles.statItem}>
          <Text color='textPrimary' fontWeight='bold'>{formatCount(item.forksCount)}</Text>
          <Text color='textSecondary'>Forks</Text>
        </View>
        <View style={styles.statItem}>        
          <Text color='textPrimary' fontWeight='bold'>{item.reviewCount}</Text>
          <Text color='textSecondary'>Reviews</Text>
        </View>
        <View style={styles.statItem}>
          <Text color='textPrimary' fontWeight='bold'>{item.ratingAverage}</Text>
          <Text color='textSecondary'>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;