import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

// MemoListメイン画面
const AnimeList_Screen = (): JSX.Element => {
  return (
    // 外枠
    <View style={styles.container}>
        <Text>releaseNotes_Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    // 全体背景色
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
})

export default AnimeList_Screen
