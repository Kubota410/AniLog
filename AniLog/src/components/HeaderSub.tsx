import { Text, View, StyleSheet } from "react-native"
import FilterButton from "./molecules/FilterButton"
import HamburgerButton from "./molecules/HamburgerButton"
import { CONST_SIZES } from "../constants/styleConstants"

// 引数
interface Props{
    subTitleStr: string
}

// サブ画面ヘッダー
const HeaderSub = (props: Props): JSX.Element => {
    const {subTitleStr} = props
    return (
        <View style={styles.header}>
            {/* 設定アイコン */}
            <View>
                <HamburgerButton />
            </View>
            
            {/* サブヘッダータイトル */}
            <View>
                <Text style={styles.subTitle}>{subTitleStr}</Text>
            </View>
            
            {/* フィルターアイコン 使用しないが、配置調整がめんどくさいので透明にして配置しておく */}
            <View>
                <FilterButton />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    // ヘッダー
    header:{
        height: 60,
        backgroundColor: 'white',
        paddingBottom: 8,
        paddingHorizontal: 16,
        flexDirection: 'row', // 中の要素を横並び
        alignItems: 'flex-end', // 下揃え
        justifyContent: 'space-between' // 中央、左端、右端に配置
    },

    // サブタイトル
    subTitle:{
        fontSize: CONST_SIZES.L,
        fontWeight: 'bold'
    }
})

export default HeaderSub
