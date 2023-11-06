import { useState } from 'react'
import { ScrollView, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import axios from 'axios'
import { API_KEY } from '../../env'

const Chat = (): JSX.Element => {
  const [messages, setMessages] = useState<Array<{ role: string, content: string }>>([{ role: 'system', content: 'レシピを考えるチャットbotです' }])
  const [userInput, setUserInput] = useState<string>('')
  const communicate = async () => {
    const userMessage = { role: 'user', content: userInput } /* 初期値 */
    setMessages((prevMessages) => [...prevMessages, userMessage]) /* 更新 */
    setUserInput('')
    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo-0301',
          messages: messages.concat(userMessage)
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY.apikey}`,
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }
      )
      const botMessage = { role: 'system', content: response.data.choices[0].message.content }
      setMessages((prevMessages) => [...prevMessages, botMessage])
      setUserInput('')
    } catch (error) {
      console.error('通信エラーが発生しました', error)
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.messagesContainer}>
        {messages.map((message, index) => (
          <Text key={index} style={styles.message}>
            {message.role === 'system' ? '🤖' : '🙂'}:{message.content}
          </Text>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          multiline
          style={styles.input}
          value={userInput}
          onChangeText={setUserInput}
          placeholder='メッセージを入力して下さい'
        />
        <TouchableOpacity onPress={communicate}>
          <Text>
            <Feather name='send' size={24}/>
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Chat

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
    fontSize: 16,
    marginTop: 8,
    padding: 4
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 30,
    marginTop: 'auto'
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginRight: 10,
    padding: 12,
    textAlign: 'left'
  }
})
