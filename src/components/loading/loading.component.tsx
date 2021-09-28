import React from 'react'
import { View, Text } from 'react-native'
import styles from './style'

const Loading: React.FC = () => {
  return (
    <View style={styles.container} testID={'loading'}>
      <Text>Loading</Text>
    </View>
  )
}

export default Loading
