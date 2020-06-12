
//  import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';
// import { Provider, connect } from 'react-redux'
// import { NavigationContainer } from '@react-navigation/native';
// import store from './src/redux/store'

// import {
//   Colors,
// } from 'react-native/Libraries/NewAppScreen';

// import { SimpleComponent } from './src/components/SimpleComponent'

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {data: []};
//   }

//   // componentDidMount() {
//   // this.callBackendAPI()
//   //   .then(res => this.setState({ data: res }))
//   //   .catch(err => console.log(err));

//   // }

//   // callBackendAPI = async () => {
//   // const response = await fetch('http://localhost:5000/express_backend');
//   // const body = await response.json();
  
//   // if (response.status !== 200) {
//   //   throw Error(body.message) 
//   // }
//   // return body;
//   // }

//   render() {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <Text>hey</Text>
//       </NavigationContainer>
//     </Provider>
//   );
//   }
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;
import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'

import MainPageContainer from './src/pages/MainScreen/MainScreen.page' 
import MenuPageContainer from './src/pages/OrderScreen/OrderScreen.page' 
import store from './src/redux/store'
import basketIcon from './download.png'

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Main Menu" component={MainPageContainer} />
        <Stack.Screen name="Menu" component={MenuPageContainer}  options={{
          headerTitle: props => <Text {...props}>Menu</Text>,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => alert('This is a button!')}
              title="Info"
              color="red"
              disabled
            ><Image style={{ height: 45, width: 45, margin: 15 }} source={basketIcon} /></TouchableOpacity>
          ),
        }} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;