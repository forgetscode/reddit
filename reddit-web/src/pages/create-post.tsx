import { Box, Flex, Button } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import React, { useEffect } from 'react'
import { InputField } from '../components/InputField';
import { useCreatePostMutation, useMeQuery } from '../generated/graphql';
import { useRouter } from "next/router"
import { Layout } from '../components/Layout';
import { useIsAuth } from '../utils/useIsAuth';
import { withApollo } from '../utils/withApollo';


export const CreatePost: React.FC<{}> = ({}) => {
    const router = useRouter();
    useIsAuth();
    const [ createPost] = useCreatePostMutation();
    return (
        <Layout variant="small">
                <Formik
                    initialValues={{title:"", text:""}}
                    onSubmit={async (values) => {
                        const {errors} = await createPost({variables: {input:values},
                            update: (cache) => {
                                cache.evict({fieldName: 'posts'});
                            }
                        });
                        if (!errors) {
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

export default withApollo({ssr:true})(CreatePost);