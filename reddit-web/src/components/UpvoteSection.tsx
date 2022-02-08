import { ApolloCache } from '@apollo/client';
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Flex, IconButton } from '@chakra-ui/react';
import gql from 'graphql-tag';
import React, { useState } from 'react';
import { PostSnippetFragment, useMeQuery, useVoteMutation, VoteMutation, VoteMutationFn } from '../generated/graphql';
import { isServer } from '../utils/isServer';


interface UpvoteSectionProps {
    post: PostSnippetFragment;
}

const updateAfterVote = (value:number, postId: number,  cache:ApolloCache<VoteMutation>) => {

    const data = cache.readFragment<{
        id: number;
        points:number;
        voteStatus:number | null;
    }>(
        {
            id: 'Post:' + postId,
            fragment: gql`
            fragment _ on Post {
                id
                points
                voteStatus
            }
            `,
        }
    );

    let newPoints = data?.points;
    let newValue = value;

    if (data) {
        if (data.voteStatus === value ) {
          newPoints = newPoints - value;
          newValue = null;
        }
        else if (data.voteStatus === null){
          newPoints = newPoints +value;
          newValue = value;
        }
        else {
          newPoints = newPoints + 2*value;
          newValue = value;
        }
    }

    cache.writeFragment(
        {
            id: 'Post:' + postId, 
            fragment: gql`
                fragment _ on Post {
                    points
                    voteStatus
                }
                `,
            data: { points: newPoints, voteStatus: newValue},
        }
      );
}

export const UpvoteSection: React.FC<UpvoteSectionProps> = ({ post }) => {
    const {data } = useMeQuery(
        {
            skip:isServer(),
        }
    );

    const [loadingState, setLoadingstate] = 
    useState<
    'upvote-loading' | 
    'downvote-loading' | 
    'not-loading' 
    >('not-loading');
    const [ vote ] = useVoteMutation();
    return (
        <Flex direction = 'column' justifyContent="center" alignItems='center'  mr ={5}>
        <IconButton 
            aria-label='upvote post' 
            icon = {<ChevronUpIcon size="24px"/>}
            backgroundColor={post.voteStatus === 1? "green" : undefined}
            onClick={async () => {
                if (!data?.me){
                    return;
                }
                setLoadingstate('upvote-loading')
                await vote({variables:{
                        postId: post.id,
                        value: 1,
                    },
                    update:(cache) => updateAfterVote(1, post.id, cache),
                    });
                setLoadingstate('not-loading');
            }}
            isLoading={loadingState ==='upvote-loading'}
        />

        {post.points}

        <IconButton 
            aria-label='downvote post' 
            icon = {<ChevronDownIcon size="24px"/>}
            backgroundColor={post.voteStatus === -1? "red" : undefined}
            onClick={async () => {
                if (!data?.me){
                    return;
                }
                setLoadingstate('downvote-loading')
                await vote({variables:{
                    postId: post.id,
                    value: -1,
                    },
                    update:(cache) => updateAfterVote(-1, post.id, cache),
                });
                setLoadingstate('not-loading')
            }}
            isLoading={loadingState ==='downvote-loading'}
        />
    </Flex>
    )
}