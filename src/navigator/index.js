import React, { Component } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from "../screens/Splash"
import MainScreen from '../screens/Main'
import ScannerScreen from '../screens/ScannerScreen'
import TackOutScreen from '../screens/TakeOut'

class Navigator extends Component {

    constructor() {
        super();

        this.state = {
            enterAble: true,
        }
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         enterAble: true
        //     })
        // }, 3000)
    }

    renderApp() {

        const Stack = createNativeStackNavigator();

        return(
            <SafeAreaProvider>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen 
                            name="Main" 
                            component={MainScreen}
                            options={{headerShown: false}}/>
                        <Stack.Screen name="TackOut" component={TackOutScreen} />
                        <Stack.Screen 
                            name="ScannerScreen" 
                            component={ScannerScreen}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        )
    }

    render() { 
        return (this.state.enterAble ? this.renderApp()
                                     : <SplashScreen/>)
    }
}

export default Navigator