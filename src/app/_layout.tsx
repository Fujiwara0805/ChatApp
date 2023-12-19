import { Stack } from 'expo-router'

const layout = (): JSX.Element => {
  return (
      <Stack screenOptions={{
        headerStyle: {
          backgroundColor: '#7186CC'
        },
        headerTintColor: '#ffffff',
        headerTitle: 'Chat App',
        headerBackTitle: 'Back',
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: 'bold'
        }
      }} />
  )
}

export default layout
