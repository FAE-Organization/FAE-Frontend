import { HStack, Spacer } from "@chakra-ui/react";
import ObserverReel from "./observer-reel";
import DesignPortfolio from "./design-portfolio";
import Showcase from "../WorkShowcase/showcase";


export default function ProfileBody() {
    return (
            <HStack
                maxWidth='100%'
                gap='2'
                align='top'
            >
                <Showcase />
            <HStack>
                <Spacer />
                <ObserverReel />
                <DesignPortfolio />
            </HStack>
            </HStack>
    )
}