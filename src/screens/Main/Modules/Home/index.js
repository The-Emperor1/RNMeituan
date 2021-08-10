import React, { Component } from 'react'
import { View, Button } from 'react-native'

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { navigation } = this.props;
        return(
            <View>
                <Button title="go to TackOut" onPress={() => {
                    navigation.navigate('TackOut')
                }}/>
            </View>
        )
    }
}

export default Home