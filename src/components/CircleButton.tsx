import { TouchableOpacity, Text, StyleSheet } from 'react-native'

interface Props {
  children: JSX.Element
  onPress: () => React.JSX.Element
}

const CircleButton = (props: Props): JSX.Element => {
  const { children } = props

  return (
    <TouchableOpacity style={styles.circleButton} >
      <Text style={styles.circleLabel}>{children}</Text>
    </TouchableOpacity>
  )
}

export default CircleButton

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#303136',
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8
  },
  circleLabel: {
    color: '#4B9F6B',
    fontSize: 40,
    lineHeight: 40
  }
})
