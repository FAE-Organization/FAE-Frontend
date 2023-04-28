import { Stack, HStack } from "@chakra-ui/react"

export default function Navbar() {
    return (
        <Stack
            width='100%'
            height='100px'
            alignItems='center'
            backgroundColor='white'
        >
            <HStack width='95%' justifyContent='space-between'>
                <Stack>
                    {/* 
                    Logo + Navigation Items.
                    
                    Probably going to set up CMS so we can update the logo + nav items anytime we need to.
                    Saves time and separates UI/UX from code
                     */}
                </Stack>
                <Stack>
                    {/* 
                    Username and Profile Link
                    */}
                </Stack>
            </HStack>
        </Stack>
    )
}