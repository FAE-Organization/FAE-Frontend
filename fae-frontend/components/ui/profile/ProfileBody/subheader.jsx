import { Text } from "@chakra-ui/react";

export default function Subheader({ category, fontSize, width, test }) {
    const data = test ? 'paul#4251' : category
    return (
        <Text
            as='b'
            fontSize={fontSize || '18px'}
            width={width || 'auto'}
        >
            {data}
        </Text>
    )
}