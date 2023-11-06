import { View, StyleSheet, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'

const ChatList = (): JSX.Element => {
  return (
    <View>
      <View style={styles.chatListItem}>
        <View>
          <Text style={styles.chatListTitle}>日本経済について</Text>
          <Text style={styles.chatListDate}>2023年10月21日</Text>
        </View>
        <View style={styles.deleteIcon}>
          <Text><Feather name='trash' size={16}/></Text>
        </View>
      </View>
    </View>
  )
}

export default ChatList

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
    fontSize: 16,
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
