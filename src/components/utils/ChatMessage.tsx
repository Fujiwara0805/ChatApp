import { ScrollView, View, Text, TextInput, StyleSheet, Pressable, KeyboardAvoidingView } from 'react-native'
import { Feather } from '@expo/vector-icons'
/* hooks */
import { useFetchData } from '../hooks/useFetchData'

const ChatMessage = (): JSX.Element => {
  const { messages, userInput, setUserInput, fetchChatResponse } = useFetchData()
  return (
    <ScrollView style={styles.container}>
      <View style={styles.messagesContainer}>
        <>
          {messages.map((message, index) => (
            <Text key={index} style={styles.message}>
              {message.role === 'system' ? '🤖' : '🙂'}:{message.content}
            </Text>
          ))}
        </>
        <KeyboardAvoidingView style={styles.inputContainer} >
          <TextInput
            multiline
            style={styles.input}
            value={userInput}
            onChangeText={setUserInput}
            placeholder='メッセージを入力して下さい'
          />
          <Pressable onPress={fetchChatResponse}>
            <Text>
              <Feather name='send' size={32}/>
            </Text>
          </Pressable>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  )
}

export default ChatMessage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
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
  inputContainer: {
    flexDirection: 'row',
    height: 100,
    width: '100%',
    alignItems: 'center',
    paddingBottom: 30,
    position: 'absolute'
  },
  input: {
    flex: 1,
    borderWidth: 1,
    height: 48,
    borderColor: '#ccc',
    borderRadius: 8,
    marginRight: 10,
    padding: 12,
    textAlign: 'left',
    fontSize: 20
  }
})
