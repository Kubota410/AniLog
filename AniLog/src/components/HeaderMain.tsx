import { Text, View, StyleSheet } from "react-native"
import { CONST_COLORS, CONST_DIMENSIONS, CONST_SIZES } from "../constants/styleConstants"
import HamburgerButton from "./molecules/HamburgerButton"
import FilterButton from "./molecules/FilterButton"

// メイン画面ヘッダー
const HeaderMain = (): JSX.Element => {

    return (
        <View style={styles.header}>
            {/* メニューアイコン */}
            <View>
                {/* <HamburgerMenuIcon /> */}
                <HamburgerButton />
            </View>
            
            {/* 中央コントロールタブ */}
            <View>
                <Text style={styles.title}>今期 2024年秋</Text>
            </View>
            
            {/* フィルターアイコン */}
            <View>
                <FilterButton />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    // ヘッダー
    header:{
        height: CONST_DIMENSIONS.headerHeight,
        backgroundColor: CONST_COLORS.backGroundHeader,
        paddingBottom: 8,
        paddingHorizontal: 16,
        flexDirection: 'row', // 中の要素を横並び
        alignItems: 'flex-end', // 下揃え
        justifyContent: 'space-between' // 中央、左端、右端に配置
    },
    // サブタイトル
    title:{
        fontSize: CONST_SIZES.L,
        fontWeight: 'bold'
    },
    segmentedControl:{
        backgroundColor: '#B2B2B2',
        height: '100%'
    },
    icon:{
        color: CONST_COLORS.icomHeader,
        fontSize: CONST_SIZES.L
    }
})

export default HeaderMain
