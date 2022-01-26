import * as React from "react"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"


  
const theme = extendTheme({
  fonts: {
    heading: 'Raleway',
    body: 'Raleway',
  },
})

export const App () => <ChakraProvider theme={theme}></ChakraProvider>
