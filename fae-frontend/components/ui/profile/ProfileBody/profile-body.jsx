import { HStack, Spacer } from "@chakra-ui/react";
import ObserverReel from "./observer-reel";
import DesignPortfolio from "./design-portfolio";
import Showcase from "../profile-showcase";



export default function ProfileBody({ index }) {
    return (
            <HStack
                maxWidth='100%'
                gap='2'
                align='top'
                px={3}
            >
                <Showcase />
            <HStack>
                <Spacer px={3}/>
                <ObserverReel index={index} />
                <Spacer px={5}/>
                <DesignPortfolio />
            </HStack>
        </HStack>
    )
}