import { capitalizeFirstWord } from "@/lib/functions/capitalizeFirstWord";
import {
    Select,
    HStack,
    Stack,
    Text,
    CheckboxGroup,
    Checkbox,
    Input,
    useToast,
    useBreakpointValue,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalFooter,
    Button
} from "@chakra-ui/react";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useForm, FormProvider, Controller } from 'react-hook-form'
import { getCachedCategories } from "@/lib/functions/getCachedCategories";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import {
    updateCategory,
    updateSubcategory,
    updateGame,
    updateLocation,
    updateSiteType,
    updateSalary,
    updateExperience,
} from "@/lib/redux/formSlice";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "@/lib/redux/userSlice";

export default function FilterSidebar({ filterProps: {
    states,
    categoryStates,
    allCategories,
    isLoading,
    isOpen,
    onClose,
} }) {

    const [currentCategory, setCurrentCategory] = categoryStates


    const [currentSelection, setCurrentSelection] = states

    const isSmallScreen = useBreakpointValue({ base: true, md: false })

    return (
        <React.Fragment>
            {isSmallScreen ? (
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Freelancers in {currentCategory ? decodeURIComponent(currentCategory) : 'Broadcasting'}</ModalHeader>
                        <ModalCloseButton />
                        <Stack padding='25px' maxHeight='65vh' overflow='scroll'>
                            <Form
                                currentCategory={currentCategory}
                                allCategories={allCategories}
                                currentSelection={currentSelection}
                                isLoading={isLoading}
                                setCurrentCategory={setCurrentCategory}
                                setCurrentSelection={setCurrentSelection}
                            />
                        </Stack>
                        <ModalFooter>
                            <Button backgroundColor='#6742CE' color='#FFF' onClick={onClose}>
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            ) : (
                <Stack
                    width='335px'
                    border='1px solid #A6A6A6'
                    padding='20px'
                    borderRadius='10px'
                    display={{ base: 'none', md: 'flex' }}
                >
                    <Form
                        currentCategory={currentCategory}
                        allCategories={allCategories}
                        currentSelection={currentSelection}
                        isLoading={isLoading}
                        setCurrentCategory={setCurrentCategory}
                        setCurrentSelection={setCurrentSelection}
                    />
                </Stack>
            )}
        </React.Fragment>
    )
}

function Form({
    currentCategory,
    allCategories,
    currentSelection,
    isLoading,
    setCurrentCategory,
    setCurrentSelection,
}) {

    const tempSiteTypeData = [
        'On-Site',
        'Remote',
        'Hybrid',
        'Open to Relocation'
    ]

    const tempExperienceData = [
        'Entry (0-1 years)',
        'Junior (1-2 years)',
        'Intermediate (2-5 years)',
        'Senior (5+ years)'
    ]

    const dispatch = useDispatch()


    const router = useRouter()
    const fields = useSelector((state) => {
        return state.form
    })
    const userData = useSelector((state) => state.user)
    useEffect(() => {

        const getUserCards = async () => {
            const data = await (await fetch('http://localhost:3001/api/filter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(fields)
            })).json()
            dispatch(setUser(JSON.parse(data.payload)))
        }
        getUserCards()
        console.log('userData: ', userData)

    }, [fields, dispatch])

    const subcategory = useSelector((state) => state.form.subcategories)

    return (
        <form
        >
            <Stack gap='20px'>
                <Text className='filter-title'>
                    Category
                </Text>
                <Select
                    onChange={(event) => {
                        setCurrentCategory(event.target.value)
                        const getSubCategoryOnChange = async (event) => {
                            const data = await getCachedCategories(encodeURIComponent(event.target.value))
                            setCurrentSelection([])
                            dispatch(updateCategory(event.target.value))
                            dispatch(updateSubcategory(data))
                        }
                        getSubCategoryOnChange(event)
                        router.push({
                            query: {
                                category: encodeURIComponent(event.target.value)
                            }
                        })
                    }}
                    value={currentCategory}
                >
                    {allCategories.map((entry, index) => (
                        <option
                            key={index}
                            value={entry}
                        >
                            {entry}
                        </option>
                    ))}
                </Select>
                <Stack>
                    <Text className='filter-title'>Subcategories</Text>
                    <CheckboxGroup
                        value={currentSelection}
                    >
                        {!subcategory ? (
                            <div>Loading...</div>
                        ) : (
                            <>
                                {subcategory.map((entry, index) => (
                                    <Checkbox
                                        key={index}
                                        value={entry}
                                        onChange={(event) => {
                                            if (event.currentTarget.checked) {
                                                const result = [...currentSelection, event.currentTarget.value].sort()
                                                setCurrentSelection(result)
                                                dispatch(updateSubcategory(result))
                                            } else {
                                                const result = [...currentSelection.filter(item => {
                                                    return item !== event.currentTarget.value
                                                })].sort()
                                                setCurrentSelection(result)
                                                dispatch(updateSubcategory(result))
                                            }
                                        }}
                                    >
                                        {capitalizeFirstWord(entry)}
                                    </Checkbox>
                                ))}
                            </>
                        )}
                    </CheckboxGroup>
                </Stack>
                <Stack>
                    <Text className='filter-title'>Game</Text>
                    <Input
                        placeholder='e.g. VALORANT'
                        type='text'
                        onChange={(event) => {
                        }}
                    />
                </Stack>
                <Stack>
                    <Text className='filter-title'>Location</Text>
                    <Input
                        placeholder='e.g. USA'
                        type='text'
                        onChange={(event) => {
                        }}
                    />
                </Stack>
                <Stack>
                    <Text className='filter-title'>Subcategories</Text>
                    <CheckboxGroup
                        onChange={(values) => {
                        }}
                    >
                        {tempSiteTypeData.map((entry, index) => (
                            <Checkbox key={index} value={entry.toLowerCase()}>{entry}</Checkbox>
                        ))}
                    </CheckboxGroup>
                </Stack>
                <Stack>
                    <Text className='filter-title'>Salary Expectation</Text>
                    <HStack>
                        <Select
                            defaultChecked='usd'
                            onChange={(event) => {
                            }}
                        >
                            <option value="usd">USD</option>
                            <option value="cad">CAD</option>
                            <option value="gbp">GBP</option>
                        </Select>
                        <Select
                            defaultChecked='hourly'
                            onChange={(event) => {
                            }}
                        >
                            <option value="hourly">Hourly</option>
                            <option value="salary">Salary</option>
                            <option value="milestone">Milestone</option>
                        </Select>
                    </HStack>
                    <HStack>
                        <Input
                            placeholder="Min."
                            onChange={(event) => {
                            }}
                        />
                        <Input
                            placeholder="Max."
                            onChange={(event) => {
                            }}
                        />
                    </HStack>
                </Stack>
                <Stack>
                    <Text className='filter-title'>Experience Level</Text>
                    <CheckboxGroup
                    >
                        {tempExperienceData.map((entry, index) => (
                            <Checkbox key={index} value={`${index}`}>{entry}</Checkbox>
                        ))}
                    </CheckboxGroup>
                </Stack>
            </Stack>
        </form>
    )
}