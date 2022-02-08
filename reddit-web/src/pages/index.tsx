
import { Layout } from "../components/Layout";
import { usePostsQuery} from "../generated/graphql";
import { Box, Button, Flex, Heading, Link, Stack, Text } from "@chakra-ui/react";
import NextLink from 'next/link';
import { UpvoteSection } from "../components/UpvoteSection";
import { AlterPostButtons } from "../components/AlterPostButtons";
import { withApollo } from "../utils/withApollo";


const Index = () => {

    const {data, error,  loading, fetchMore, variables} = usePostsQuery({
        variables:{
            limit:10,
            cursor: null,
        },
        notifyOnNetworkStatusChange: true,
    });

    if (!loading && !data) {
        return (
            <>
                <div> query failed</div>
                <div> {error?.message}</div>
            </>
         );
    }

    return(
        <Layout>
            <Flex align="center">
            </Flex>
            <br/>
            {loading && !data ? (
                <div>loading...</div>
            )   :   (
            <Stack spacing={8} > 
                {data!.posts.posts.map( (p) => !p ? null:(
                    <Flex key ={p.id} p={5} shadow='md' borderWidth='1px' bg="white">
                        <UpvoteSection post = {p} />
                        <Box flex={1}>
                            <NextLink href="/post/[id]" as={`/post/${p.id}`}>
                                <Link>
                                    <Heading fontSize="xl"> { p.title } </Heading>
                                </Link>
                            </NextLink>
                            <Text> by: { p.creator.username } </Text>
                            <Flex maxWidth={700}>
                                <Text flex={1} mt={4} isTruncated mr={4}>{p.text}</Text>
                                    <Box ml="auto">
                                        <AlterPostButtons 
                                            id={ p.id } 
                                            creatorId = {p.creator.id}
                                        />
                                    </Box>
                            </Flex>
                        </Box>
                    </Flex>
                ))}
            </Stack>
            )}
            { data && data.posts.hasMore ? (
                <Flex>
                <Button onClick={() => {
                    fetchMore({
                        variables: {
                            limit:variables?.limit,
                            cursor: data.posts.posts[data.posts.posts.length -1].createdAt,
                        },
                    });
                }}isLoading = {loading} m='auto' my={6}> load more</Button>
                </Flex>
            ): null}
        </Layout>
    );
};

export default withApollo({ssr:true})(Index);


