import { withUrqlClient } from "next-urql";
import { Layout } from "../components/Layout";
import { usePostsQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { Box, Button, Flex, Heading, IconButton, Link, Stack, Text } from "@chakra-ui/react";
import NextLink from 'next/link';
import { useState } from "react";
import { UpvoteSection } from "../components/UpvoteSection";

const Index = () => {
    const [variables, setVariables] = useState({ 
        limit:10,
        cursor: null as null | string});
    const [{data, fetching}] = usePostsQuery({
        variables,
    });

    if (!fetching && !data) {
        return <div> query failed</div>
    }

    return(
        <Layout>
            <Flex align="center">
            <Heading>Post Office</Heading> 
            <NextLink href="/create-post">
                <Link ml="auto">
                create post
                </Link>
            </NextLink>
            </Flex>
            <br/>
            {fetching && !data ? (
                <div>loading...</div>
            )   :   (
            <Stack spacing={8} > 
                {data!.posts.posts.map( (p) => (
                    <Flex key ={p.id} p={5} shadow='md' borderWidth='1px' borderRadius="md">
                        <UpvoteSection post = {p} />
                        <Box>
                            <Heading fontSize='xl'>{p.title}</Heading>
                            <Text> by: { p.creator.username } </Text>
                            <Text mt={4}>{p.textSnippet +"..."}</Text>
                        </Box>
                    </Flex>
                ))}
            </Stack>
            )}
            { data && data.posts.hasMore ? (
                <Flex>
                <Button onClick={() => {
                    setVariables({
                        limit:variables.limit,
                        cursor: data.posts.posts[data.posts.posts.length -1].createdAt,
                    }) 
                }}isLoading = {fetching} m='auto' my={6}> load more</Button>
                </Flex>
            ): null}
        </Layout>
    );
};

export default withUrqlClient(createUrqlClient, {ssr: true})(Index);


