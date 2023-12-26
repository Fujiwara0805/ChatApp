import { View, StyleSheet, ScrollView } from 'react-native'
import ChatMessage from '../../components/utils/ChatMessage'

const Create = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.chat}>
        <ChatMessage />
      </ScrollView>
    </View>
  )
}

export default Create

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  chat: {
    marginTop: 24
  }
})
