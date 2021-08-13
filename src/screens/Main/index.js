import React, { PureComponent } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './Modules/Home'
import HomeHeader from './Modules/Home/components/Header'
import { Text } from 'react-native'
import Theme from '../../common/Theme'


const Tab = createBottomTabNavigator();

export default class MainScreen extends PureComponent {

    getScreenOptions({route}) {

        let iconName;
        switch(route.name) {
            case 'Home':
                iconName = '\ue60d';
                break;
            case 'ECommerce':
                iconName = '\ue621';
                break;
            case 'Message':
                iconName = '\ue60c';
                break;
            case 'Mine':
                iconName = '\ue61a';
                break;
            default:
                break;
        }
        
        return ({
            tabBarIcon: ({focused, color, size}) => {
                return <Text style={{fontFamily: 'iconfont', fontSize: 22, color: focused ? Theme.primary : '#000'}}>{iconName}</Text>
            },
            tabBarLabelStyle: {
                color: '#333'
            }
        })
    }

    render() {
        return(
            <Tab.Navigator
                screenOptions = {(parame) => {return this.getScreenOptions(parame)}}
            >
                <Tab.Screen 
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: '首页',
                        header: ({navigation}) => <HomeHeader navigation={navigation}/>,
                    }}/>
                <Tab.Screen 
                    name="ECommerce" 
                    component={HomeScreen}                    
                    options={{
                        title: '电商',
                    }}/>
                <Tab.Screen 
                    name="Message" 
                    component={HomeScreen}
                    options={{
                        title: '消息',
                    }}/>
                <Tab.Screen 
                name="Mine" 
                component={HomeScreen} 
                options={{
                    title: '我的',
                }}/>
            </Tab.Navigator>
        )
    }
}