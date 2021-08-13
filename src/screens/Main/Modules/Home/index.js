import React, { Component } from 'react'
import { View, Button } from 'react-native'
import MenuBar from './components/MenuBar'

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { navigation } = this.props;
        return(
            <View>
                <MenuBar navigation={navigation}/>
                <Button title="go to TackOut" onPress={() => {
                    navigation.navigate('TackOut')
                }}/>
            </View>
        )
    }
}

export default Home