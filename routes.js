import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './screens.js/home';
import Setting from './screens.js/setting';
import Contact from './screens.js/contact';
import Cam from './screens.js/camera';
import Bright from './screens.js/brightness';
import Counter from './screens.js/counterApp';
import Decision from './screens.js/decisionApp';
import Mylocation from './screens.js/location';
import Mapss from './screens.js/map';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function Route() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Setting" component={Setting} />
        <Drawer.Screen name="Contacts" component={Contact} />
        <Drawer.Screen name="Camera" component={Cam} />
        <Drawer.Screen name="Brightness" component={Bright} />
        <Drawer.Screen name="Counter App" component={Counter} />
        {/* <Drawer.Screen name="Decision App" component={Decision} /> */}
        <Drawer.Screen name="Location" component={Mylocation}/>
        <Drawer.Screen name="Map View" component={Mapss}/>

      </Drawer.Navigator>
    </NavigationContainer>

/* <NavigationContainer>
<Tab.Navigator
           screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
                  if (route.name === 'home') {
                  iconName = focused
                      ? "home"
                        : 'ios-information-circle-outline';
                          } if (route.name === 'setting') {
                          iconName = focused ? 'ios-list-box' : 'setting';
                         }
                         if (route.name === 'contact') {
                          iconName = focused ? 'ios-list-box' : 'phone';
                         }
                         if (route.name === 'camera') {
                          iconName = focused ? 'ios-list-box' : 'camera';
                         }
                         if (route.name === 'brightness') {
                          iconName = focused ? 'Sun' : 'Sun';
                         }

 // You can return any component that you like here!
   return <Ionicons name={iconName} size={size} color={color} />;
            },
             tabBarActiveTintColor: 'green',
                 tabBarInactiveTintColor: 'blue',
                        })}
                        
                    >
                        <Tab.Screen name="home" component={Home} />
                        <Tab.Screen name="setting" component={Setting} />
                        <Tab.Screen name="contact" component={Contact} />
                        <Tab.Screen name="camera" component={Cameraa} />
                        <Tab.Screen name="brightness" component={Bright} />
                    </Tab.Navigator>
</NavigationContainer> */

  );
}