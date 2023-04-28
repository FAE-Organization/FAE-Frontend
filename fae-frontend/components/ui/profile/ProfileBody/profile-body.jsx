import { HStack, Text } from "@chakra-ui/react";
import ObserverReel from "./observer-reel";
import DesignPortfolio from "./design-portfolio";

export default function ProfileBody({ title, description }) {
    return (
        <HStack
            width='60%'
            bgColor='beige'
        >
            <ObserverReel />
            <DesignPortfolio />
        </ HStack>
    )
}