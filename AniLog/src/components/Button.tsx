import { StyleSheet, View } from 'react-native'
import { Button as ElementButton } from 'react-native-elements'

interface Props {
    children: string
}

const Button = (props: Props):JSX.Element => {
    const { children } = props
    return (
        <View>
            <ElementButton 
                title={children} 
                buttonStyle={styles.botton}
                onPress={() => alert('Button pressed!')}>
            </ElementButton>
        </View>
    )
}

const styles = StyleSheet.create({
    // ボタン
    botton:{
        backgroundColor: 'dodgerblue' , // ボタンのカスタムスタイル
        color: 'white' // テキストのスタイル
    }
})

export default Button
