import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './Modules/Home'
import HomeHeader from './Modules/Home/components/Header'

const Tab = createBottomTabNavigator();

export default class MainScreen extends Component {
    render() {
        return(
            <Tab.Navigator>
                <Tab.Screen 
                name="Home"
                component={HomeScreen}
                options={{
                    header: () => <HomeHeader/>,
                    headerStyle: {backgroundColor: '#ffc300'}
                }}/>
                <Tab.Screen name="电商" component={HomeScreen} />
                <Tab.Screen name="消息" component={HomeScreen} />
                <Tab.Screen name="我的" component={HomeScreen} />
            </Tab.Navigator>
        )
    }
}