import { useState } from 'react';
import {
    Box,
    Flex,
    Heading,
    IconButton,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    Button,
    PopoverFooter,
    PopoverArrow,
    SimpleGrid,
    Image,
    GridItem,
} from '@chakra-ui/react';
import { MdOutlineUpload } from 'react-icons/md';
import { FaMinus } from 'react-icons/fa';
import Subheader from './subheader';

export default function DesignPortfolio({ editable }) {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [uploadedImages, setUploadedImages] = useState([]);

    function handleButtonClick() {
        setIsPopoverOpen(!isPopoverOpen);
    };

    function handleUpload(event) {
        const files = Array.from(event.target.files);
        const uploadedImagesURLs = files.map((file) => URL.createObjectURL(file));
        setUploadedImages(uploadedImagesURLs);
    };

    function handleRemoveImage(index) {
        const updatedImages = uploadedImages.filter((_, i) => i !== index);
        setUploadedImages(updatedImages);
    };

    return (
        <GridItem>
            <Flex align='center'>
                <Popover
                    isOpen={isPopoverOpen}
                    onOpen={handleButtonClick}
                    onClose={handleButtonClick}
                    placement='left'>
                    <PopoverTrigger>
                        <Flex align='center'>
                            
                            <Subheader category='Design Portfolio' mr={2} />
                            {editable && (
                                <IconButton
                                    icon={<MdOutlineUpload />}
                                    aria-label='Upload Image'
                                    variant='unstyled'
                                    color={'purple.700'}
                                    fontSize={'25px'}
                                    ml={2}
                                    onClick={handleButtonClick} />
                            )}
                        </Flex>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverBody>
                            <input type='file' onChange={handleUpload} multiple />
                        </PopoverBody>
                        <PopoverFooter d='flex' justifyContent='flex-end'>
                            <Button size='sm' onClick={handleButtonClick}>
                                Close
                            </Button>
                        </PopoverFooter>
                    </PopoverContent>
                </Popover>
            </Flex>
            {uploadedImages.length > 0 && (
                <SimpleGrid columns={2} spacingX={1} spacingY={5} mt={4}>
                    {uploadedImages.map((imageURL, index) => (
                        <Box
                            key={index}
                            position={'relative'}
                            boxSize='150px'
                            bg='gray.200'
                            borderRadius='md' >
                            <Image
                                src={imageURL}
                                alt={`Uploaded Image ${index + 1}`}
                                boxSize='100%'
                                objectFit='cover' />
                            {editable && (
                                <Box
                                    position='absolute'
                                    top={'-3'}
                                    right={'-2'}
                                    boxShadow={'lg'}
                                    borderRadius={'full'} >
                                    <IconButton
                                        size={'sm'}
                                        isRound
                                        bgColor={'white'}
                                        fontSize={'xl'}
                                        color={'purple.600'}
                                        position='relative'
                                        aria-label='Add event'
                                        icon={<FaMinus />} 
                                        onClick={() => handleRemoveImage(index)}
                                    />
                                </Box>
                            )}
                        </Box>
                    ))}
                </SimpleGrid>
            )}
        </GridItem>
    );
};
