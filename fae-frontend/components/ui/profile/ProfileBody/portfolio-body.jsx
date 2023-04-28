import { VStack, Box, HStack, Image, Text } from "@chakra-ui/react";
import ObserverReel from "./observer-reel";
import DesignPortfolio from "./design-portfolio";
import Subheader from "./subheader";
import  { SimpleGrid } from "@chakra-ui/react";

export default function PortfolioBody({ title, description }) {
    return (
        <SimpleGrid columns={2} spacing={1} >
            <Box>
                {/* {This is where the youtube stuff goes?} */}
                <Image 
                    src='/designMockImage_1.png' 
                />            
            </Box>
            <Box>
                {/* {This is where the youtube stuff goes?} */}
                <Image 
                    src='/designMockImage_2.png'
                />
            </Box>
            <Box>
                {/* {This is where the youtube stuff goes?} */}
                <Image 
                    src='/designMockImage_3.png'
                />           
            </Box>
            <Box>
                {/* {This is where the youtube stuff goes?} */}
                <Image 
                    src='/designMockImage_4.png'
                />            
            </Box>
        </ SimpleGrid>
    )
}