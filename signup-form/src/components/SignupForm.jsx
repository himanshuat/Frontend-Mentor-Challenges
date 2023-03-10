import { Box, Button, Image, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import { FormControl, FormErrorMessage, useToast } from '@chakra-ui/react';
import { useFormik } from "formik";
import * as Yup from "yup";

function SignupForm() {
    const toast = useToast()

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
        onSubmit: values => {
            toast({
                title: 'Account created.',
                description: `Hey, ${values.firstName + ' ' + values.lastName}. We've created your account for you.`,
                status: 'info',
                duration: 3000,
                isClosable: true,
            })
            formik.handleReset()
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('First Name cannot be empty'),
            lastName: Yup.string().required('Last Name cannot be empty'),
            email: Yup.string().required('Email Address cannot be empty').email('Looks like this is not an email'),
            password: Yup.string().required('Password cannot be empty')
        }),
        validateOnChange: true
    })
    return (
        <Box bg='white' w='full' p={8} borderRadius='lg'>
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
                <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName} mb={5} color='black'>
                    <InputGroup>
                        <Input size='lg' type='text' name="firstName" placeholder="First Name" value={formik.values.firstName} onChange={formik.handleChange} />
                        {formik.touched.firstName && formik.errors.firstName && <InputRightElement h='full' children={<Image src={'images/icon-error.svg'} />} />}
                    </InputGroup>
                    {formik.touched.firstName && formik.errors.firstName && <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>}
                </FormControl>

                <FormControl isInvalid={formik.touched.lastName && formik.errors.lastName} mb={5} color='black'>
                    <InputGroup>
                        <Input size='lg' type='text' name="lastName" placeholder="Last Name" value={formik.values.lastName} onChange={formik.handleChange} />
                        {formik.touched.lastName && formik.errors.lastName && <InputRightElement h='full' children={<Image src={'images/icon-error.svg'} />} />}
                    </InputGroup>
                    {formik.touched.lastName && formik.errors.lastName && <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>}
                </FormControl>

                <FormControl isInvalid={formik.touched.email && formik.errors.email} mb={5} color='black'>
                    <InputGroup>
                        <Input size='lg' type='text' name="email" placeholder="Email Address" value={formik.values.email} onChange={formik.handleChange} />
                        {formik.touched.email && formik.errors.email && <InputRightElement h='full' children={<Image src={'images/icon-error.svg'} />} />}
                    </InputGroup>
                    {formik.touched.email && formik.errors.email && <FormErrorMessage>{formik.errors.email}</FormErrorMessage>}
                </FormControl>

                <FormControl isInvalid={formik.touched.password && formik.errors.password} mb={5} color='black'>
                    <InputGroup>
                        <Input size='lg' type='password' name="password" placeholder="Password" value={formik.values.password} onChange={formik.handleChange} />
                        {formik.touched.password && formik.errors.password && <InputRightElement h='full' children={<Image src={'images/icon-error.svg'} />} />}
                    </InputGroup>
                    {formik.touched.password && formik.errors.password && <FormErrorMessage>{formik.errors.password}</FormErrorMessage>}
                </FormControl>

                <Button
                    type='submit'
                    w='full' bg='brand.green' size={'lg'}
                    textTransform='uppercase' fontWeight={'normal'}
                    letterSpacing='wide' boxShadow='0 3px hsl(154, 59%, 65%)'
                    _hover={{ filter: 'brightness(0.9)' }}
                >
                    Claim your free trial
                </Button>
                <Text as='p' fontSize='xs' color='brand.grayishBlue' mt={3} textAlign='center'>
                    By clicking the button, you are agreeing to our <Text as='a' fontWeight={'bold'} color='brand.red'>Terms and Services</Text>
                </Text>
            </form>
        </Box>
    )
}

export default SignupForm



//   