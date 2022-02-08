import { Box, Button, Flex, Heading, Link } from '@chakra-ui/react';
import React from 'react'
import NextLink from 'next/link'
import { useLogoutMutation, useMeQuery } from '../generated/graphql';
import { isServer } from '../utils/isServer';
import { useRouter } from 'next/router';
import { useApolloClient } from '@apollo/client';

export const NavBar= ({}) => {
    const [logout, {loading:logoutFetching}] = useLogoutMutation();
    const apolloClient = useApolloClient();
    const {data, loading} = useMeQuery(
        {
            skip:isServer(),
        }
    );

    let body = null

    if (loading) {
        body = null;
    } else if (!data?.me) {
        body = (
        <>
            <NextLink href="/login">
                <Link color='black' mr={2}
                bg="white"
                fontSize={18}
                border="2px" borderRadius="25px" padding="10px"
                >Login</Link>
            </NextLink>
            <NextLink href="/register">
                <Link color='black'
                bg="white"
                fontSize={18}
                border="2px" borderRadius="25px" padding="10px"
                >Register</Link>
            </NextLink>
        </>
        )
    } else {
        body = (
            <Flex align="center">
                <NextLink href="/create-post">
                    <Button as={Link} mr={4}>
                        create post
                    </Button>
                </NextLink>
                <Box mr={2}>{data.me.username}</Box>
                <Button onClick = { async () => {
                        await logout();
                        await apolloClient.resetStore();
                    }
                } 
                isLoading={logoutFetching}
                variant= "link"
                color="white"
                >
                logout
                </Button>
            </Flex>
        )
    }

    return (
        <Flex position='sticky' top={0} bg='teal' p={4} zIndex={1}> 
            <Flex flex={1} m='auto' align="center" maxW={800}>
                <NextLink href="/">
                    <Link>
                        <Heading bg="white" border="2px" borderRadius="25px" padding="10px">
                            Post Office
                        </Heading>
                    </Link>
                </NextLink>
                <Box  ml={'auto'}>
                    {body}
                </Box>
            </Flex>
        </Flex>
    );
}