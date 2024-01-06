import { View, StyleSheet, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { router } from 'expo-router'

interface Props {
  title: string
  onLabelChange: () => void
}
/* 画面遷移の挙動 */
const handlePress = (): void => {
  router.push('chat/Create')
}
const handleDetele = () => {
  Alert.alert('Really?')
}

export const ChatList = ({ title, onLabelChange }: Props): JSX.Element => {
  return (
    <View style={styles.chatListItem}>
      <View>
        <TextInput style={styles.chatListTitle} onPressIn={onLabelChange}>{title}</TextInput>
        <Text style={[styles.chatListDate, { marginTop: 8 }]}>{new Date().toLocaleDateString()}</Text>
      </View>
      <View style={styles.IconItems}>
        <TouchableOpacity style={styles.Icon} onPress={handlePress}>
          <Feather name='edit' size={20}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Icon} onPress={handleDetele}>
          <Feather name='trash' size={20}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

/* styles */
const styles = StyleSheet.create({
  chatListItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
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
  Icon: {
    padding: 8
  },
  IconItems: {
    flexDirection: 'row'
  }
})
