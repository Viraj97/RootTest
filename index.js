// import 'react-native-gesture-handler';
// /**
//  * @format
//  */
// import * as React from 'react';
// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
// import {NavigationContainer} from '@react-navigation/native';

// export default function Demo() {
//   return <NavigationContainer>{
//     AppRegistry.registerComponent(appName, () => App)
//     }
//     </NavigationContainer>;
// }

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
