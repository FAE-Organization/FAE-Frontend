import { VStack, HStack, Flex } from "@chakra-ui/react";
import Subheader from "../ProfileBody/subheader";
import Capsule from "./capsule";

export default function UserCategories({ roles, tags, region }) {
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
                    {roles.map((entry, index) => (
                        <Capsule
                            key={index}
                            color={(() => {
                                switch (index) {
                                    case 0:
                                        return 'red'
                                    case 1:
                                        return 'lightblue'
                                    case 2:
                                        return 'teal'
                                    case 3:
                                        return 'green'
                                }
                            })()}
                            capName={entry}
                        />
                    ))}
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
                    {tags.map((entry, index) => (
                        <Capsule
                            key={index}
                            color='lightgrey'
                            capName={entry}
                        />
                    ))}
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
                        capName={region}
                    />
                </Flex>
            </VStack>
        </HStack>
    )
}