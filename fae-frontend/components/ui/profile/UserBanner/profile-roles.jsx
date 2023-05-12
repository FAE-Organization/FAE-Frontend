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
    PopoverHeader,
    PopoverBody,
    GridItem,
    Checkbox, 
    Heading
} from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons';
import { TEST_PROFILE_RESPONSE_DATA, ROLES_DATA } from '@/components/ui/profile/TEST_DATA';

const { roles: test_roles } = TEST_PROFILE_RESPONSE_DATA[0]; 
const roles = ROLES_DATA;

// Render user-selected Role tags & popover toggle
export default function ProfileRoles({ editable }) {
    const [selectedRoles, setSelectedRoles] = useState(test_roles);
    const [tempSelectedRoles, setTempSelectedRoles] = useState(selectedRoles);

    const [isOpen, setIsOpen] = useState(false);


    // Toggle cancel button on popover
    function togglePopover() {
        setTempSelectedRoles(selectedRoles);
        setIsOpen(!isOpen);
    }

    function handleDone() {
        setSelectedRoles(tempSelectedRoles);
        setIsOpen(false);
    }
    
    // Renders checkbox items based on input array
    // If checkbox item value matches selected role(s), renders checked box.
    function RoleCheckboxes({ items }) {
        return items.map((item, i) => {
            if (tempSelectedRoles.includes(item)) {
                return (
                    <Checkbox
                        key={i}
                        value={item}
                        onChange={handleRoleSelect}
                        isChecked={true}>
                        {item}
                    </Checkbox>
                );
            } else {
                return (
                    <Checkbox
                        key={i}
                        value={item}
                        onChange={handleRoleSelect} >
                        {item}
                    </Checkbox>
                );
            }
        });
    };

    //Groups user roles by category
    function RoleCheckboxGroup({ roles }) {
        return (
            roles.map(({ heading, options }) => (
                <Stack key={heading} spacing={3} >
                    <Heading size="md" pt={5} textTransform={'capitalize'}>
                        {heading}
                    </Heading>
                    <RoleCheckboxes items={options} />
                </Stack>
            ))
        );
    }

    // Organizes checkboxes into even columns
    function RoleCheckboxColumns({ roles }) {
        const halfLength = Math.ceil(roles.length / 2);

        const leftColumn = roles.slice(0, halfLength);
        const rightColumn = roles.slice(halfLength);

        return (
            <Grid templateColumns="repeat(2, 1fr)" gap={10} px={4}>
                <GridItem>
                    <RoleCheckboxGroup roles={leftColumn} />
                </GridItem>
                <GridItem>
                    <RoleCheckboxGroup roles={rightColumn} />
                </GridItem>
            </Grid>
        );
    }

      // Updated selected roles array with user selection
      function handleRoleSelect(event) {
        const { value } = event.target;
        if (tempSelectedRoles.includes(value)) {
            setTempSelectedRoles(tempSelectedRoles.filter(item => item !== value));
        } else {
            setTempSelectedRoles([...tempSelectedRoles, value]);
        }
    }

    return (
        <Box>
            <Heading as="h2" fontSize="xl" mb={4}>Roles</Heading>
            <Stack direction={'row'} spacing={2} mb={4}>
                {selectedRoles.map((role) => (
                    <Tag
                        key={role}
                        colorScheme={'blue'}
                        borderRadius="full"
                        size="lg"
                        variant="solid"
                        checked>
                        {role}
                    </Tag>
                ))}
                {editable && (
                    <Popover
                        isOpen={isOpen}
                        onClose={togglePopover}>
                        <PopoverTrigger>
                            <Button
                                onClick={togglePopover}
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
                        <PopoverContent minW={700}>
                            <PopoverHeader>
                                <Stack direction='row' justify={'space-between'} px={3} py={1} align={'center'}>
                                    <Button
                                        size='sm'
                                        colorScheme={'purple'}
                                        variant={'outline'}
                                        onClick={togglePopover}>Cancel</Button>
                                    <Text as={'h2'} px={5} fontWeight={'bold'}>Edit Roles</Text>
                                    <Button
                                        size='sm'
                                        colorScheme={'purple'}
                                        variant={'solid'}
                                        onClick={handleDone}>
                                        Done
                                    </Button>
                                </Stack>
                            </PopoverHeader>
                            <PopoverBody>
                                <Stack>
                                    <RoleCheckboxColumns roles={roles} />
                                </Stack>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                )}
            </Stack>
        </Box>
    );
}
