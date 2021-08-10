import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './Modules/Home'

const Tab = createBottomTabNavigator();

class TakeOutScreen extends Component {
    render() {
        return(
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
            </Tab.Navigator>
        )
    }
}

export default TakeOutScreen