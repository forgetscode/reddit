import { Box, Flex, Button } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { withUrqlClient } from 'next-urql';
import React, { useState } from 'react';
import { InputField } from '../components/InputField';
import { Wrapper } from '../components/Wrapper';
import { createUrqlClient } from '../utils/createUrqlClient';
import { useForgotPasswordMutation } from '../generated/graphql';
import { Layout } from '../components/Layout';


const ForgotPassword: React.FC<{}> = ({}) => {
    const [complete, setComplete] = useState(false);
    const [, forgotPassword] = useForgotPasswordMutation();
    return (      
        <Layout>
            <Wrapper variant="small">
                <Formik initialValues={{email:""}}
                onSubmit={async (values, {setErrors}) => {
                    await forgotPassword(values);
                    setComplete(true);
                }}
                >
                {({ isSubmitting }) => complete ? (<Box> email sent </Box>):(
                    <Form>
                        <InputField
                            name='email'
                            placeholder='Email'
                            label='Email'
                            type='email'
                            />
                        <Button
                            mt={4}
                            colorScheme='teal'
                            isLoading={isSubmitting}
                            type='submit'
                        >
                            Send Email
                        </Button>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    </Layout>  
    );
};

export default withUrqlClient(createUrqlClient)(ForgotPassword);

