import React, { Component } from 'react'
import { 
    View, 
    Image,
    StyleSheet,
    Dimensions,
 } from 'react-native'
const { width, height} = Dimensions.get('window');

const splash_img = require('../../assets/images/splash.jpeg')

class SplashScreen extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Image styles={styles.image}
                    source={splash_img}></Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width:width,
        height:height,
        justifyContent:'center',
        alignItems:'center'
    },
    image: {
        resizeMode:'cover'
    }
})

export default SplashScreen