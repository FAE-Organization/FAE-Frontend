import { capitalizeFirstWord } from "@/lib/functions/capitalizeFirstWord";
import {
    Select,
    HStack,
    Stack,
    Text,
    CheckboxGroup,
    Checkbox,
    Input,
    useBreakpointValue,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalFooter,
    Button
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { getCachedCategories } from "@/lib/functions/getCachedCategories";
import { useRouter } from "next/router";
import {
    updateCategory,
    updateSubcategory,
    updateGame,
    updateLocation,
    updateSiteType,
    updateSalary,
    updateExperience,
    updatePageNumber,
} from "@/lib/redux/formSlice";
import { useSelector, useDispatch } from "react-redux";
import { setUser, setUsersByFilter } from "@/lib/redux/userSlice";
import { setSubcategories } from "@/lib/redux/filterSubcategorySlice";
import debounce from "@/lib/functions/debounce";
import { setIsUserCardLoading } from "@/lib/redux/loadingSlice";

export default function FilterSidebar({ filterProps: {
    categoryStates,
    isOpen,
    onClose,
} }) {

    const [currentCategory, setCurrentCategory] = categoryStates
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
                                setCurrentCategory={setCurrentCategory}
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
                        setCurrentCategory={setCurrentCategory}
                    />
                </Stack>
            )}
        </React.Fragment>
    )
}

function Form({
    currentCategory,
    setCurrentCategory,
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

    const staticSubcategory = useSelector((state) => state.filterSubcategoryDoNotChange.subcategories)
    const salaryExpectations = useSelector((state) => state.form.salary)

    useEffect(() => {
        const getUserCards = async () => {
            dispatch(setIsUserCardLoading(true))

            const data = await (await fetch(process.env.NODE_ENV == 'development' ?
                'http://localhost:3001/api/filter' : `${process.env.NEXT_PUBLIC_BACKEND_BASE_URI}/api/filter`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(fields)
            })).json()

            // const data = await (await fetch(
            //     'https://fae-backend.onrender.com/api/filter', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(fields)
            // }
            // )).json()

            dispatch(setUsersByFilter(JSON.parse(data.payload)))
            dispatch(setUser(JSON.parse(data.dataLength)))
            dispatch(setIsUserCardLoading(false))
        }
        getUserCards()

    }, [fields])

    const handleGameChange = (event) => {
        dispatch(setIsUserCardLoading(true))
        const value = event.target.value
        updateGameChange(value)
    }

    const updateGameChange = debounce((value) => {
        dispatch(updateGame(value))
    }, 800)


    const handleLocationChange = (event) => {
        dispatch(setIsUserCardLoading(true))
        const value = event.target.value
        updateLocationChange(value)
    }

    const updateLocationChange = debounce((value) => {
        dispatch(updateLocation(value))
    }, 800)



    const handleSalaryChange = (data) => {
        dispatch(setIsUserCardLoading(true))
        updateSalaryChange(data)
    }

    const updateSalaryChange = debounce((data) => {
        const value = {
            ...salaryExpectations,
            ...data
        }
        dispatch(updateSalary(value))
    }, 800)

    const allCategories = useSelector((state) => state.filterSubcategoryDoNotChange.categories)

    return (
        <form>
            <Stack gap='20px'>
                <Text className='filter-title'>
                    Category
                </Text>
                <Select
                    onChange={(event) => {
                        setCurrentCategory(event.target.value)
                        const getSubCategoryOnChange = async (event) => {
                            const data = await getCachedCategories(encodeURIComponent(event.target.value))
                            dispatch(updateCategory(event.target.value))
                            dispatch(updateSubcategory(data))
                            dispatch(setSubcategories(data))
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
                        onChange={(values) => {
                            if (values.length === 0) {
                                dispatch(updateSubcategory([...staticSubcategory].sort()))
                            } else {
                                dispatch(updateSubcategory([...values.sort()]))
                            }
                        }}
                        defaultValue={
                            fields.subcategories.length === staticSubcategory.length ? (
                                null
                            ) : (
                                fields.subcategories
                            )
                        }
                    >
                        {!staticSubcategory ? (
                            <div>Loading...</div>
                        ) : (
                            <>
                                {staticSubcategory.map((entry, index) => (
                                    <Checkbox
                                        key={index}
                                        value={entry}
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
                        onChange={handleGameChange}
                    />
                </Stack>
                <Stack>
                    <Text className='filter-title'>Location</Text>
                    <Input
                        placeholder='e.g. USA'
                        type='text'
                        onChange={handleLocationChange}
                    />
                </Stack>
                <Stack>
                    <Text className='filter-title'>Subcategories</Text>
                    <CheckboxGroup
                        onChange={(values) => {
                            if (values.length === 0) {
                                dispatch(updateSiteType([...tempSiteTypeData.map(entry => entry.toLowerCase()).sort()]))
                            } else {
                                dispatch(updateSiteType([...values.map(entry => entry.toLowerCase()).sort()]))
                            }
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
                                handleSalaryChange({
                                    currency: event.currentTarget.value
                                })
                            }}
                        >
                            <option value="usd">USD</option>
                            <option value="cad">CAD</option>
                            <option value="gbp">GBP</option>
                        </Select>
                        <Select
                            defaultChecked='hourly'
                            onChange={(event) => {
                                handleSalaryChange({
                                    compensationType: event.currentTarget.value
                                })
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
                                handleSalaryChange({
                                    min: event.target.value === "" ? -1 : +event.target.value
                                })
                            }}
                        />
                        <Input
                            placeholder="Max."
                            onChange={(event) => {
                                handleSalaryChange({
                                    max: event.target.value === "" ? -1 : +event.target.value
                                })
                            }}
                        />
                    </HStack>
                </Stack>
                <Stack>
                    <Text className='filter-title'>Experience Level</Text>
                    <CheckboxGroup
                        onChange={(values) => {
                            if (values.length === 0) {
                                dispatch(updateExperience(['1', '2', '3', '4']))
                            } else {
                                dispatch(updateExperience(((values) => {
                                    return values.map((entry) => {
                                        switch (entry) {
                                            case 'Entry (0-1 years)':
                                                return '1'
                                            case 'Junior (1-2 years)':
                                                return '2'
                                            case 'Intermediate (2-5 years)':
                                                return '3'
                                            case 'Senior (5+ years)':
                                                return '4'
                                            default: '1'
                                        }
                                    })
                                })(values)))
                            }
                        }}
                    >
                        {tempExperienceData.map((entry, index) => (
                            <Checkbox key={index} value={entry}>{entry}</Checkbox>
                        ))}
                    </CheckboxGroup>
                </Stack>
            </Stack>
        </form>
    )
}

// const data = await (await fetch(process.env.NODE_ENV == 'development' ?
//     'http://localhost:3001/api/filter' : `https://fae-backend.onrender.com/api/filter`, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(fields)
// })).json()
