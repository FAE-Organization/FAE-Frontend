import { Stack } from "@chakra-ui/react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
    return (
        <Stack
        // font='something'
        >
            <Navbar />
            {children}
            {/* Footer component here */}
        </Stack>
    )
}