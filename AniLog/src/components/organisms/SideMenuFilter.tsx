import React, { useState, useEffect } from 'react'
import { Modal, View, Text, StyleSheet, Animated, TouchableWithoutFeedback, Dimensions } from 'react-native'
import { CONST_DIMENSIONS, CONST_SIZES } from '../../constants/styleConstants'
import { CONST_SLIDE_ANIMATION_FILTER } from '../../constants/animationConstants'

interface SideMenuFilterModalProps {
  isVisible: boolean
  onClose: () => void
}

const SideMenuFilterModal: React.FC<SideMenuFilterModalProps> = ({ isVisible, onClose }) => {
  const [slideAnim] = useState(new Animated.Value(CONST_SLIDE_ANIMATION_FILTER.initialPosition)) //初期位置

  // モーダルを開く関数
  const openModal = () => {
    Animated.timing(slideAnim, {
      toValue: CONST_SLIDE_ANIMATION_FILTER.toValueSlideIn, //スライドインアニメーション終了位置
      duration: CONST_SLIDE_ANIMATION_FILTER.duration, //アニメーション時間
      useNativeDriver: true
    }).start()
  }

  // モーダルを閉じる関数
  const closeModal = () => {
    Animated.timing(slideAnim, {
      toValue: CONST_SLIDE_ANIMATION_FILTER.toValueSlideOut, //スライドインアウトアニメーション終了位置
      duration: CONST_SLIDE_ANIMATION_FILTER.duration, //アニメーション時間
      useNativeDriver: true
    }).start(() => {
      onClose()
    })
  }

  useEffect(() => {
    if (isVisible) {
      openModal()
    } else {
      closeModal()
    }
  }, [isVisible, slideAnim])

  return (
    <Modal
      transparent={true}
      animationType="none"
      visible={isVisible}
      onRequestClose={closeModal}
    >
      {/* 画面全体にCloseイベントを設定 */}
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.modalBackground}>
          {/* Closeイベントの影響しないメイン画面を前面配置 */}
          <TouchableWithoutFeedback>
            <Animated.View style={[styles.menu, { transform: [{ translateX: slideAnim }] }]}>
              <View style={styles.sideMenuHeader}>
                <Text style={styles.headerText}>Anilog</Text>
              </View>
              <View>
                <Text>ここにFilterを追加していく</Text>
              </View>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

// 画面の横幅
const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  sideMenuItem: {
    height: 56,
    width: '100%',
    paddingVertical: 17,
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    justifyContent: 'center'
  },
  sideMenuItemText: {
    fontSize: CONST_SIZES.M
  },
  openButton: {
    padding: 10,
    backgroundColor: '#3498db',
    borderRadius: 5,
    marginTop: 50,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  menu: {
    width: width * 0.8,
    height: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    left: 0
  },
  sideMenuHeader: {
    height: CONST_DIMENSIONS.headerHeight + 50,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: 'lightgray'
  },
  headerText: {
    fontSize: CONST_SIZES.L
  },
  closeButton: {
    padding: 10,
    backgroundColor: '#e74c3c',
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center'
  },
  menuText: {
    fontSize: 18
  }
})

export default SideMenuFilterModal
