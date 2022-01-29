import React from "react";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../../../utils/createUrqlClient";
import { Layout } from "../../../components/Layout";
import { Form, Formik } from "formik";
import { Box, Button } from "@chakra-ui/react";
import { InputField } from "../../../components/InputField";
import { usePostQuery, useUpdatePostMutation } from "../../../generated/graphql";
import { useRouter } from "next/router";


const EditPost = ({}) => {
    const router = useRouter();
    const intId = typeof router.query.id === 'string' ? parseInt(router.query.id): -1;
    const [{ data, error,  fetching }] = usePostQuery({
        pause: intId === -1,
        variables: {
            id: intId,
        },
    });
    const [ ,updatePost ] = useUpdatePostMutation();

    if ( fetching ) {
        return (
            <Layout>
                <div>
                    Loading...
                </div>
            </Layout>
        )
    }

    if ( error ) {
        return ( <div>{ error.message }</div> );
    }

    if ( !data?.post ) {
        return (
            <Layout>
                <div> Could not find post</div>
            </Layout>
        );
    }

    return (
        <Layout variant="small">
                <Formik
                    initialValues={{ title: data.post.title, text: data.post.text }}
                    onSubmit={async (values) => {
                       await updatePost( { id: intId, ...values});
                       router.back();
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
                                Update Post
                            </Button>
                        </Form>
                    )}
                </Formik>
        </Layout>
    )
}

export default withUrqlClient(createUrqlClient)(EditPost);
