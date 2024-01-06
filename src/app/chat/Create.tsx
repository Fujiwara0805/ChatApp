import { View, StyleSheet, ScrollView, TextInput, Text, TouchableOpacity } from 'react-native'
import { useFetchData } from '../../components/hooks/useFetchData'
import { Feather } from '@expo/vector-icons'
// import { Header } from '../../components/utils/Header'

const Create = (): JSX.Element => {
  const { messages, userInput, setUserInput, fetchChatResponse } = useFetchData()
  return (
    <>
      {/* <Header /> */}
      <View style={styles.container}>
        <ScrollView style={styles.messagesContainer}>
          {messages.map((message, index) => (
            <Text key={index} style={[styles.message, message.role === 'system' ? styles.systemMessage : styles.userMessage]}>
              {message.role === 'system' ? '🤖' : '🙂'}:{message.content}
            </Text>
          ))}
        </ScrollView>
        <View style={styles.inputContainer} >
          <TextInput
            multiline
            style={styles.input}
            value={userInput}
            onChangeText={setUserInput}
            placeholder='Messageを入力して下さい...'
          />
          <TouchableOpacity onPress={fetchChatResponse}>
            <Text>
              <Feather name='send' size={32}/>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default Create

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'skyblue'
  },
  messagesContainer: {
    flex: 1,
    marginVertical: 16
  },
  message: {
    fontSize: 20,
    marginVertical: 8,
    padding: 4
  },
  systemMessage: {
    textAlign: 'left'
  },
  userMessage: {
    textAlign: 'right'
  },
  inputContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 40
  },
  input: {
    backgroundColor: 'white',
    width: '90%',
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
