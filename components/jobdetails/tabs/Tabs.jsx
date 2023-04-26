import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'

import styles from './tabs.style'

import { SIZES } from '../../../constants'
const Tabs = ({tabs, activeTab, setActiveTab}) => {
  return (
    <View style={styles.container}>
      <Text>Tabs</Text>
    </View>
  )
}

export default Tabs