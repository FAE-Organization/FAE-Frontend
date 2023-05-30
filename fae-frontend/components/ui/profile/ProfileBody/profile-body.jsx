import { Grid, GridItem } from '@chakra-ui/react';
import React, { useEffect, useState } from "react";
import DesignPortfolio from "../WorkShowcase/design-portfolio";
import WorkShowcase from "../WorkShowcase/work-showcase";
import VideoReel from "../WorkShowcase/video-reel";
import ArticleSection from '../WorkShowcase/articles';
import NotableEvents from '../WorkShowcase/notable-events';
import { useSelector } from 'react-redux';

export default function ProfileBody({ editable }) {
    const showcase = useSelector((state) => state.userProfile?.userData?.showcase);
    const events_data = useSelector((state) => state.userProfile?.userData?.events);
    const article_data = useSelector((state) => state.userProfile?.userData?.articles);
    const design_portfolio_data = useSelector((state) => state.userProfile?.userData?.design);
    

    // Helper function to check if showcase title is enabled
    function isCategoryEnabled(showcaseCategory) {
        return showcase && showcase.includes(showcaseCategory);
    }

    return (
        <Grid
            templateColumns={{
                base: '1fr',
                md: '1fr 1fr 1fr 1fr',
            }}
            gap={4} >
            <GridItem p={4} minWidth={'330px'}>
                <WorkShowcase editable={editable}  />
                {isCategoryEnabled('Notable Events') && (<NotableEvents editable={editable} events_data={events_data} />)}
                {isCategoryEnabled('Articles') && (<ArticleSection editable={editable} article_data={article_data} />)}
            </GridItem>
            <GridItem p={4} gridColumn={{ md: 'span 2' }}>
                {isCategoryEnabled('Observer Reel') && (<VideoReel headerText={'Observer Reel'} editable={editable} video_type={'observer'} />)}
                {isCategoryEnabled('Editing Reel') && (<VideoReel headerText={'Editing Reel'} editable={editable} video_type={'editing'} />)}
            </GridItem>
            <GridItem p={4}>
                {isCategoryEnabled('Design Portfolio') && (<DesignPortfolio editable={editable} design_data={design_portfolio_data} />)}
                {isCategoryEnabled('Casting Reel') && (<VideoReel headerText={'Casting Reel'} editable={editable} video_type={'casting'} />)}
            </GridItem>
        </Grid>
    );
};
