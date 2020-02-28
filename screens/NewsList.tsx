import React, { useState } from 'react';
import { Image, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

import useStoryIdsList from '../hooks/useStoryIds'
import useStoriesList from '../hooks/useStories'
import { TouchableOpacity } from 'react-native-gesture-handler';

const PAGE_ITEMS_COUNT = 20
const styles = StyleSheet.create({
  logo: {
    width: 50, 
    height: 50, 
    alignSelf: 'center'
  },
  title: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 3,
    fontSize: 16
  },
  emptyList: {
    alignSelf: 'center',
    fontSize: 16
  }
})

function renderItem(item, navigation){
  if (!item) return null
  return (
    <TouchableOpacity onPress={() => { navigation.navigate('News', { story: item }) }}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  )
}

function NewsList({navigation}) {
  const [storyIds] = useStoryIdsList()
  const [page, setPage] = useState(1)
  const loadedItemsCount = (page - 1) * PAGE_ITEMS_COUNT
  const [stories, loading] = useStoriesList(storyIds.slice(loadedItemsCount, loadedItemsCount + PAGE_ITEMS_COUNT))
  return (
    <FlatList 
      onRefresh={()=> {}}
      refreshing={loading}
      onEndReached={() => { setPage(page + 1) }}
      onEndReachedThreshold={0}
      keyExtractor={item => item.id.toString()} 
      data={stories} 
      renderItem={({item}) => renderItem(item, navigation)}
      ListEmptyComponent={() => <Text style={styles.emptyList}>List is empty</Text>}
      ListHeaderComponent={() => (
        <Image
          style={styles.logo}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
      )}
    />
  );
}


export default NewsList;