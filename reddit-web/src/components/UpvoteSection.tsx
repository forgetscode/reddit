import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Flex, IconButton } from '@chakra-ui/react';
import React from 'react';
import { PostSnippetFragment, useVoteMutation } from '../generated/graphql';

interface UpvoteSectionProps {
    post: PostSnippetFragment;
}

export const UpvoteSection: React.FC<UpvoteSectionProps> = ({ post }) => {
    const [, vote ] = useVoteMutation();
    return (
        <Flex direction = 'column' justifyContent="center" alignItems='center'  mr ={5}>
        <IconButton 
            aria-label='upvote post' 
            icon = {<ChevronUpIcon/>}
            onClick={() => {
                vote({
                    postId: post.id,
                    value: 1,
                })
            }}
            size="24px"
        />

        {post.points}

        <IconButton 
            aria-label='downvote post' 
            icon = {<ChevronDownIcon/>}
            onClick={() => {
                vote({
                    postId: post.id,
                    value: -1,
                })
            }}
            size="24px"
        />
    </Flex>
    )
}