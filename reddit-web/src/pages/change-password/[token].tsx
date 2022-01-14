import React, { useState } from 'react'
import { NextPage } from 'next';
import { Box, Button, Flex, Link } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { InputField } from '../../components/InputField';
import { Wrapper } from '../../components/Wrapper';
import router, { useRouter } from 'next/router';
import { toErrorMap } from '../../utils/toErrorMaps';
import { useChangePasswordMutation } from '../../generated/graphql';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../../utils/createUrqlClient';
import NextLink from 'next/link';


export const ChangePassword: NextPage<{token: string}> = ({token}) => {
    const router = useRouter();
    const [, changePassword] = useChangePasswordMutation()
    const [tokenError, setTokenError] = useState('');
    return (  
        <Wrapper variant="small">
            <Formik initialValues={{newPassword:""}}
                onSubmit={async (values, {setErrors}) => {
                    const response = await changePassword({
                        newPassword: values.newPassword,
                        token, 
                    });
                    if (response.data?.changePassword.errors){
                        const errorMap = toErrorMap(response.data.changePassword.errors)
                        if ('token' in errorMap){
                            setTokenError(errorMap.token);
                        }
                        setErrors(errorMap);
                    } else if (response.data?.changePassword.user) {
                        router.push("/");
                    }
                }}
                >
                {({ isSubmitting }) => (
                    <Form>
                        <InputField
                        name="newPassword"
                        placeholder="new password"
                        label="New Password"
                        type="password"
                        />
                        {tokenError ?(
                        <Flex>
                             <Box mr={2} color='red'> {tokenError}</Box>
                             <NextLink href="/forgot-password">
                                <Link>
                                click here to get a new one
                                </Link>
                             </NextLink>
                         </Flex>
                         ) : null}
                        <Button
                            mt={4}
                            colorScheme='teal'
                            isLoading={isSubmitting}
                            type='submit'
                        >
                            change password
                        </Button>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    );
};

ChangePassword.getInitialProps = ({query}) => {
    return {
        token: query.token as string
    };
};

export default withUrqlClient(createUrqlClient)(ChangePassword);

