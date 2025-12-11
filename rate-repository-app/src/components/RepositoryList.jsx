import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';
import { useState } from 'react';
import { useDebounce } from 'use-debounce'; 
import RepositoryListHeader from './RepositoryListHeader';
import React from 'react';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { selectedOrder, setSelectedOrder, searchQuery, setSearchQuery } = this.props;

    return (
      <RepositoryListHeader 
        selectedOrder={selectedOrder}
        setSelectedOrder={setSelectedOrder}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    );
  };

  render() {
    const { repositories, navigate, onEndReach } = this.props;
    
    const repositoryNodes = repositories
      ? repositories.edges.map((edge) => edge.node)
      : [];

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponent={this.renderHeader}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigate(`/repository/${item.id}`)}>
            <RepositoryItem item={item} />
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

const RepositoryList = () => {
  const navigate = useNavigate();
  const [selectedOrder, setSelectedOrder] = useState('latest');
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);

  const getOrderVariables = () => {
    switch(selectedOrder){
      case 'highest':
        return { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' };
      case 'lowest':
        return { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' };
      case 'latest':
      default:
        return { orderBy: 'CREATED_AT', orderDirection: 'DESC' };
    }
  };

  const variables = {
    ...getOrderVariables(),
    searchKeyword: debouncedSearchQuery || undefined,
  }

  const { repositories, fetchMore } = useRepositories({
    first: 3,
    ...variables
  });

  const onEndReach = () => {
    fetchMore();
    console.log('You have reached the end of the list');
  };

  return (
    <RepositoryListContainer 
      repositories={repositories} 
      onEndReach={onEndReach}
      selectedOrder={selectedOrder}
      setSelectedOrder={setSelectedOrder}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      navigate={navigate}
    />
  );
};

export default RepositoryList;