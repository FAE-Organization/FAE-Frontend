import { VStack, HStack, Text } from "@chakra-ui/react";
import ObserverReel from "./observer-reel";
import DesignPortfolio from "./design-portfolio";
import Showcase from "../WorkShowcase/showcase";
import UserHeader from "../UserBanner/user-header";
import UserCategories from "../UserBanner/user-categories";
import UserBio from "../UserBanner/user-bio";

export default function ProfileBody({ title, description }) {
    return (
        <HStack
            align='left'
        >
        <Showcase />
        <HStack>
            <ObserverReel />
            <DesignPortfolio />
        </HStack>
        </ HStack>
    )
}