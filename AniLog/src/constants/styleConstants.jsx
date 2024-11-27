import { Dimensions } from "react-native"

// 画面の横幅
const { width } = Dimensions.get('window')

/**
 * サイズ関連の定数
 * @constant {Object} CONST_SIZES
 * @property {number} S - 小さいサイズの値 (10)
 * @property {number} M - 中くらいのサイズの値 (20)
 * @property {number} L - 大きいサイズの値 (30)
 * @property {number} LL - さらに大きいサイズの値 (40)
 * @property {number} XL - さらに大きいサイズの値 (50)
 */
export const CONST_SIZES = {
    S: 10, //10
    M: 20, //20
    L: 30, //30
    LL: 40, //40
    XL: 50 //50
}

/**
 * カラー関連の定数
 * @constant {Object} CONST_COLORS
 * @property {string} backGroundBody - ボディ背景色
 * @property {string} backGroundHeader - ヘッダー背景色
 * @property {string} text - 基本文字色
 * @property {string} icomHeader - ヘッダーに使用するアイコンの色
 * @property {string} icomItemSub - 補助的に使用するアイコンの色
 * @property {string} notUsed - 未使用/使用前のオブジェクト色
 * @property {string} notUsedText - 未使用/使用前のオブジェクト内テキスト色
 * @property {string} notActive - オブジェクトのOFF（非アクティブ）時の色
 */
export const CONST_COLORS = {
    test1: 'red',
    test2: 'blue',
    test3: 'yellow',
    backGroundMain: '#ffffff',
    text: 'darkgray',
    icomHeader: '#777777',
    icomItemSub: '#B7B7B7',
    notUsed: '#E0E0E0',
    notUsedText: '#A5A5A5',
    notActive: '#CBCBCB'
}

// 寸法
export const CONST_DIMENSIONS = {
    headerHeight: 40
}
