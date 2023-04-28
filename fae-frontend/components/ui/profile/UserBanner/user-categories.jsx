import { VStack, HStack, Flex } from "@chakra-ui/react";
import Subheader from "../ProfileBody/subheader";
import Capsule from "./capsule";

export default function UserCategories() {
    return (
        <HStack
            align='top'
        >
            <VStack
                width='400px'
                align='left'
            >
                {/* ROLES */}
                <Subheader
                    category='Roles'
                />

                <Flex spacing='4px' flexWrap='wrap' flexDirection='row'>
                    <Capsule
                        color='red'
                        capName='Observer'
                    />
                    <Capsule
                        color='lightblue'
                        capName='Tournament Admin'
                    />
                    <Capsule
                        color='teal'
                        capName='Producer'
                    />
                    <Capsule
                        color='#8F9AD2'
                        capName='Social Media'
                    />
                </Flex>
            </VStack>

            <VStack
                width='325px'
                align='left'
            >

                {/* TAGS */}
                <Subheader
                    category='Tags'
                />
                <Flex spacing='4px' flexWrap='wrap' flexDirection='row'>
                    <Capsule
                        color='lightgrey'
                        capName='FE/NB'
                    />
                    <Capsule
                        color='lightgrey'
                        capName='Collegiate'
                    />
                    <Capsule
                        color='lightgrey'
                        capName='FlexiblePay'
                    />
                </Flex>
            </VStack>


            <VStack
                width='100px'
                align='left'
            >
                {/* REGION */}
                <Subheader
                    category='Region'
                />

                <Flex spacing='4px' flexWrap='wrap' flexDirection='row'>
                    <Capsule
                        color='#8F9AD2'
                        capName='NA'
                    />
                </Flex>
            </VStack>
        </HStack>
    )
}