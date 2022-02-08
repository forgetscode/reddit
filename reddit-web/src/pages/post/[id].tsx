import { Box, Flex, Heading } from '@chakra-ui/react';
import { withUrqlClient } from 'next-urql';
import { useRouter } from 'next/router';
import { AlterPostButtons } from '../../components/AlterPostButtons';
import { Layout } from '../../components/Layout';
import { UpvoteSection } from '../../components/UpvoteSection';
import { usePostQuery } from '../../generated/graphql';
import { createUrqlClient } from '../../utils/createUrqlClient';
import { Grid, GridItem, Text } from '@chakra-ui/react'
import { withApollo } from '../../utils/withApollo';


export const Post = ({}) => {
    const router = useRouter();
    const intId = typeof router.query.id === 'string' ? parseInt(router.query.id): -1;
    const { data, error,  loading } = usePostQuery({
        skip: intId === -1,
        variables: {
            id: intId,
        },
    });
    
    if ( loading ) {
        return(
            <Layout>
                <div> ... loading... </div>
            </Layout>
        );
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
        <Layout>
            <br/>
            <Grid
                templateRows='repeat(4)'
                templateColumns='repeat(8, 1fr)'
                shadow='md' borderWidth='1px'
                bg="white"
                >
                <GridItem rowSpan={4} colSpan={1}>
                    <Box mt={6}>
                        <UpvoteSection post = {data?.post} />
                    </Box>
                </GridItem>
                <GridItem colSpan={7}>
                    <Box mt={4} mb ={4}>
                        <Heading> { data?.post.title }</Heading> 
                        <Text> by: { data?.post.creator.username } </Text>
                    </Box>
                </GridItem>
                <GridItem 
                    rowSpan={2} 
                    colSpan={7} 
                    mr={4}
                    wordBreak={"break-word"}
                    mb={4}
                    >
                        <Text>{ data?.post?.text }</Text>
                </GridItem>
                <GridItem rowSpan={1} colSpan={7} ml='auto' mt='auto' mb={4} mr={4}>
                    <Box mb={2}>
                        <AlterPostButtons 
                            id = { data.post.id } 
                            creatorId = { data.post.creator.id }
                        />
                    </Box>
                </GridItem>
            </Grid>
        </Layout>
    );
};

export default withApollo({ssr:true})( Post);