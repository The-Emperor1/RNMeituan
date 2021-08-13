import React, { Component, Fragment } from 'react'
import AppScreen from '@/navigator'
import { SafeAreaView } from 'react-native-safe-area-context'
import Theme from './src/common/Theme'
import { Provider } from 'react-redux'
import store from '@/libs/store'

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <SafeAreaView style={{flex: 0, backgroundColor: Theme.primary}}></SafeAreaView>
                    <SafeAreaView style={{flex: 1, backgroundColor: '#fffff'}}>
                        <AppScreen/>
                    </SafeAreaView>
                </Fragment>
            </Provider>

        )
    }
}

export default App