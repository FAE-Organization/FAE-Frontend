import { Grid, GridItem } from '@chakra-ui/react';
import ObserverReel from "./observer-reel";
import DesignPortfolio from "./design-portfolio";
import Showcase from "../profile-showcase";

export default function ProfileBody({ editable }) {
    return (
        <Grid
            templateColumns={{
                base: '1fr',
                md: '1fr 1fr 1fr 1fr',
            }}
            gap={4}
        >
            <GridItem p={4}>
                <Showcase editable={editable} />
            </GridItem>
            <GridItem p={4} gridColumn={{ sm: 'span 2' }}>
                <ObserverReel editable={editable} />
            </GridItem>
            <GridItem p={4}>
                <DesignPortfolio editable={editable} />
            </GridItem>
        </Grid>
    );
};