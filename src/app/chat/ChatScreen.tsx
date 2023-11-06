import { View, StyleSheet } from 'react-native'
import Header from '../../components/Header'
import Chat from '../../components/Chat'

const ChatScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <Chat />
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
