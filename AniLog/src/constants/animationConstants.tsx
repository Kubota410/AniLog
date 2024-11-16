import { Dimensions } from "react-native"

// 画面の横幅
const { width } = Dimensions.get('window')

/**
 * サイドメニューModal Closeアニメーション用の遅延時間
 * @constant {Object} CONST_SLIDE_ANIMATION
 * @property {number} toValueSlideIn - スライドインアニメーション終了位置
 * @property {number} toValueSlideOut - スライドインアウトアニメーション終了位置
 * @property {number} duration - 遅延秒数（ミリ秒）
 */
export const CONST_SLIDE_ANIMATION = {
    toValueSlideIn: 0,
    toValueSlideOut: -width * 0.8,
    duration: 200
}