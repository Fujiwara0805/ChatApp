import { useState } from 'react'
/* api  */
import axios from 'axios'
import { API_KEY } from '../../../env'

export const useFetchData = () => {
  /* 状態管理 */
  const [messages, setMessages] = useState<Array<{ role: string, content: string }>>([{ role: 'system', content: 'お悩みをお聞かせください' }])
  const [userInput, setUserInput] = useState<string>('')

  /* APIアクセス */
  const fetchChatResponse = async () => {
    const userMessage = { role: 'user', content: userInput } /* 初期値 */
    const updateMessage = [...messages, userMessage] /* 更新 */
    setMessages(updateMessage)
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
          }
        }
      )
      const botMessage = { role: 'system', content: response.data.choices[0].message.content }
      setMessages((prevMessages) => [...prevMessages, botMessage])
    } catch (error) {
      console.error('通信エラーが発生しました', error)
    }
  }
  return { messages, setMessages, userInput, setUserInput, fetchChatResponse }
}
