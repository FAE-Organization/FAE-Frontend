import { Stack } from "@chakra-ui/react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer";
import "@fontsource/poppins";

export default function Layout({ children }) {
    return (
        <Stack
            fontFamily={'Poppins'}
            color="black"
            backgroundColor='#F5F5F5'
        >
            <Navbar />
            {children}
            <Footer />
        </Stack>
    )
}