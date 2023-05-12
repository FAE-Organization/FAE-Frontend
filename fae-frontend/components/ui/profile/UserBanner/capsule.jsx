import { Tag, TagLabel } from "@chakra-ui/react";

export default function Capsule({ color, capName }) {
    return (
        <Tag
            variant='outline'
            fontWeight={'bold'}
            width={'45px'}
            borderRadius='16px'
            px='12px'
            py='2px'
            mx='2px'
            my='3px'
            colorScheme={ color }
            bgColor= { color }
            opacity={0.7}
        >
            <TagLabel color='black' fontSize='15px'>
                {capName}
            </TagLabel>
        </Tag>
    )
}