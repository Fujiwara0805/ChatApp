import { View, StyleSheet } from 'react-native'
import ChatList from '../../components/utils/ChatList'
import CircleButton from '../../components/utils/CircleButton'
import { Feather } from '@expo/vector-icons'
import { router } from 'expo-router'
import { useState } from 'react'

const handlePress = (): void => {
  // Chat作成画面へ遷移
  router.push('screens/Create')
}

const List = (): JSX.Element => {
  const [title, setTittle] = useState('foo')

  const handleChatListTextChange = () => {
    setTittle(title)
  }

  return (
    <View style={styles.container}>
      <View>
        <ChatList title={title} onChange={handleChatListTextChange}/>
      </View>
      <CircleButton onPress={handlePress}>
        <Feather name='plus' size={40}/>
      </CircleButton>
    </View>
  )
}

export default List

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5'
  }
})
