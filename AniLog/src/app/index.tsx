import { Redirect } from 'expo-router'
import React from 'react'
import { Link } from 'expo-router'
import { View } from 'react-native'
import { Button } from 'react-native-elements'

// 指定のページへリダイレクトする
const Index = (): JSX.Element => {
    return (
        // <Redirect href='screen/logIn_Screen' />

        // 開発中のみ 後で消す
        <View>
            <Link href={'/screen/logIn_Screen'} asChild>
                <Button title={'logIn_Screen'} buttonStyle={{margin:10}} />
            </Link>
            <Link href={'/screen/animeList_Screen'} asChild>
                <Button title={'animeList_Screen'} buttonStyle={{margin:10}} />
            </Link>
            <Link href={'/screen/feedback_Screen'} asChild>
                <Button title={'feedback_Screen'} buttonStyle={{margin:10}} />
            </Link>
            <Link href={'/screen/releaseNotes_Screen'} asChild>
                <Button title={'releaseNotes_Screen'} buttonStyle={{margin:10}} />
            </Link>
            <Link href={'/screen/setting_Button_Screen'} asChild>
                <Button title={'setting_Button_Screen'} buttonStyle={{margin:10}} />
            </Link>
            <Link href={'/screen/setting_Notify_Screen'} asChild>
                <Button title={'setting_Notify_Screen'} buttonStyle={{margin:10}} />
            </Link>
        </View>
    )
}

export default Index
