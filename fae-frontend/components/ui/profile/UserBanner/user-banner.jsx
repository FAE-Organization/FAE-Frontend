// import { Spacer, Box, Image, Flex } from "@chakra-ui/react";
// import UserHeader from "./user-header.jsx";
// import UserCategories from "./user-categories.jsx";
// import UserBio from "./user-bio.jsx";

// export default function UserBanner({ roles, tags, region, image, username, pronouns, payrate }) {
//     return (
//         <Flex direction={'row'}>
//             <Box>
//                 <Image
//                     src={image === 1 ? '/userMockIcon_1.png' : '/userMockIcon_2.png'}
//                     borderRadius='20px'
//                     mt='5px'
//                     me='20px'
//                 />
//             </Box>
//             <Spacer />
//             <Box>
//                 <Flex align='left' direction={'column'}>
//                     <UserHeader />
//                     <UserCategories roles={roles} tags={tags} region={region} />
//                     <UserBio />
//                 </Flex>
//             </Box>
//         </Flex>
//     )
// }