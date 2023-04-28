import {Text } from "@chakra-ui/react";

export default function Subheader({ category }) {
    return (
        <Text
            as='b'
            fontSize='sm'
        >
          {category}
        </Text>
    )
}