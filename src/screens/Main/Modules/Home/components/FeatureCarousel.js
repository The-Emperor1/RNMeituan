import React, { Component } from 'react'
import { WingBlank, Carousel } from '@ant-design/react-native'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'

class FeatureCarousel extends Component {


    getCarouselDate() {
        const features = this.props.features;
        const piceNum = 15;
        const carouselDate = [];
        
        for(let i=0, len = features.length; i < len;) {
            if(parseInt((len-i)/piceNum) > 0) {
                carouselDate.push(features.slice(i, i+piceNum));
                i =+ piceNum;
            }else {
                carouselDate.push(features.slice(i));
                i = len;
            }
        } 
        
        return carouselDate;
    }

    renderCarouselContent = (featureArr) => {
        return featureArr.length > 0 ? 
            <View
                autoplay={false}
                style={styles.carousel}
            >
                {
                    featureArr.map(item => {
                        return <View key={item.name} style={styles.itemWrap}>
                            <Text style={styles.itemIcon}>{item.icon}</Text>
                            <Text style={styles.itemText}>{item.title}</Text>
                        </View>
                        
                    })
                }

            </View> : null
            
    }

    render() {
        const carouselDate = this.getCarouselDate();
        return(
            <WingBlank>
                <Carousel
                    autoplay={false}
                    style={styles.carouselWrap}
                >
                    {
                        carouselDate.map(item => {
                            return this.renderCarouselContent(item)
                        })
                    }
                </Carousel>
            </WingBlank>
        )
    }

    componentDidMount() {
        this.props.fetchFeatures();
    }

}

const styles = StyleSheet.create({
    carouselWrap: {
        width: '100%', 
        height: 200, 
    },
    carousel: {
        flexDirection: 'row', 
        flexWrap: 'wrap',
        paddingTop: 10,
        paddingBottom: 10,
    },

    itemWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%'
    },
    itemIcon: {
        fontSize: 32,
        fontFamily: 'iconfont'
    },
    itemText: {
        marginTop: 6,
        fontSize: 12
    }
})

const mapStateToProps = (state) => {
    const { home: { features } } = state;
    return { 
        features, 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFeatures: () => dispatch.home.fetchFeatures(),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeatureCarousel);