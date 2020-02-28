import React, {useState} from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, Linking } from 'react-native';
import { WebView } from 'react-native-webview';

const HEADER_HEIGHT = 100
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    padding: 20,
    textAlign: 'center',
    height: HEADER_HEIGHT
  },
  webViewContainer: {
    top: HEADER_HEIGHT,
    bottom: 0,
    right: 0,
    left: 0,
    position: 'absolute'
  },
  floatingButton: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: 'blue',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 20,
    bottom: 20  
  },
  floatingButtonText: {
    color: 'white'
  }
})

function openLink(link){
  Linking.openURL(link).catch((err) => console.error(err));
}

function News(props) {
  const { route } = props
  const story = route.params.story
  if (!story) return null
  const [loading, setLoading] = useState(true)
  return (
    <View style={{flex: 1}}>
      <Text style={styles.title}>{story.title}</Text>
      <View style={styles.webViewContainer}>
        {!!loading && <ActivityIndicator size={'large'}/>}
        <WebView onLoad={() => setLoading(false)} source={{ uri: story.url }}/>
      </View>
      <TouchableOpacity style={styles.floatingButton} onPress={() => openLink(story.url)}>
        <Text style={styles.floatingButtonText}>Open</Text>
      </TouchableOpacity>
    </View>
  )
}


export default News;