import { View, Text, StyleSheet } from "react-native"

interface Props{
    animeTitle: string
    animeAirDate: string
}

// MemoList要素一つ分を生成する
const AnimeListItem = (props: Props): JSX.Element => {
    const { animeTitle, animeAirDate } = props
    return (
        // リストアイテム
        <View style={styles.listItem}>
            {/* リストアイテム左側 タイトルと日付 */}
            <View style={styles.animeInfoContainer}>
                <Text style={styles.animeTitle}>{animeTitle}</Text>
                <Text style={styles.animeAirDate}>{animeAirDate}~</Text>
            </View>
            {/* リストアイテム右側 ステータス系 */}
            <View style={styles.animeStatusContainer}>
                {/* チェックボックス */}
                <View style={styles.animeCheckBox}>
                    <Text>✓</Text>
                </View>
                {/* ☆評価 */}
                <View style={styles.animeStarRatingContainer}>
                    <Text>☆☆☆☆</Text>
                </View>
                {/* 視聴状態ボタン */}
                <View style={styles.animeWatchStatusButton}>
                    <Text>未選択</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    // リストアイテム
    listItem:{
        height: 48,
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        paddingHorizontal: 16,
        paddingVertical: 8,
        flexDirection: 'row', // 中の要素を横並び
        alignItems: 'center' // 縦中央揃え
    },
    
    // リストアイテム内の要素
    animeInfoContainer:{
        // 左側全体を覆うコンテナ
        flex: 1,
        backgroundColor: 'yellow',
        height: 32
    },
    animeTitle:{
        height: 17,
        fontSize: 14,
        marginBottom: 2
    },
    animeAirDate:{
        height: 13,
        fontSize: 11,
        color: '#777777'
    },
    animeStatusContainer:{
        // 右側全体を覆うコンテナ
        width:122,
        height: '100%',
        backgroundColor: 'gray',
        flexDirection: 'row', // 中の要素を横並び
        justifyContent: 'flex-end', // 右側に寄せる
        alignItems: 'center' //上下中央揃え
    },
    animeCheckBox:{
        // チェックボックス
        width: 14,
        height: '100%',
        backgroundColor: 'red',
        justifyContent: 'center' //上下中央揃え
    },
    animeStarRatingContainer:{
        // 星評価枠を覆うコンテナ
        width: 56,
        height: '100%',
        justifyContent: 'center', //上下中央揃え
        backgroundColor: 'blue',
        marginLeft: 4
    },
    animeWatchStatusButton:{
        // アニメ視聴状態のボタン
        width: 40,
        height: '100%',
        justifyContent: 'center', //上下中央揃え
        marginLeft: 4,
        backgroundColor: 'green'
    }
})

export default AnimeListItem
