import { VStack } from "@chakra-ui/react";
import Subheader from "./subheader";
import PortfolioBody from "./portfolio-body";

export default function DesignPortfolio() {
    return (
        <VStack
            align='left'
        >
            <Subheader 
                category='Design Portfolio' // TODO: may need to refactor this later.
            />

            <PortfolioBody />
           
        </ VStack>
    )
}