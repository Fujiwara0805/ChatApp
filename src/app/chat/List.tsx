import { View, StyleSheet, ScrollView } from 'react-native'
/* components */
import CircleButton from '../../components/utils/CircleButton'
import { ChatList } from '../../components/utils/ChatList'
import { Feather } from '@expo/vector-icons'
import { router } from 'expo-router'
import { useState } from 'react'

/* Create画面へ画面遷移 */
const navigateToCreate = (): void => {
  router.push('chat/Create')
}

const List = (): JSX.Element => {
  /* 状態管理 */
  const [title, setTittle] = useState('Foo')
  /* title変更 */
  const handleChatListChange = () => {
    setTittle(title)
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <ChatList title={title} onLabelChange={handleChatListChange}/>
        <ChatList title={title} onLabelChange={handleChatListChange}/>
        <ChatList title={title} onLabelChange={handleChatListChange}/>
        <ChatList title={title} onLabelChange={handleChatListChange}/>
        <ChatList title={title} onLabelChange={handleChatListChange}/>
        <ChatList title={title} onLabelChange={handleChatListChange}/>
      </ScrollView>
      <CircleButton onPress={navigateToCreate}>
        <Feather name='plus' size={40}/>
      </CircleButton>
    </View>
  )
}

export default List

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue'
  }
})
