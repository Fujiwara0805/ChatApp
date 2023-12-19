import { View } from 'react-native'

interface Props {
  message: string
  user: {
    uid: string
    displayName: string
  }
}

const ChatMessage = (props: Props): JSX.Element => {
  const { message, user } = props

  return (
    <View>
      <View>
        <View>{user.displayName}</View>
        <View>{message}</View>
      </View>
    </View>
  )
}

export default ChatMessage
