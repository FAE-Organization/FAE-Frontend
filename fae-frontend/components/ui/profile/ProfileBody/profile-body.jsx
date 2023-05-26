import { Grid, GridItem } from '@chakra-ui/react';
import React, { useState } from "react";
import DesignPortfolio from "../WorkShowcase/design-portfolio";
import WorkShowcase from "../WorkShowcase/work-showcase";
import VideoReel from "../WorkShowcase/video-reel";
import ArticleSection from '../WorkShowcase/articles';
import NotableEvents from '../WorkShowcase/notable-events';
import { TEST_PROFILE_RESPONSE_DATA } from '../TEST_DATA';


const { showcase: test_showcase, events, articles, observer, editing, casting, design, } = TEST_PROFILE_RESPONSE_DATA[0];

export default function ProfileBody({ editable }) {
    const [selectedCategories, setSelectedCategories] = useState(test_showcase);

    // Helper function to check if showcase title is enabled
    function isCategoryEnabled(showcaseCategory) {
       return selectedCategories.includes(showcaseCategory);
    }

    return (
        <Grid
            templateColumns={{
                base: '1fr',
                md: '1fr 1fr 1fr 1fr',
            }}
            gap={4} >
            <GridItem p={4} minWidth={'330px'}>
               <WorkShowcase editable={editable} setSelectedCategories={setSelectedCategories} selectedCategories={selectedCategories} />
               {isCategoryEnabled('Notable Events') && ( <NotableEvents editable={editable} events_data={events} /> )}
                {isCategoryEnabled('Articles') && ( <ArticleSection editable={editable} article_data={articles} /> )}
            </GridItem>
            <GridItem p={4} gridColumn={{ md: 'span 2' }}>
                {isCategoryEnabled('Observer Reel') && ( <VideoReel headerText={'Observer Reel'} editable={editable} video_data={observer} /> )}
                {isCategoryEnabled('Editing Reel') && ( <VideoReel headerText={'Editing Reel'} editable={editable} video_data={editing} /> )}
            </GridItem>
            <GridItem p={4}>
                {isCategoryEnabled('Design Portfolio') && ( <DesignPortfolio editable={editable} design_data={design} /> )}
                {isCategoryEnabled('Casting Reel') && ( <VideoReel headerText={'Casting Reel'} editable={editable} video_data={casting} /> )}
            </GridItem>
        </Grid>
    );
};
