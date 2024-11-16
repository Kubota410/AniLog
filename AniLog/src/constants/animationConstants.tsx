import { Dimensions } from "react-native"

// 画面の横幅
const { width } = Dimensions.get('window')

/**
 * ナビゲーションサイドメニューのModal Closeアニメーション用設定値
 * @constant {Object} CONST_SLIDE_ANIMATION_NAVIGATION
 * @property {number} initialPosition - 初期位置
 * @property {number} toValueSlideIn - スライドインアニメーション終了位置
 * @property {number} toValueSlideOut - スライドインアウトアニメーション終了位置
 * @property {number} duration - 遅延秒数（ミリ秒）
 */
export const CONST_SLIDE_ANIMATION_NAVIGATION = {
    initialPosition: -width * 0.8,
    toValueSlideIn: 0,
    toValueSlideOut: -width * 0.8,
    duration: 200
}

/**
 * ナビゲーションサイドメニューのModal Closeアニメーション用設定値
 * @constant {Object} CONST_SLIDE_ANIMATION_FILTER
 * @property {number} initialPosition - 初期位置
 * @property {number} toValueSlideIn - スライドインアニメーション終了位置
 * @property {number} toValueSlideOut - スライドインアウトアニメーション終了位置
 * @property {number} duration - 遅延秒数（ミリ秒）
 */
export const CONST_SLIDE_ANIMATION_FILTER = {
    initialPosition: width,
    toValueSlideIn: width-(width*0.8),
    toValueSlideOut: width,
    duration: 200
}