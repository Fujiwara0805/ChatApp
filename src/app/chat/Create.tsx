import { View, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { GiftedChat } from 'react-native-gifted-chat'
import { useState } from 'react'
import { type MESSAGE } from '../../components/types/types'
/* api  */
import { API_KEY } from '../../../env'

const Create = (): JSX.Element => {
  /* 状態管理 */
  const [userMessages, setUserMessages] = useState<string>('')
  const [botMessages, setBotMessages] = useState<string>('お悩みをお聞かせください')
  const [messages, setMessages] = useState<MESSAGE[]>([])

  const handleButtonClick = () => {
    if (userMessages.toLocaleLowerCase().startsWith('generate image')) {
      return GenerateImage
    } else {
      return GenerateChatText
    }
  }
  const GenerateChatText = async () => {
    const message = { _id: Math.random().toString(36).substring(7), text: userMessages, createdAt: new Date(), user: { _id: 1, name: 'USER' } }
    setMessages(prevMessages => GiftedChat.append(prevMessages, [message]))
    setUserMessages('')
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY.apikey}`
        },
        body: JSON.stringify({
          messages: [{ role: 'user', content: userMessages }],
          model: 'gpt-3.5-turbo-0301'
        })
      })
      const data = await response.json()
      setBotMessages(data.choices[0].message.content.trim())
      const message = { _id: Math.random().toString(36).substring(7), text: botMessages, createdAt: new Date(), user: { _id: 2, name: 'BOT' } }
      setMessages(prevMessages => GiftedChat.append(prevMessages, [message]))
    } catch (error) {
      console.log('通信エラーが発生しました', error)
    }
  }
  const GenerateImage = async () => {
    const message = { _id: Math.random().toString(36).substring(7), text: userMessages, createdAt: new Date(), user: { _id: 1, name: 'USER' } }
    setMessages(prevMessages => GiftedChat.append(prevMessages, [message]))
    setUserMessages('')
    try {
      const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY.apikey}`
        },
        body: JSON.stringify({
          prompt: userMessages,
          n: 2,
          size: '1024x1024'
        })
      })
      const data = await response.json()
      data.data.forEach((item: any) => {
        const message = { _id: Math.random().toString(36).substring(7), text: '生成された画像はこちらです', createdAt: new Date(), user: { _id: 2, name: 'BOT' }, image: item.url }
        setMessages(prevMessages => GiftedChat.append(prevMessages, [message]))
      })
    } catch (error) {
      console.log('通信エラーが発生しました', error)
    }
  }
  const handleTextInput = (text: string) => {
    setUserMessages(text)
  }

  return (
    <ImageBackground source={require('../../../assets/dinosaurIcon.png')}resizeMode='cover'style={{ flex: 1, width: '100%', height: '100%' }}>
      <View style={styles.container}>
        <View style={styles.messagesContainer}>
          <GiftedChat messages={messages} renderInputToolbar={() => null} minInputToolbarHeight={0} user={{ _id: 1 }} />
        </View>

        <View style={styles.inputContainer} >
          <TextInput
            multiline
            style={styles.input}
            value={userMessages}
            onChangeText={handleTextInput}
            placeholder='画像生成はgenerate image...と入力して下さい'
          />
          <TouchableOpacity onPress={handleButtonClick()}>
            <View>
              <Feather name='send' size={32}/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}

export default Create

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 16
  },
  messagesContainer: {
    flex: 1,
    paddingTop: 8
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 56
  },
  input: {
    backgroundColor: 'white',
    width: '90%',
    borderWidth: 1,
    height: 40,
    borderColor: '#ccc',
    borderRadius: 8,
    marginRight: 8,
    padding: 8,
    textAlign: 'left',
    fontSize: 16
  }
})
