import React from 'react';
import {Formik, Form} from 'formik';
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';
import { useMutation } from 'urql';
import { useRegisterMutation } from '../generated/graphql';



interface registerProps {
}



export const Register: React.FC<registerProps> = ({}) => {
    const [, register] = useRegisterMutation();
    return(
        <Wrapper variant="small">
            <Formik initialValues={{username:"", password:""}}
            onSubmit={async (values, {setErrors}) => {
                const response = await register(values);
                if (response.data?.register?.user?.id){
                    setErrors({
                        username:"username error",
                    });
                }
            }}
            >
            {({ isSubmitting }) => (
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
                        isLoading={isSubmitting}
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