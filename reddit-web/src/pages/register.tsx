import React from 'react';
import {Formik, Form} from 'formik';
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';
import { useMutation } from 'urql';
import { useRegisterMutation } from '../generated/graphql';
import { toErrorMap } from '../utils/toErrorMaps';
import { useRouter } from 'next/router';
import { createUrqlClient } from '../utils/createUrqlClient';
import { withUrqlClient } from 'next-urql';
import { Layout } from '../components/Layout';



interface registerProps {
}



export const Register: React.FC<registerProps> = ({}) => {
    const router = useRouter();
    const [, register] = useRegisterMutation();
    return(
        <Layout>
            <Wrapper variant="small">
                <Formik initialValues={{email: "", username:"", password:""}}
                onSubmit={async (values, {setErrors}) => {
                    const response = await register({options: values});
                    if (response.data?.register.errors){
                        setErrors(toErrorMap(response.data.register.errors));
                    } else if (response.data?.register.user) {
                        router.push("/");
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
                            name='email'
                            placeholder='email'
                            label='email'
                        />
                        </Box>
                        
                        <Box mt={4}>
                        <InputField
                            name='password'
                            placeholder='password'
                            label='Password'
                            type="password"
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
      </Layout>
    );
};


export default withUrqlClient(createUrqlClient)(Register);