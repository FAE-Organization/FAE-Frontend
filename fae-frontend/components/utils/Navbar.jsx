import { Stack, HStack, IconButton } from "@chakra-ui/react"
import { CgProfile } from 'react-icons/cg'
import { useRouter } from "next/router"

export default function Navbar() {
    const router = useRouter()
    return (
        <Stack
            width='100%'
            height='100px'
            alignItems='center'
            backgroundColor='#EEE'
        >
            <HStack
                width='95%'
                justifyContent='space-between'
                height='100%'
            >
                <Stack border='1px solid' width='100%'>
                    {/* 
                    Logo + Navigation Items.
                    
                    Probably going to set up CMS so we can update the logo + nav items anytime we need to.
                    Saves time and separates UI/UX from code
                     */}
                </Stack>
                <Stack>
                    <IconButton
                        icon={<CgProfile />}
                        onClick={() => {
                            router.push('/auth/account')
                        }}
                    />
                    {/* 
                    Username and Profile Link
                    */}
                </Stack>
            </HStack>
        </Stack>
    )
}