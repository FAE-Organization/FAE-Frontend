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
import { EditIcon, CloseIcon } from '@chakra-ui/icons';
import Subheader from '../ProfileBody/subheader';
import { FaPlus } from 'react-icons/fa';

export default function NotableEvents({ editable, article_data }) {
  const [articles, setArticles] = useState(article_data);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [articleData, setArticleData] = useState(getInitialArticleData());

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
    setArticleData(getInitialArticleData());
  }

  function handleArticleDataChange(article) {
    const { name, value } = article.target;
    setArticleData(prevData => ({ ...prevData, [name]: value }));
  }

  function handleConfirmUpload() {
    const { id, title, date, thumbnail, url } = articleData;

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
    setArticleData(article);
    setIsPopoverOpen(true);
  }

  function handleRemove(articleId) {
    setArticles(articles.filter(article => article.id !== articleId));
  }

  function renderArticles() {
    return articles.map(article => (
      <Box key={article.id} p={4} borderWidth={1} borderRadius="md" cursor="pointer">
        <Flex justify="space-between" align="center">
          <Box flex={1} marginRight={4}>
            <Image src={article.thumbnail} alt={article.title} />
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
            <Flex>
              <IconButton
                icon={<EditIcon />}
                aria-label="Edit Event"
                variant="unstyled"
                color="purple.500"
                size="sm"
                onClick={() => handleEdit(article)}
              />
              <IconButton
                icon={<CloseIcon />}
                aria-label="Remove Event"
                variant="unstyled"
                color="red.500"
                size="sm"
                onClick={() => handleRemove(article.id)}
              />
            </Flex>
          )}
        </Flex>
      </Box>
    ));
  }

  return (
    <VStack align="stretch" spacing={4}>
      <Subheader category="Articles" />
      <VStack spacing={4} align="stretch" >
        {renderArticles()}
      </VStack>
      {editable && (
        <Popover isOpen={isPopoverOpen} onClose={handlePopoverClose}>
          <PopoverTrigger>
            {/* <Button
              p={4}
              borderWidth={1}
              borderRadius="md"
              variant="outline"
              onClick={handleUpload}
            >
              <Flex justify="center" align="center">
                <MdFileUpload size="24px" />
                <Text ml={2}>Add Article</Text>
              </Flex>
            </Button> */}
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
          <PopoverContent p={4}>
            <PopoverCloseButton />
            <PopoverHeader align="center">
              <Text as="h2" px={5} textTransform="uppercase" fontWeight="bold">
                {articleData.id ? 'Edit Article Details' : 'Upload Article'}
              </Text>
            </PopoverHeader>
            <PopoverBody>
            <VStack spacing={2} align="stretch">
              <Input
                placeholder="Article Title"
                name="title"
                value={articleData.title}
                onChange={handleArticleDataChange}
              />
              <Input
                type="date"
                placeholder="Article Date"
                name="date"
                value={articleData.date}
                onChange={handleArticleDataChange}
              />
              <Input
                placeholder="Thumbnail URL"
                name="thumbnail"
                value={articleData.thumbnail}
                onChange={handleArticleDataChange}
              />
              <Input
                placeholder="Event URL"
                name="url"
                value={articleData.url}
                onChange={handleArticleDataChange}
              />
              <Button colorScheme="purple" onClick={handleConfirmUpload}>
                {articleData.id ? 'Update' : 'Upload'}
              </Button>
              {/* 
               Something fucky is going on right here
               
              {articleData.id && (
                  <Button
                    aria-label="Delete Event"
                    variant="outline"
                    colorScheme="red"
                    onClick={() => handleRemove(tempArticleData.id)}
                  >
                    Delete Event
                  </Button>
                )} */}
            </VStack>
          </PopoverBody>
          </PopoverContent>
        </Popover>
      )}
    </VStack>
  );
}
