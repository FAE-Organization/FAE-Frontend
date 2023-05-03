import { Stack } from "@chakra-ui/react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer";
import "@fontsource/poppins";
import { useRouterAsHeader } from "@/lib/hooks/useRouteAsHeader";
import Head from "next/head";

export default function Layout({ children }) {
    const title = useRouterAsHeader()
    return (
        // Styling in <Stack> impacts ENTIRE application !!!!!
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content="FAE brings the spotlight to those who work behind the scenes in esports and gaming to showcase their talent."
                />
                <meta property="og:title" content="FAE" />
                <meta property="og:image" content="https://i.ibb.co/8dY4wPY/FaeLogo.png" />
                <meta property="og:url" content="https://www.fae-org.netlify.app/" />
                <meta property="og:type" content="website" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Stack
                fontFamily={'Poppins'}
                color="black"
                backgroundColor='#F5F5F5'
            >
                <Stack
                    color='black'
                    bgColor='#F5F5F5'
                >
                    <Navbar />
                    {children}
                    <Footer />
                </Stack>
            </Stack>
        </>
    )
}