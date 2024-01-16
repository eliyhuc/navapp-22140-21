import { NavigationContainer } from '@react-navigation/native'
import { Tabs } from './src/services/Navigation'
import colors from './src/services/appColors'
import {MD3LightTheme as DefaultTheme, Provider as PaperProvider} from 'react-native-paper'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondaryContainer: colors.raspberry
  }
}

const App = () => {
  return (
  <>
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Tabs />
      </PaperProvider>
    </NavigationContainer>
  </>
  )
}

export default App;