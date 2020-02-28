import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NewsList from './screens/NewsList';
import News from './screens/News';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="NewsList"
          component={NewsList}
          options={{title: 'Top stories'}}
        />
        <Stack.Screen name="News" component={News} options={{title: 'Story'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
