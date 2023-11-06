import { View, StyleSheet } from 'react-native'
import Header from '../../components/Header'
import ChatList from '../../components/ChatList'
import CircleButton from '../../components/CircleButton'
import { Feather } from '@expo/vector-icons'
import { Redirect } from 'expo-router'

const ChatListScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <ChatList />
        <ChatList />
        <ChatList />
      </View>
      <CircleButton onPress={() => { return (<Redirect href={'chat/ChatScreen'}/>) } }>
        <Feather name='plus' size={40}/>
      </CircleButton>
    </View>
  )
}

export default ChatListScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5'
  }
})
