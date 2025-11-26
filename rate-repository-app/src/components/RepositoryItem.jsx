import { View, Text, Image, StyleSheet} from 'react-native';
import theme from '../theme';

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
      marginTop: 7,
      backgroundColor: '#ffff',
    },
    avatar: {
      width: 50,
      height: 50, 
      borderRadius: 5,
      marginRight: 15,
      marginLeft: 10
    },
    fullName: {
      fontSize: theme.fontSizes.heading,
      fontWeight: theme.fontWeights.bold,
      marginBottom: 5,
    },
    description: {
      fontSize: theme.fontSizes.subheading,
      color: theme.colors.textSecondary,
      marginBottom: 5,
    },
    language: {
      alignSelf: 'flex-start',
      backgroundColor: theme.colors.primary,
      color: theme.colors.textPrimary,
      padding: 10,
      borderRadius: 5,
    },
    topSection: {
      flexDirection: 'row',
      marginBottom: 15,
      maxWidth: '80%'
    },
    bottomSection: {
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    statItem: {
      alignItems: 'center',
    },
    statNumber: {
      fontWeight: theme.fontWeights.bold,
      fontSize: theme.fontSizes.subheading,
    },
    statText: {
      color: theme.colors.textSecondary,
      fontSize: theme.fontSizes.subheading,
    }
  })
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image style={styles.avatar} source={{uri: item.ownerAvatarUrl}} />
        <View>
          <Text style={styles.fullName}>{item.fullName}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.language}>{item.language}</Text>
        </View>
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{formatCount(item.stargazersCount)}</Text>
          <Text style={styles.statText}>Stars</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{formatCount(item.forksCount)}</Text>
          <Text style={styles.statText}>Forks</Text>
        </View>
        <View style={styles.statItem}>        
          <Text style={styles.statNumber}>{item.reviewCount}</Text>
          <Text style={styles.statText}>Reviews</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{item.ratingAverage}</Text>
          <Text style={styles.statText}>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;