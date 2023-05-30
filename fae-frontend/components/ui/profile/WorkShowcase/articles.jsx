import { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
  VStack,
  Input,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from '@chakra-ui/react';
import Subheader from '../ProfileBody/subheader';
import { FaEllipsisH, FaPlus } from 'react-icons/fa';

export default function NotableEvents({ editable, article_data }) {
  const [articles, setArticles] = useState(article_data);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [tempArticleData, setTempArticleData] = useState(getInitialArticleData());

  function getInitialArticleData() {
    return {
      id: '',
      title: '',
      date: '',
      thumbnail: '',
      url: '',
    };
  }

  function handleUpload() {
    setIsPopoverOpen(true);
  }

  function handlePopoverClose() {
    setIsPopoverOpen(false);
    setTempArticleData(getInitialArticleData());
  }

  function handleArticleDataChange(article) {
    const { name, value } = article.target;
    setTempArticleData(prevData => ({ ...prevData, [name]: value }));
  }

  function handleConfirmUpload() {
    const { id, title, date, thumbnail, url } = tempArticleData;

    if (!title || !date || !thumbnail || !url) {
      return;
    }

    if (id) {
      // Update existing article
      const updatedArticles = articles.map(article =>
        article.id === id ? { ...article, title, date, thumbnail, url } : article
      );
      setArticles(updatedArticles);
    } else {
      // Add new article
      const newArticle = {
        id: Date.now(),
        title,
        date,
        thumbnail,
        url,
      };
      setArticles([...articles, newArticle]);
    }

    handlePopoverClose();
  }

  function handleEdit(article) {
    setTempArticleData(article);
    setIsPopoverOpen(true);
  }

  function handleRemove(articleId) {
    setArticles(articles.filter(article => article.id !== articleId));
    handlePopoverClose();
  }

  function renderArticles() {
    return articles.map(article => (
      <Box 
        key={article.id} 
        p={1}
        borderWidth={1} 
        borderRadius="md" 
        cursor="pointer" 
        variant={editable ? "outline" : 'unstyled'}
        border={editable ? '1px solid black' : '0px'}
      >
        <Flex justify="space-between" align="center" spacing={10}>
          <Box flex={1} marginRight={4}>
            <Image src={article.thumbnail} alt={article.title} minW={100}/>
          </Box>
          <Box flex={4}>
            <Heading as="h3" size="sm" marginBottom={2}>
              {article.title}
            </Heading>
            <Box fontSize="sm" color="gray.500">
              {article.date}
            </Box>
          </Box>
          {editable && (
            <Box position="relative" >
              <Box
                position="absolute"
                top="-60px"
                right="-15px"
                boxShadow="lg"
                borderRadius="full"
              >
                <IconButton
                  size="sm"
                  isRound
                  bgColor="white"
                  fontSize="xl"
                  color="purple.600"
                  aria-label="Remove Image"
                  icon={<FaEllipsisH />}
                  onClick={() => handleEdit(event)}
                />
              </Box>
            </Box>
          )}
        </Flex>
      </Box>
    ));
  }

  return (
    <VStack align="stretch" pt={8}>
      <Subheader category="Articles" />
      <VStack spacing={6} pb={4} align="stretch" >
        {renderArticles()}
      </VStack>
      {editable && (
        <Popover isOpen={isPopoverOpen} onClose={handlePopoverClose}>
          <PopoverTrigger>
            <Box
              p={4}
              borderWidth={1}
              borderRadius="md"
              variant="outline"
              border={'1px solid black'}
              h={75} >
              <Box position="relative">
                <Box
                  position="absolute"
                  top="-35px"
                  right="-25px"
                  boxShadow="lg"
                  borderRadius="full" >
                  <IconButton
                    size="sm"
                    isRound
                    bgColor="white"
                    fontSize="xl"
                    color="purple.600"
                    aria-label="Add Article"
                    icon={<FaPlus />}
                    onClick={handleUpload}
                  />
                </Box>
              </Box>
            </Box>
          </PopoverTrigger>
          <PopoverContent >
            <PopoverCloseButton />
            <PopoverHeader align="center">
              <Text as="h2" px={5} textTransform="uppercase" fontWeight="bold">
                {tempArticleData.id ? 'Edit Article Details' : 'Upload Article'}
              </Text>
            </PopoverHeader>
            <PopoverBody>
            <VStack spacing={2} align="stretch">
              <Input
                placeholder="Article Title"
                name="title"
                value={tempArticleData.title}
                onChange={handleArticleDataChange}
              />
              <Input
                type="date"
                placeholder="Article Date"
                name="date"
                value={tempArticleData.date}
                onChange={handleArticleDataChange}
              />
              <Input
                placeholder="Thumbnail URL"
                name="thumbnail"
                value={tempArticleData.thumbnail}
                onChange={handleArticleDataChange}
              />
              <Input
                placeholder="Article URL"
                name="url"
                value={tempArticleData.url}
                onChange={handleArticleDataChange}
              />
              <Button colorScheme="purple" onClick={handleConfirmUpload}>
                {tempArticleData.id ? 'Update' : 'Upload'}
              </Button>
                             
              {tempArticleData.id && (
                  <Button
                    aria-label="Delete Event"
                    variant="outline"
                    colorScheme="red"
                    onClick={() => handleRemove(tempArticleData.id)}
                  >
                    Delete Event
                  </Button>
                )}
            </VStack>
          </PopoverBody>
          </PopoverContent>
        </Popover>
      )}
    </VStack>
  );
}
