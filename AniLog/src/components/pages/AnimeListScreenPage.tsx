import React, { useContext } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import AnimeListItem from '../../components/molecules/AnimeListItem'
import { AnnictDataContext } from '../../context/AnnictDataContext'
import { CONST_COLORS } from '../../constants/styleConstants'

// MemoListメイン画面
const AnimeListScreenPage = (): JSX.Element => {
    const {annictData} = useContext(AnnictDataContext)

    return (
        <View style={styles.container}>
            {/* 検索 */}
            <View style={styles.searchContainer}>
                <TextInput style={styles.searchInputBox}>デフォルト文字</TextInput>
            </View>

            {/* Body */}
            <View style={styles.body}>
                <View style={styles.bodyInfo}>
                    <Text style={{color:'darkgray'}}>10件</Text>
                </View>
                {/* リスト */}
                <View style={styles.list}>
                    {annictData.map((item) => (
                        <AnimeListItem 
                            key={item.id}
                            animeTitle={item.title} 
                            animeAirDate={item.date} />
                    ))}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    // 全体背景色
    container: {
        flex: 1,
        backgroundColor: CONST_COLORS.backGroundMain
    },

    // 検索コンテナ
    searchContainer:{
      height: 52,
      backgroundColor: '#DCDCDC',
      justifyContent: 'center',
      alignItems: 'center'
    },
    // 検索-入力欄
    searchInputBox:{
      backgroundColor: 'white',
      width: '90%',
      height: 36,
      borderRadius: 8,
      paddingHorizontal: 5
    },

    // ボディ
    body:{
      flex: 1
    },
    // 〇件の表示
    bodyInfo:{
      height: 30,
      fontSize: 10,
      borderBottomWidth: 1,
      borderColor: 'lightgray',
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
    },

    // リスト
    list:{
      flex: 1
    }
})

export default AnimeListScreenPage
