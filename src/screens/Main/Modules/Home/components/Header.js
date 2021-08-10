import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { InputItem } from '@ant-design/react-native'

class Header extends Component {
    render() {
        return (
                <View>
                    <SafeAreaView style={styles.headerContainer}>
                        <View style={{flexShrink: 1}}>
                            <Text>上海</Text>
                            <Text>多云 30℃</Text>
                        </View>
                        <InputItem placeholder='搜索' style={styles.input}></InputItem>
                        
                    </SafeAreaView>
                </View>

        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        backgroundColor: '#ffc300',
        height: 100
    },
    input: {
        flexGrow: 1,
        flexBasis: 200,
        backgroundColor: '#fff',
        borderRadius: 4,
        
    }
})

export default Header