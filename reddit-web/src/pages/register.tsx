import React from 'react';
import {Formik, Form} from 'formik';
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';

interface registerProps {
}

export const Register: React.FC<registerProps> = ({}) => {
    return(
        <Wrapper variant="small">
            <Formik initialValues={{username:"", password:""}}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                actions.setSubmitting(false)
                }, 1000)
            }}
            >
            {(props) => (
                <Form>
                    <InputField
                        name='username'
                        placeholder='username'
                        label='Username'
                        />
                    <Box mt={4}>
                    <InputField
                        name='password'
                        placeholder='password'
                        label='Password'
                        type="passsword"
                    />
                    </Box>
                    <Button
                        mt={4}
                        colorScheme='teal'
                        isLoading={props.isSubmitting}
                        type='submit'
                    >
                         register
                    </Button>
                </Form>
            )}
        </Formik>
      </Wrapper>
    );
};


export default Register;