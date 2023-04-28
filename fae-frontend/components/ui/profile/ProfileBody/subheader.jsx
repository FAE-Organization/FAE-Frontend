import { Text } from "@chakra-ui/react";

export default function Subheader({ category, fontSize, width }) {
    return (
        <Text
            as='b'
            fontSize={ fontSize || '20px' }
            width={ width || 'auto' }
        >
          {category.toUpperCase()}
        </Text>
    )
}