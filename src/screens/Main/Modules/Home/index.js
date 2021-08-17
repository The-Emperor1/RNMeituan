import React, { Component } from 'react'
import { View, Button } from 'react-native'
import MenuBar from './components/MenuBar'
import FeatureCarousel from './components/FeatureCarousel'

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { navigation } = this.props;
        return(
            <View style={{backgroundColor: '#fff'}}>
                <MenuBar navigation={navigation}/>
                <FeatureCarousel/>
            </View>
        )
    }
}

export default Home