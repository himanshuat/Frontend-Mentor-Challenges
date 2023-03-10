import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
	colors: {
		brand: {
			red: 'hsl(0, 100%, 74%)',
			green: 'hsl(154, 59%, 51%)',
			blue: 'hsl(248, 32%, 49%)',
			darkBlue: 'hsl(249, 10%, 26%)',
			grayishBlue: 'hsl(246, 25%, 77%)'
		}
	},
	fonts: {
		body: `'Poppins', sans-serif`
	}
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<ChakraProvider theme={theme}>
		<App />
	</ChakraProvider>
)
