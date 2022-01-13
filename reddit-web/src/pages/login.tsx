import React from 'react';
import {Formik, Form} from 'formik';
import { Box, Button} from '@chakra-ui/react';
import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';
import { useMutation } from 'urql';
import { useLoginMutation } from '../generated/graphql';
import { toErrorMap } from '../utils/toErrorMaps';
import { useRouter } from 'next/router';
import { createUrqlClient } from '../utils/createUrqlClient';
import { withUrqlClient } from 'next-urql';



interface loginProps {
}



export const Login: React.FC<loginProps> = ({}) => {
    const router = useRouter();
    const [, register] = useLoginMutation();
    return(
        <Wrapper variant="small">
            <Formik initialValues={{username:"", password:""}}
            onSubmit={async (values, {setErrors}) => {
                const response = await register(values);
                if (response.data?.login.errors){
                    setErrors(toErrorMap(response.data.login.errors));
                } else if (response.data?.login.user) {
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
                         login
                    </Button>
                </Form>
            )}
        </Formik>
      </Wrapper>
    );
};


export default withUrqlClient(createUrqlClient)(Login);