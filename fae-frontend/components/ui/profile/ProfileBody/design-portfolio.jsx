import { VStack, Box, IconButton, Text } from "@chakra-ui/react";
import PortfolioBody from "./portfolio-body";
import { MdOutlineUpload } from "react-icons/md";

export default function DesignPortfolio({ editable }) {
    
    return (
        <VStack align='left' >
            <Box>
                <Text
                    textTransform={'Uppercase'}
                    as='b'
                    fontSize={'20px'}
                    width={'auto'}
                    pr={3}>
                    Design Portfolio
                </Text>
                {editable && (
                    <IconButton 
                        fontSize={'2xl'} 
                        variant={'unstyled'} 
                        icon={<MdOutlineUpload />} 
                        color={'purple.800'} />
                )}
            </Box>
            <PortfolioBody editable={editable} />
        </ VStack>
    )
}