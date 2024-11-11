import { StyleSheet, TouchableWithoutFeedback, View, Text } from 'react-native'
import { CONST_SIZES } from '../../constants/styleConstants'
import { Link } from 'expo-router'

// サイドメニューのボタン
interface SideMenuButtonProps {
    href: string,
    title: string,
    onPress: () => void
}
export const SideMenuButton = (props:SideMenuButtonProps) => {
    const {href, title, onPress} = props
    return (
      <Link href={href} asChild onPress={onPress}>
        <TouchableWithoutFeedback>
          <View style={styles.sideMenuItem}>
            <Text style={styles.sideMenuItemText}>{title}</Text>
          </View>
        </TouchableWithoutFeedback>
      </Link>
    )
}

const styles = StyleSheet.create({
    // サイドメニュースタイル
    sideMenuItem:{
        height: 56,
        width: '100%',
        paddingVertical: 17, //縦余白
        paddingLeft: 30, //横余白
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        justifyContent: 'center'
    },
    sideMenuItemText:{
        fontSize: CONST_SIZES.M
    }
})

export default SideMenuButton