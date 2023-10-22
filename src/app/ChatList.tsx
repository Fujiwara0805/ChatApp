import { View, Text, StyleSheet } from 'react-native'

const ChatList = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <View>
            <Text>Chat App </Text>
            <Text>Log Out </Text>
          </View>
        </View>

        <View>
          <View>
            <Text>日本経済について</Text>
            <Text>2023年10月21日</Text>
          </View>
          <View>
            <Text>✖️</Text>
          </View>
        </View>
      </View>

      <View>
        <Text>ボタン</Text>
      </View>

    </View>
  )
}

export default ChatList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
