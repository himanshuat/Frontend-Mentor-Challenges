import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import './App.css'
import SignupForm from './components/SignupForm'

function App() {
	return (
		<Box 
			as='main' minH='100vh' display='flex' 
			bg='brand.red' color='white' px={{base: 6, md: 20}} py={{base: 16, lg: 6}}
			bgImage={{base: `url(images/bg-intro-mobile.png)`, lg: `url(images/bg-intro-desktop.png)`}} 
			alignItems='center' justifyContent='center' gap={10}
			flexDirection={{base: 'column', lg: 'row'}}
		>
			<Box textAlign={{base: 'center', lg: 'left'}}>
				<Heading as='h1' size={'2xl'}>Learn to code by watching others</Heading>
				<Text mt={6} as='p'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </Text>
			</Box>
			<VStack minW={{base: 'full', lg: '45%'}} alignItems='stretch' gap={6}>
				<Box
					p={4} borderRadius='lg' textAlign='center'
					bg='brand.blue' boxShadow='0 3px rgba(0, 0, 0, .35)'
				>
					<b>Try it free 7 days</b> then $20/mo. thereafter
				</Box>
				<SignupForm />
			</VStack>
		</Box>
	)
}

export default App
