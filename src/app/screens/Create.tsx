import { View, StyleSheet, ScrollView } from 'react-native'
import Chat from '../../components/utils/Chat'

const Create = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.chat}>
        <Chat />
      </ScrollView>
    </View>
  )
}

export default Create

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  chat: {
    marginTop: 24
  }
})
