import { HStack, Spacer } from "@chakra-ui/react";
import ObserverReel from "./observer-reel";
import DesignPortfolio from "./design-portfolio";
import Showcase from "../WorkShowcase/showcase";


export default function ProfileBody({ index }) {
    return (
        <HStack
            maxWidth='85%'
            gap='2'
            align='top'
        >
            <Showcase index={index} />
            <HStack>
                <Spacer />
                <ObserverReel index={index} />
                <DesignPortfolio />
            </HStack>
        </HStack>
    )
}