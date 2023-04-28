import { VStack, Text } from "@chakra-ui/react";
import Subheader from "../ProfileBody/subheader.jsx";

export default function UserBio() {
    return (
        <VStack
            align='left'
            spacing={-0.25}
        >
            <Subheader
                category='Bio'
            />
            <Text
                fontSize='15px'
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
        </VStack>

    );

}