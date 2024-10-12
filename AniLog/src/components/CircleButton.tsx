import { View, Text, StyleSheet, type ViewStyle } from "react-native"

interface Props{
    children: string
    style?: ViewStyle
}

/**
 * 丸ボタンを生成する
 * @param {string} Children - ボタンに表記する文字。
 * @returns {Promise<void>} サークルボタン
 * @example
 * // 使用例:
 * <CircleButton>+</CircleButton>
 */
const CircleButton = (props: Props): JSX.Element => {
    const { children, style } = props
    return (
        <View style={[styles.circleButton, style]}>
            <Text style={styles.circleButtonLabel}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    circleButton:{
        width: 64,
        height: 64,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 32,
        position: 'absolute',
        right: 40,
        bottom: 40,
        shadowColor: '#000000',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 8 },
        elevation: 8
    },
    circleButtonLabel:{
        color: 'white',
        fontSize: 40,
        lineHeight: 48
    }
})

export default CircleButton