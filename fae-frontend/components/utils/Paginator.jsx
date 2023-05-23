import React, { useState } from 'react';
import { Box, Button, HStack, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePageNumber } from '@/lib/redux/formSlice';

export default function Paginator({ totalItems, itemsPerPage }) {

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const dispatch = useDispatch()
    const pageNumber = useSelector((state) => state.form.pageNumber)

    const handlePageChange = (page) => {
        dispatch(updatePageNumber(page))
        // .skip(pageNumber * itemsPerPage).limit(itemsPerPage)
    };

    const renderPageButtons = () => {
        const buttons = [];

        for (let i = 1; i <= totalPages; i++) {
            buttons.push(
                <Button
                    key={i}
                    variant={i === pageNumber ? 'solid' : 'outline'}
                    colorScheme="purple"
                    onClick={() => handlePageChange(i)}
                    height='20px'
                    width='fit-content'
                    fontSize='12px'
                >
                    {i}
                </Button>
            );
        }

        return buttons;
    };

    return (
        <HStack width='100%' justifyContent='flex-start' gap='5px' padding='10px 0px'>
            <HStack gap='3px'>
                {renderPageButtons()}
            </HStack>
            <Text fontSize='12px'>
                Page {pageNumber} of {totalPages}
            </Text>
        </HStack>
    );
};