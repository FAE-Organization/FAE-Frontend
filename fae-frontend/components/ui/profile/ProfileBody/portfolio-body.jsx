import { Box, Image } from "@chakra-ui/react";
import  { SimpleGrid } from "@chakra-ui/react";

const dir = '/profile-test-images'
export default function PortfolioBody() {
    return (
        <SimpleGrid columns={2} spacing={1} >
            <Box>
                {/* {This is where the youtube stuff goes?} */}
                <Image 
                    src= {dir + '/designMockImage_1.png'} 
                />            
            </Box>
            <Box>
                {/* {This is where the youtube stuff goes?} */}
                <Image 
                    src= {dir + '/designMockImage_2.png'}
                />
            </Box>
            <Box>
                {/* {This is where the youtube stuff goes?} */}
                <Image 
                    src= {dir + '/designMockImage_3.png'}
                />           
            </Box>
            <Box>
                {/* {This is where the youtube stuff goes?} */}
                <Image 
                    src= {dir + '/designMockImage_4.png'}
                />            
            </Box>
        </ SimpleGrid>
    )
}