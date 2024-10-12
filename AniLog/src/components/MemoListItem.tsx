import { View, Text, StyleSheet } from "react-native"

// MemoList要素一つ分を生成する
const MemoListItem = (): JSX.Element => {
    return (
        <View style={styles.memoListItem}>
            <View>
                <Text style={styles.memoListItemTitle}>Item1</Text>
                <Text style={styles.memoListItemDate}>yyyy/mm/dd hh:mm</Text>
            </View>
            <View>
                <Text>X</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    memoListItem: {
        // リスト要素全体
        backgroundColor: '#fcfcfc',
        flexDirection: 'row', // 要素を横並びにする
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.15)'
    },
    memoListItemTitle: {
        // リストタイトル
        fontSize: 16,
        lineHeight: 32
    },
    memoListItemDate: {
        // リスト日付
        fontSize: 12,
        lineHeight: 16,
        color: '#848484'
    }
})

export default MemoListItem