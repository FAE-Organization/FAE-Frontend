import { Grid, GridItem } from '@chakra-ui/react';
import React, { useState } from "react";
import DesignPortfolio from "../WorkShowcase/design-portfolio";
import WorkShowcase from "../WorkShowcase/work-showcase";
import VideoReel from "../WorkShowcase/video-reel";
import ArticleSection from '../WorkShowcase/articles';
import NotableEvents from '../WorkShowcase/notable-events';
import { useDispatch, useSelector } from 'react-redux';
import { TEST_PROFILE_RESPONSE_DATA } from '../TEST_DATA';


const { showcase: test_showcase } = TEST_PROFILE_RESPONSE_DATA[0];

export default function ProfileBody({ editable }) {
    const [selectedCategories, setSelectedCategories] = useState(test_showcase);
    const userData = useSelector((state) => state.userProfile.userData);

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
               {isCategoryEnabled('Notable Events') && ( <NotableEvents editable={editable} events_data={userData.events} /> )}
                {isCategoryEnabled('Articles') && ( <ArticleSection editable={editable} article_data={userData.articles} /> )}
            </GridItem>
            <GridItem p={4} gridColumn={{ md: 'span 2' }}>
                {isCategoryEnabled('Observer Reel') && ( <VideoReel headerText={'Observer Reel'} editable={editable} video_data={userData.observer} /> )}
                {isCategoryEnabled('Editing Reel') && ( <VideoReel headerText={'Editing Reel'} editable={editable} video_data={userData.editing} /> )}
            </GridItem>
            <GridItem p={4}>
                {isCategoryEnabled('Design Portfolio') && ( <DesignPortfolio editable={editable} design_data={userData.design} /> )}
                {isCategoryEnabled('Casting Reel') && ( <VideoReel headerText={'Casting Reel'} editable={editable} video_data={userData.casting} /> )}
            </GridItem>
        </Grid>
    );
};
