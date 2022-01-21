import { Box, Flex, Button } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import React, { useEffect } from 'react'
import { InputField } from '../components/InputField';
import { Wrapper } from '../components/Wrapper';
import { useCreatePostMutation, useMeQuery } from '../generated/graphql';
import { useRouter } from "next/router"
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../utils/createUrqlClient';
import { Layout } from '../components/Layout';
import { useIsAuth } from '../utils/useIsAuth';


export const CreatePost: React.FC<{}> = ({}) => {
    const router = useRouter();
    useIsAuth();
    const [, createPost] = useCreatePostMutation();
    return (
        <Layout variant="small">
                <Formik
                    initialValues={{title:"", text:""}}
                    onSubmit={async (values) => {
                        console.log(values);
                        const {error} = await createPost({input:values})
                        if (!error) {
                            router.push("/");
                        }
                    }}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                            <InputField
                                name='title'
                                placeholder='title'
                                label='Title'
                                />
                            <Box mt={4}>
                            <InputField
                                textarea
                                name='text'
                                placeholder='text...'
                                label='Body'
                            />
                            </Box>
                            <Button
                                mt={4}
                                colorScheme='teal'
                                isLoading={isSubmitting}
                                type='submit'
                            >
                                Create Post
                            </Button>
                        </Form>
                    )}
                </Formik>
        </Layout>
    )
}

export default withUrqlClient(createUrqlClient)(CreatePost);