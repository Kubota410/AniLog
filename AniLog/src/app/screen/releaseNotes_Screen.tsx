import React from 'react'
import { View, StyleSheet } from 'react-native'
import HeaderSub from '../../components/HeaderSub'

// MemoListメイン画面
const releaseNotes_Screen = (): JSX.Element => {
  return (
    // 外枠
    <View style={styles.container}>
        {/* ヘッダー */}
        <HeaderSub subTitleStr='アプデ日記' />

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

export default releaseNotes_Screen
