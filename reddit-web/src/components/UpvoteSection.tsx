import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Flex, IconButton } from '@chakra-ui/react';
import React, { useState } from 'react';
import { PostSnippetFragment, useVoteMutation } from '../generated/graphql';


interface UpvoteSectionProps {
    post: PostSnippetFragment;
}

export const UpvoteSection: React.FC<UpvoteSectionProps> = ({ post }) => {
    const [loadingState, setLoadingstate] = 
    useState<
    'upvote-loading' | 
    'downvote-loading' | 
    'not-loading' 
    >('not-loading');
    const [, vote ] = useVoteMutation();
    return (
        <Flex direction = 'column' justifyContent="center" alignItems='center'  mr ={5}>
        <IconButton 
            aria-label='upvote post' 
            icon = {<ChevronUpIcon size="24px"/>}
            backgroundColor={post.voteStatus === 1? "green" : undefined}
            onClick={async () => {
                setLoadingstate('upvote-loading')
                await vote({
                    postId: post.id,
                    value: 1,
                });
                setLoadingstate('not-loading')
            }}
            isLoading={loadingState ==='upvote-loading'}
            
        />

        {post.points}

        <IconButton 
            aria-label='downvote post' 
            icon = {<ChevronDownIcon size="24px"/>}
            backgroundColor={post.voteStatus === -1? "red" : undefined}
            onClick={async () => {
                setLoadingstate('downvote-loading')
                await vote({
                    postId: post.id,
                    value: -1,
                });
                setLoadingstate('not-loading')
            }}
            
            isLoading={loadingState ==='downvote-loading'}
        />
    </Flex>
    )
}