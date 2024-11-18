import { Redirect } from 'expo-router'
import React from 'react'

// 指定のページへリダイレクトする
const Index = (): JSX.Element => {
    return (
        // 初期値付きプロバイダー
        <Redirect href='screen/animeList_Screen' />
    )
}

export default Index
