import { Ionicons,Entypo,EvilIcons,MaterialCommunityIcons,FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import LibraryScreen from '../screens/LibraryScreen'
import PremiumScreen from '../screens/PremiumScreen'
import { BottomTabParamList, Home, Search,Library,Premium } from '../types';
import AlbumScreen from '../screens/AlbumScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="home" size={30} color={color} style={{ marginBottom: -3 }} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => <EvilIcons name="search" color={color} size={30} style={{ marginBottom: -3 }}/>,
        }}
      />
      <BottomTab.Screen
        name="Library"
        component={LibraryNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name={"library"} color={color} size={30} style={{ marginBottom: -3 }}/>,
        }}
      />
      <BottomTab.Screen
        name="Premium"
        component={PremiumNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name={'spotify'} color={color} size={30} style={{ marginBottom: -3 }}/>,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
// function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
//   return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
// }

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<Home>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home' }}
      />
      <HomeStack.Screen
        name="AlbumScreen"
        component={AlbumScreen}
        options={{ headerTitle: 'Album' }}
      />
    </HomeStack.Navigator>
  );
}

const SearchStack = createStackNavigator<Search>();

function SearchNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerTitle: 'Search' }}
      />
    </SearchStack.Navigator>
  );
}

const LibraryStack = createStackNavigator<Library>();

function LibraryNavigator() {
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen
        name="LibraryScreen"
        component={LibraryScreen}
        options={{ headerTitle: 'Library' }}
      />
    </LibraryStack.Navigator>
  );
}

const PremiumStack = createStackNavigator<Premium>();

function PremiumNavigator() {
  return (
    <PremiumStack.Navigator>
      <PremiumStack.Screen
        name="PremiumScreen"
        component={PremiumScreen}
        options={{ headerTitle: 'Premium' }}
      />
    </PremiumStack.Navigator>
  );
}
