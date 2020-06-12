import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'

import MainPageContainer from './src/pages/MainScreen/MainScreen.page' 
import MenuPageContainer from './src/pages/OrderScreen/OrderScreen.page' 
import CheckoutContainer from './src/pages/Checkout/Checkout.page'
import store from './src/redux/store'
import BasketIcon from './src/components/BasketIcon'

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main Menu">
        <Stack.Screen name="Resturants" component={MainPageContainer} />
        <Stack.Screen name="Menu" component={MenuPageContainer}  options={({navigation, route}) => ({
          headerRight: () => (
            <BasketIcon navigation={navigation} />
          ),
        })
        } />
        <Stack.Screen name="Checkout" component={CheckoutContainer} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;