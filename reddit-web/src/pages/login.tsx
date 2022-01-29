import React from 'react';
import {Formik, Form} from 'formik';
import { Box, Button, Flex, Link} from '@chakra-ui/react';
import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';
import { useLoginMutation } from '../generated/graphql';
import { toErrorMap } from '../utils/toErrorMaps';
import { useRouter } from 'next/router';
import { createUrqlClient } from '../utils/createUrqlClient';
import { withUrqlClient } from 'next-urql';
import NextLink from 'next/link';
import { Layout } from '../components/Layout';


interface loginProps {
}


export const Login: React.FC<loginProps> = ({}) => {
    const router = useRouter();
    const [, login] = useLoginMutation();
    return(
        <Layout>
            <Wrapper variant="small">
                <Formik initialValues={{usernameOrEmail:"", password:""}}
                onSubmit={async (values, {setErrors}) => {
                    const response = await login(values);
                    if (response.data?.login.errors){
                        setErrors(toErrorMap(response.data.login.errors));
                    } else if (response.data?.login.user) {
                        if(typeof router.query.next === 'string'){
                            router.push(router.query.next);
                        }   
                        else{
                            router.push("/");
                        }
                    }
                }}
                >
                {({ isSubmitting }) => (
                    <Form>
                        <InputField
                            name='usernameOrEmail'
                            placeholder='Username Or Email'
                            label='Username Or Email'
                            />
                        <Box mt={4}>
                        <InputField
                            name='password'
                            placeholder='password'
                            label='Password'
                            type="password"
                        />
                        </Box>
                        <Flex>
                            <NextLink href="/forgot-password">
                                <Link ml='auto'>
                                Forgot password?
                                </Link>
                            </NextLink>
                        </Flex>
                        <Button
                            mt={4}
                            colorScheme='teal'
                            isLoading={isSubmitting}
                            type='submit'
                        >
                            login
                        </Button>
                    </Form>
                )}
            </Formik>
        </Wrapper>
      </Layout>
    );
};


export default withUrqlClient(createUrqlClient)(Login);