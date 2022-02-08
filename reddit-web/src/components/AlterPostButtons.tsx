import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { Box, IconButton } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { useDeletePostMutation, useMeQuery } from "../generated/graphql";

interface AlterPostButtonsProps {
    id: number;
    creatorId:number;
}

export const AlterPostButtons: React.FC<AlterPostButtonsProps> = ({
    id,
    creatorId
    }) => {
        
        const [  deletePost] = useDeletePostMutation();
        const { data: meData } = useMeQuery();

        if (meData?.me?.id !== creatorId) {
            return null;
        } 
        return (
            <Box >
                <NextLink href="/post/edit/[id]"
                    as ={`/post/edit/${id}`}>
                        <IconButton 
                            mr ={4}
                            ml="auto"
                            aria-label='Edit Post' 
                            icon = {<EditIcon size="24px"/>}
                        />
                </NextLink>
                <IconButton 
                    ml="auto"
                    aria-label='Delete Post' 
                    icon = {<DeleteIcon size="24px"/>}
                    onClick={() => {
                        deletePost({
                            variables: {id},
                            update: (cache) => {
                                cache.evict({id: "Post:" + id});
                            }
                        });
                    }}
                />
            </Box>
        )
    }

