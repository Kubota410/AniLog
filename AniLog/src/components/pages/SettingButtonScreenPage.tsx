import React from 'react'
import { View, StyleSheet } from 'react-native'

const SettingButtonScreenPage = (): JSX.Element => {
  return (
    // 外枠
    <View style={styles.container}>
        {/* ボディ */}
        <View style={styles.body}>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    // 全体背景色
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },

    body:{
        backgroundColor: '#DCDCDC',
        flex: 1
    }
})

export default SettingButtonScreenPage
