import React, { Component } from 'react'
import { View, Button, Text, TextInput } from 'react-native'
import MenuBar from './components/MenuBar'
import FeatureCarousel from './components/FeatureCarousel'
import PromotionSegment from './components/PromotionSegment'

class Home extends Component {
    constructor(props) {
        super(props);
    }

    onChange(text, previousText, range) {
        debugger
    }

    onSubChange(text, previousText, range) {
        debugger
    }

    render() {

        const { navigation } = this.props;
        return(
            <View style={{backgroundColor: '#fff'}}>
                <MenuBar navigation={navigation}/>
                <FeatureCarousel/>
                <PromotionSegment/>
            </View>
        )
    }
}

export default Home