import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
class PromotionSegment extends Component {

    renderGrid = () => {
        const { optimizationList } = this.props;
        return(<View style={styles.gridWrap}>
            {optimizationList.map((item, index) => {
                return(<View key={index} style={styles.itemWrap}>
                    <Image source={{uri: item.imgUrl}} style={styles.itemImage}/>
                    {item.price ? <Text style={styles.itemText}>¥{item.price}</Text> : null}
                </View>)
            })}
        </View>)
    }
    
    render() {
        return (
            <LinearGradient 
                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                colors={['#ffc300', '#fffda3']}
                style={styles.container}>
                <View style={styles.headerWrap}>
                    <Image
                        style={styles.titleImage}
                        source={require('@/assets/images/meituan/youxuan.png')}
                        />
                    <View style={[styles.tagWrap, {
                        backgroundColor: '#8c6900',
                    }]}>
                        <Text style={[styles.tag, {color: '#fff', }]}>次日</Text>
                    </View>
                    <View style={[styles.tagWrap, {
                        backgroundColor: '#fff',
                    }]}><Text style={[styles.tag, {color: '#8c6900'}]}>自提</Text></View>
                </View>
                {this.renderGrid()}
            </LinearGradient>
        )
    }

    componentDidMount() {
        this.props.fetchOptimizationList();
    }
}

const styles = StyleSheet.create({
    container: {
        height: 240,
        marginHorizontal: 10,
        borderRadius: 8,
        paddingHorizontal: 10,
    },

    headerWrap: {
        height: 26,
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 6,
    },
    titleImage: {
        position: 'relative',
        left: -10,
        width: 60,
        height: 20,

    },
    tagWrap: {
        borderTopLeftRadius: 2,
        borderBottomLeftRadius: 2
    },
    tag: {
        padding: 3,
        fontSize: 12,
        fontWeight: '800',  
    },

    gridWrap: {
        borderRadius: 6,
        backgroundColor: '#fff',
        flexDirection: 'row', 
        flexWrap: 'wrap',
    },
    itemWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '25%',
        marginBottom: 12
        
    },
    itemImage: {
        width: 60,
        height: 60
    },
    itemText: {
        marginTop: 6,
        fontSize: 14,
        color: '#f23244',
        fontWeight: '800'
    }
})

const mapStateToProps = (state) => {
    const { home: { optimizationList } } = state;
    return { 
        optimizationList, 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOptimizationList: () => dispatch.home.fetchOptimizationList(),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PromotionSegment);