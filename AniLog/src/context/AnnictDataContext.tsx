import React, { createContext, useState } from "react"

// AnnictDataの型　追加する時にこの型使用するためexportする
export interface AnnictData {
    id: number,
    title: string,
    date: string
}

// Contextの型
interface AnnictDataContextType {
    annictData: AnnictData[],
    setAnnictData: React.Dispatch<React.SetStateAction<AnnictData[]>>
}

// Contextの初期値を設定 Contextに対しての初期値なので、Providerのラップと関係なく使用可能
const defaultValue: AnnictDataContextType = {
    annictData: [
        { id: 1, title: "Initial Anime 1", date: "2024-11-20" },
        { id: 2, title: "Initial Anime 2", date: "2024-11-21" },
        { id: 3, title: "Initial Anime 3", date: "2024-11-21" },
        { id: 4, title: "Initial Anime 4", date: "2024-11-21" },
        { id: 5, title: "Initial Anime 5", date: "2024-11-21" }
    ],
    setAnnictData: () => {},
}

export const AnnictDataContext = createContext<AnnictDataContextType>(defaultValue)
