import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { FilterIcon } from '../atoms/Icons'
import SideMenuFilterModal from '../organisms/SideMenuFilter'

// ハンバーガーボタン 押下時に色を半透明にする
const FilterButton = () => {
    // ボタンのオンオフを追跡する
    const [isActive, setIsActive] = useState(false)

    const handlePress = () => {
        setIsActive(!isActive)
    }

    return (
        <>
            {/* ボタンがアクティブの時、透明度をつける */}
            <TouchableOpacity onPress={handlePress} style={{ opacity: isActive ? 0.6 : 1 }}>
                <FilterIcon />
            </TouchableOpacity>

            {/* サイドメニューがオープンしているときだけ表示 */}
            {isActive && <SideMenuFilterModal isVisible={isActive} onClose={() => setIsActive(false)} />}
        </>
    )
}

export default FilterButton
