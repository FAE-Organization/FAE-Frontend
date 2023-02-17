import { Stack } from "@chakra-ui/react";

export default function Layout({ children }) {
    return (
        <Stack
        // font='something'
        >
            {/* Navbar component here */}
            {children}
            {/* Footer component here */}
        </Stack>
    )
}