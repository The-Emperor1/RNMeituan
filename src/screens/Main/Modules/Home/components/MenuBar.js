import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Theme from '@/common/Theme';

export default class MenuBar extends Component {
    constructor(props) {
        super(props);
    }

    renderMenuItem = (item) => {
        return(
            <TouchableWithoutFeedback
                key={item.name} 
                onPress={() => {
                    this.onMenuPress(item.name)
                }}>
                <View
                    style={styles.itemWrap} 
                    >
                    <Text style={styles.icon}>{item.icon}</Text>
                    <Text style={styles.text}>{item.title}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    onMenuPress(itemName) {
        const { navigation } = this.props;
        
        switch(itemName) {
            case 'Scan':
                navigation.navigate('ScannerScreen');
                break;
            case 'QR':
                break;
            case 'Bill':
                break;
            case 'Cycle':
                break;
            default: 
                break;
        }
    }

    render() {
        const menuList = [
            {
                name: 'Scan',
                title: '扫一扫',
                icon: '\ue6b3'
            },
            {
                name: 'QR',
                title: '付款码',
                icon: '\ue609'
            },            
            {
                name: 'Bill',
                title: '红包/卡券',
                icon: '\ue613'
            },
            {
                name: 'Cycle',
                title: '骑车',
                icon: '\ue6b4'
            }
        ]

        return(
            <View style={styles.container}>
                {menuList.map((item) => { 
                    return this.renderMenuItem(item)})
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 10,
        paddingBottom: 30,
        backgroundColor: Theme.primary,
    },
    itemWrap: {
        alignItems: 'center'
        
    },
    icon: {
        fontFamily: 'iconfont',
        fontSize: 42
        
    },
    text: {
   
    }
})