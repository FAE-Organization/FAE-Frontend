import {
    HStack,
    Tag,
    TagLabel
} from '@chakra-ui/react';

export default function UserTags(props) {
    const { tags } = props;
    return (
        <HStack spacing={4}>
            {tags.map((tag, i) => (
                <Tag
                    size='md'
                    key={i}
                    borderRadius='full'
                    variant='solid'
                    colorScheme='purple'
                    opacity={0.85}
                >
                    <TagLabel p={'0.2rem'}>
                        {tag}
                    </TagLabel>
                </Tag>
            ))}
        </HStack>
    );
}

{/* 
 
OLD TAG CODE

    <Box
        bg="black"
        display={'inline-block'}
        px={2}
        py={1}
        color="white"
        mb={2}>
        <Text fontSize={'xs'} fontWeight="medium">
            {tags}
        </Text>
    </Box> */}