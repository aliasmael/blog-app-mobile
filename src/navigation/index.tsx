import * as React from 'react'
import { DrawerNavigator } from 'react-navigation'
import Sidebar from '../components/Sidebar/Sidebar'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import ExploreScreen from '../screens/ExploreScreen/ExploreScreen'

const Navigator = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Explore: { screen: ExploreScreen }
  },
  {
    contentComponent: props => <Sidebar {...props} />
  }
)
export default Navigator