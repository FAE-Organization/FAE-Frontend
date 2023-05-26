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

        if (totalPages <= 10) {
            // Render all buttons from 1 to totalPages
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
        } else {
            buttons.push(
                <Button
                    key={1}
                    variant={1 === pageNumber ? 'solid' : 'outline'}
                    colorScheme="purple"
                    onClick={() => handlePageChange(1)}
                    height='20px'
                    width='fit-content'
                    fontSize='12px'
                >
                    {1}
                </Button>
            );
            if (pageNumber > 4) {
                buttons.push(<span key="ellipsis-prev">...</span>);
            }

            // Calculate the range of page numbers to display
            const startPage = Math.max(2, pageNumber - 2);
            const endPage = Math.min(pageNumber + 2, totalPages - 1);

            // Render page buttons within the range
            for (let i = startPage; i <= endPage; i++) {
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

            // Render "..." if necessary
            if (pageNumber < totalPages - 3) {
                buttons.push(<span key="ellipsis-next">...</span>);
            }

            // Render last page button
            buttons.push(
                <Button
                    key={totalPages}
                    variant={totalPages === pageNumber ? 'solid' : 'outline'}
                    colorScheme="purple"
                    onClick={() => handlePageChange(totalPages)}
                    height='20px'
                    width='fit-content'
                    fontSize='12px'
                >
                    {totalPages}
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