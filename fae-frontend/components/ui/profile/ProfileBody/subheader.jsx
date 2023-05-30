import { Text } from "@chakra-ui/react";

export default function Subheader({ category, fontSize, width }) {
    return (
        <Text
            as='b'
            fontSize={fontSize || '18px'}
            width={width || 'auto'}
            textTransform={'uppercase'}>
            { category }
        </Text>
    )
}