import { View, Text, StyleSheet } from 'react-native'

const Header = (): JSX.Element => {
  return (
    <View style={styles.appBar}>
      <View style={styles.appBarInner}>
        <Text style={styles.appBarTitle}>Chat App</Text>
        <Text style={styles.appBarRight}>Log Out</Text>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  /* Header */
  appBar: {
    width: '100%',
    height: 104,
    backgroundColor: '#7186CC',
    justifyContent: 'flex-end'
  },
  appBarInner: {
    alignItems: 'center'
  },
  appBarRight: {
    position: 'absolute',
    right: 19,
    bottom: 8,
    fontSize: 16,
    lineHeight: 24,
    color: 'rgba(255, 255, 255, 0.8)'
  },
  appBarTitle: {
    alignItems: 'center',
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    lineHeight: 32
  }
})
