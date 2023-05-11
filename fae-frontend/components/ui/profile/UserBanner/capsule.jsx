import { Tag, TagLabel } from "@chakra-ui/react";

export default function Capsule({ color, capName }) {
    return (
        <Tag
            variant='outline'
            borderRadius='16px'
            px='12px'
            py='2px'
            mx='2px'
            my='3px'
            colorScheme={ color }
            bgColor= { color }
            opacity={0.7}
        >
            <TagLabel color='black' fontSize='15px'>
                {capName}
            </TagLabel>
        </Tag>
    )
}

import React, { useState } from "react";
import {
    Button,
    Grid,
    Tag,
    Box,
    Text,
    Stack,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    PopoverCloseButton,
    PopoverHeader,
    PopoverBody
} from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons';
import { Checkbox, CheckboxGroup, Heading } from "@chakra-ui/react";

export default function ProfileRoles({ roles, editable }) {
    const [selectedRoles, setSelectedRoles] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    function togglePopover() {
        setIsOpen(!isOpen);
    }

    const handleRoleSelect = (role) => {
        if (selectedRoles.includes(role)) {
            setSelectedRoles(selectedRoles.filter((r) => r !== role));
        } else {
            setSelectedRoles([...selectedRoles, role]);
        }
    };

    //Groups user roles by category & 
    function RoleCheckboxGroup({ roles, handleRoleSelect }) {
        return (
            <>
                {roles.map(({ heading, options }) => (
                    <Stack key={heading}>
                        <Heading size="md" mb={2}>
                            {heading}
                        </Heading>
                        <CheckboxGroup colorScheme="green">
                            {options.map((option) => (
                                <Checkbox
                                    key={option}
                                    value={option}
                                    onChange={() => handleRoleSelect(option)}
                                    checked={selectedRoles.includes(option)} >
                                    {option}
                                </Checkbox>
                            ))}
                        </CheckboxGroup>
                    </Stack>
                ))}
            </>
        );
    }

    function RoleCheckboxColumns({ roles, handleRoleSelect }) {
        const halfLength = Math.ceil(roles.length / 2);

        const leftColumn = roles.slice(0, halfLength);
        const rightColumn = roles.slice(halfLength);

        return (
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                <Box>
                    <RoleCheckboxGroup roles={leftColumn} handleRoleSelect={handleRoleSelect} />
                </Box>
                <Box>
                    <RoleCheckboxGroup roles={rightColumn} handleRoleSelect={handleRoleSelect} />
                </Box>
            </Grid>
        );
    }

    return (
        <Box>
            <Heading as="h2" fontSize="xl" mb={4}>Roles</Heading>
            <Stack direction={'row'} spacing={2} mb={4}>
                {selectedRoles.map((role) => (
                    <Tag
                        key={role}
                        colorScheme={`blue`}
                        borderRadius="full"
                        size="md"
                        variant="solid"
                        checked={selectedRoles.includes(role)}>
                        {role}
                    </Tag>
                ))}
                {editable && (
                    <Popover
                        onOpen={() => setIsOpen(true)}
                        onClose={() => setIsOpen(false)}
                        placement="bottom-end"
                        trigger="click" >
                        <PopoverTrigger>
                            <Button
                                leftIcon={<AddIcon />}
                                size='sm'
                                borderColor="gray.300"
                                borderWidth="2px"
                                borderStyle="dashed"
                                padding="0.5rem 1rem"
                                borderRadius="2xl">
                                Add role
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent width="320px">
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverHeader>
                                <Stack direction='row' justify={'center'} align={'center'}>
                                    <Button
                                        size='sm'
                                        colorScheme={'purple'}
                                        variant={'outline'}
                                        onClick={togglePopover}>Cancel</Button>
                                    <Text as={'h2'} px={5} fontWeight={'bold'}>Edit pay rate</Text>
                                    <Button
                                        size='sm'
                                        colorScheme={'purple'}
                                        variant={'solid'}
                                        onClick={togglePopover}>
                                        Done
                                    </Button>
                                </Stack>
                            </PopoverHeader>
                            <PopoverBody>
                                <Stack spacing={4}>
                                    <RoleCheckboxColumns roles={roles} handleRoleSelect={handleRoleSelect} />
                                </Stack>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                )}
            </Stack>
        </Box>
    );
}