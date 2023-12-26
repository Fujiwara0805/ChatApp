import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { router } from 'expo-router'

/* 画面遷移の挙動 */
const handlePress = (): void => {
  router.push('chat/ChatCreateScreen')
}
interface Props {
  title: string
  onChange: () => void
}
const ChatList = ({ title, onChange }: Props): JSX.Element => {
  return (
    <View style={styles.chatListItem}>
      <TouchableOpacity onPress={handlePress}>
        <TextInput style={styles.chatListTitle} onChangeText={() => { onChange() }}>{title}</TextInput>
        <Text style={[styles.chatListDate, { marginTop: 8 }]}>2023年10月21日</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteIcon}>
        <Text><Feather name='trash' size={20}/></Text>
      </TouchableOpacity>
    </View>
  )
}

export default ChatList

/* style */
const styles = StyleSheet.create({
  chatListItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 19,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)'
  },
  chatListTitle: {
    fontSize: 20,
    lineHeight: 32,
    color: '#000000'
  },
  chatListDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484'
  },
  deleteIcon: {
    padding: 8
  }

})
