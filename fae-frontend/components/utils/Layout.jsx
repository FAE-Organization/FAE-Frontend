import { Stack } from "@chakra-ui/react";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <Stack
            fontFamily={'Poppins'}
            color="black"
            backgroundColor='#F5F5F5'
        >
            <NavBar />
            {children}
            <Footer />
        </Stack>
    )
}