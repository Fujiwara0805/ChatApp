import { ScrollView, View, Text, StyleSheet } from 'react-native'
/* hooks */
import { useFetchData } from '../hooks/useFetchData'

export const Message = (): JSX.Element => {
  const { messages } = useFetchData()
  return (
    <ScrollView style={styles.container}>
      <View style={styles.messagesContainer}>
        {messages.map((message, index) => (
        <Text key={index} style={[styles.message, message.role === 'system' ? styles.systemMessage : styles.userMessage]}>
          {message.role === 'system' ? '🤖' : '🙂'}:{message.content}
        </Text>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'skyblue'
  },
  messagesContainer: {
    flex: 1,
    marginBottom: 10
  },
  message: {
    fontSize: 20,
    marginTop: 8,
    padding: 4
  },
  systemMessage: {
    textAlign: 'left'
  },
  userMessage: {
    textAlign: 'right'
  }
})
