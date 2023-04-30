import { Stack } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <Stack
        // font='something'
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