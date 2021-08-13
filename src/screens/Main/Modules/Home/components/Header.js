import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Geolocation from '@react-native-community/geolocation'
import { Popover } from '@ant-design/react-native'
import Theme from '@/common/Theme'
import { fetchPosition } from '@/libs/api'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curCity: '-', // 当前定位城市
        }
    }

    initCurCity = () => {
        Geolocation.getCurrentPosition(
            async (position) => {
                const { longitude, latitude, altitude } = position.coords;
                const {
                    code, 
                    data: {city = '-'} = {}
                } = await fetchPosition(`${latitude},${longitude},${altitude}`);

                this.setState({curCity: city});
            },
            (error) => {
                return '';
            }
          )
    }

    componentDidMount() { 
        this.initCurCity();
    }

    onPopoverSelect = (value) => {
        const { navigation } = this.props;

        switch(value) {
            case 'Scan':
                navigation.navigate('ScannerScreen')
                break;
            case 'QR':
                break;
            case 'Bill':
                break;
            default: 
                break;
        }
    }

    renderOverlay() {
        return([
            <Popover.Item value={'Scan'} style={[styles.popoverItem, {borderBottomWidth: 1, borderBottomColor: '#696969'}]}>
                <Text style={styles.popoverIcon}>{'\ue6b3'}</Text>
                <Text style={styles.popoverText}>扫一扫</Text>
            </Popover.Item>,
            <Popover.Item value={'QR'} style={[styles.popoverItem, {borderBottomWidth: 1, borderBottomColor: '#696969'}]}>
                <Text style={styles.popoverIcon}>{'\ue609'}</Text>
                <Text style={styles.popoverText}>付款码</Text>
            </Popover.Item>,
            <Popover.Item value={'Bill'}  style={styles.popoverItem}>
                <Text style={styles.popoverIcon}>{'\ue613'}</Text>
                <Text style={styles.popoverText}>开发票</Text>
            </Popover.Item>
        ])
    }

    render() {
        const { curCity } = this.state;

        return (
            <View style={styles.headerContainer}>
                <View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 16, fontWeight: '800', alignSelf: 'center'}}>{curCity}</Text>
                        <Text style={[styles.iconStyle, {fontSize: 16}]}>{'\ue618'}</Text>
                    </View>
                    <Text style={{fontSize: 10, marginTop: 6}}>多云 30℃</Text>
                </View>
                <View style={styles.inputWrap}>
                <Text style={{fontFamily: 'iconfont'}}>{'\ue60e'}</Text>
                    <TextInput 
                        placeholder='搜索' 
                        style={styles.input}/>
                </View>
                <Text style={styles.iconStyle}>{'\ue615'}</Text>
                <Popover
                    overlay={this.renderOverlay()}
                    styles={{
                        arrow: styles.popoverArrowStyle,
                        content: styles.popoverContentStyle
                    }}
                    placement='bottom'
                    onSelect={this.onPopoverSelect}
                    >
                    <Text style={[styles.iconStyle, {marginLeft: 10}]}>{'\ue608'}</Text>
                </Popover>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Theme.primary,
    },
    inputWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        flexGrow: 1,
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: '#fff',
        borderRadius: 8,
    },
    input: {
        paddingLeft: 5,
        height: 32,
        fontSize: 14,
        color: '#333'
    },
    iconStyle: {
        fontFamily: 'iconfont',
        fontSize: 20,   
    },

    popoverArrowStyle: {
        borderTopColor: '#rgba(0, 0, 0, 0.6)',
    },
    popoverContentStyle: {
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 8,
        paddingRight: 8,
        backgroundColor: '#rgba(0, 0, 0, 0.6)',
        borderRadius: 4,
    },
    popoverItem: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    popoverIcon: {
        fontFamily: 'iconfont',
        fontSize: 20, 
        color: '#fff'
    },
    popoverText: {
        marginLeft: 10,
        color: '#fff', 
    }
})

export default Header