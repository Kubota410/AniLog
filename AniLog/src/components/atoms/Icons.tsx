import { StyleSheet } from 'react-native'
import { SimpleLineIcons } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"
import { CONST_COLORS, CONST_SIZES } from '../../constants/styleConstants'

/**
 * ハンバーガーメニューアイコン
 */
export const HamburgerMenuIcon = ():JSX.Element => {
    return (
        <>
            <SimpleLineIcons name='menu' style={styles.icon} />
        </>
    )
}

/**
 * フィルターアイコン
 */
export const FilterIcon = ():JSX.Element => {
    return (
        <>
            <AntDesign name='filter' style={styles.icon} />
        </>
    )
}


const styles = StyleSheet.create({
    icon:{
        color: CONST_COLORS.icomHeader,
        fontSize: CONST_SIZES.L
    }
})
