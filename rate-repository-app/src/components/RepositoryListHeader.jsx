import { Menu, Divider, Searchbar } from 'react-native-paper';
import { useState } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
  },
  searchbar: {
    marginBottom: 10,
  },
  menuButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

const RepositoryListHeader = ({ 
    selectedOrder, 
    setSelectedOrder, 
    searchQuery, 
    setSearchQuery 
}) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const orderOptions = {
    latest: 'Latest repositories',
    highest: 'Highest rated repositories',
    lowest: 'Lowest rated repositories',
  };

  const handleSelect = (order) => {
    setSelectedOrder(order);
    closeMenu();
  };

  return (
    <View style={styles.container}>
      <Searchbar 
        placeholder='Search' 
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.searchbar}
       />
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Pressable onPress={openMenu} style={styles.menuButton}>
            <Text>{orderOptions[selectedOrder]}</Text>
          </Pressable>
        }
      >
        <Menu.Item
          onPress={() => handleSelect('latest')}
          title="Latest repositories"
        />
        <Divider />
        <Menu.Item
          onPress={() => handleSelect('highest')}
          title="Highest rated repositories"
        />
        <Divider />
        <Menu.Item
          onPress={() => handleSelect('lowest')}
          title="Lowest rated repositories"
        />
      </Menu>
    </View>
  );
};

export default RepositoryListHeader;