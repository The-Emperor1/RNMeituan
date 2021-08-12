import React, { Component, Fragment } from 'react'
import AppScreen from './src/navigation/index'
import { SafeAreaView } from 'react-native-safe-area-context'

class App extends Component {

    render() {
        return (
            <Fragment>
                <SafeAreaView style={{flex: 0, backgroundColor: '#ffc300'}}></SafeAreaView>
                <SafeAreaView style={{flex: 1, backgroundColor: '#fffff'}}>
                    <AppScreen/>
                </SafeAreaView>
            </Fragment>
        )
    }
}

export default App