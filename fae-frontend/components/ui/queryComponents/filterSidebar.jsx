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

export default function FilterSidebar({ filterProps: {
    states, categoryStates, allCategories, subcategoryStates, isLoading, isOpen, onClose
} }) {

    const [currentCategory, setCurrentCategory] = categoryStates
    const [types, setTypes] = subcategoryStates

    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.setItem('beforeAll', JSON.stringify([]));
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    const values = useMemo(() => ({
        subcategories: '',
        game: '',
        location: '',
        siteType: '',
        salary: {
            currency: 'usd',
            compensationType: 'hourly',
            min: '',
            max: ''
        },
        experience: '',
    }), []);

    const [currentSelection, setCurrentSelection] = states

    const toast = useToast()

    const methods = useForm({
        mode: 'onBlur',
        defaultValues: {
            ...values
        }
    })

    const { watch } = methods

    const subcategories = watch('subcategories')
    const game = watch('game')
    const location = watch('location')
    const siteType = watch('siteType')
    const salary = watch('salary')
    const experience = watch('experience')

    const [gameValue, setGameValue] = useState('')
    const [locationValue, setLocationValue] = useState('')
    const [minMax, setMinMax] = useState({ min: '', max: '' })


    const handleChange = useCallback(async (data) => {

        if (data) {
            toast({
                position: 'top',
                duration: 5000,
                isClosable: true,
                title: JSON.stringify({
                    category: (currentCategory == null ? 'Broadcasting' : currentCategory),
                    data
                })
            })
        } else {
            toast({
                position: 'top',
                status: 'error',
                duration: 3000,
                isClosable: true,
                title: 'Error: something went wrong'
            })
        }
    }, [currentCategory])

    // Delay user input for game input (aka debounce) so that
    // the backend is not overloaded by requests
    useEffect(() => {
        const timer = setTimeout(async () => {
            await handleChange({
                ...values,
                location: locationValue,
                game: gameValue,
                salary: {
                    ...salary,
                    min: minMax.min,
                    max: minMax.max
                }
            })
        }, 1000)

        return () => clearTimeout(timer)
    }, [gameValue, locationValue, minMax, handleChange, values])

    const isSmallScreen = useBreakpointValue({ base: true, md: false })

    return (
        <React.Fragment>
            {isSmallScreen ? (
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Freelancers in {currentCategory ? currentCategory : 'Broadcasting'}</ModalHeader>
                        <ModalCloseButton />
                        <Stack padding='25px' maxHeight='65vh' overflow='scroll'>
                            <Form
                                methods={methods}
                                currentCategory={currentCategory}
                                allCategories={allCategories}
                                currentSelection={currentSelection}
                                isLoading={isLoading}
                                types={types}
                                setCurrentCategory={setCurrentCategory}
                                setTypes={setTypes}
                                setCurrentSelection={setCurrentSelection}
                                handleChange={handleChange}
                                game={game}
                                siteType={siteType}
                                salary={salary}
                                experience={experience}
                                setGameValue={setGameValue}
                                setLocationValue={setLocationValue}
                                setMinMax={setMinMax}
                                location={location}
                                subcategories={subcategories}
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
                        methods={...methods}
                        currentCategory={currentCategory}
                        allCategories={allCategories}
                        currentSelection={currentSelection}
                        isLoading={isLoading}
                        types={types}
                        setCurrentCategory={setCurrentCategory}
                        setTypes={setTypes}
                        setCurrentSelection={setCurrentSelection}
                        handleChange={handleChange}
                        game={game}
                        siteType={siteType}
                        salary={salary}
                        experience={experience}
                        setGameValue={setGameValue}
                        setLocationValue={setLocationValue}
                        setMinMax={setMinMax}
                        location={location}
                        subcategories={subcategories}
                    />
                </Stack>
            )}
        </React.Fragment>
    )
}

function Form({
    methods,
    currentCategory,
    allCategories,
    currentSelection,
    isLoading,
    types,
    setCurrentCategory,
    setTypes,
    setCurrentSelection,
    handleChange,
    game,
    siteType,
    salary,
    experience,
    setGameValue,
    setLocationValue,
    setMinMax,
    location,
    subcategories
}) {

    const { control } = methods

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

    return (
        <FormProvider {...methods}>
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
                                setTypes(data)
                                setCurrentSelection([])
                            }
                            getSubCategoryOnChange(event)
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
                        <Controller
                            control={control}
                            name='subcategories'
                            render={() => (
                                <>
                                    <Text className='filter-title'>Subcategories</Text>
                                    <CheckboxGroup
                                        value={currentSelection}
                                        onChange={(values) => {
                                            handleChange({
                                                subcategories: values,
                                                game: game,
                                                location: location,
                                                siteType: siteType,
                                                salary: salary,
                                                experience: experience
                                            })
                                        }}
                                    >
                                        {isLoading ? (
                                            <div>Loading...</div>
                                        ) : (
                                            <>
                                                {types.map((entry, index) => (
                                                    <Checkbox
                                                        key={index}
                                                        value={entry}
                                                        onChange={(event) => {
                                                            if (event.currentTarget.checked) {
                                                                setCurrentSelection([...currentSelection, event.currentTarget.value].sort())
                                                            } else {
                                                                setCurrentSelection([...currentSelection.filter(item => {
                                                                    return item !== event.currentTarget.value
                                                                })].sort())
                                                            }
                                                        }}
                                                    >
                                                        {capitalizeFirstWord(entry)}
                                                    </Checkbox>
                                                ))}
                                            </>
                                        )}
                                    </CheckboxGroup>
                                </>
                            )}
                        />
                    </Stack>
                    <Stack>
                        <Controller
                            control={control}
                            name='game'
                            render={({ field: { onChange, value } }) => (
                                <>
                                    <Text className='filter-title'>Game</Text>
                                    <Input
                                        placeholder='e.g. VALORANT'
                                        type='text'
                                        value={value}
                                        onChange={(event) => {
                                            onChange(event.currentTarget.value)
                                            setGameValue(event.currentTarget.value)
                                        }}
                                    />
                                </>
                            )}
                        />
                    </Stack>
                    <Stack>
                        <Controller
                            control={control}
                            name='location'
                            render={({ field: { onChange, value } }) => (
                                <>
                                    <Text className='filter-title'>Location</Text>
                                    <Input
                                        placeholder='e.g. USA'
                                        type='text'
                                        value={value}
                                        onChange={(event) => {
                                            onChange(event.currentTarget.value)
                                            setLocationValue(event.currentTarget.value)
                                        }}
                                    />
                                </>
                            )}
                        />
                    </Stack>
                    <Stack>
                        <Controller
                            control={control}
                            name='siteType'
                            render={() => (
                                <>
                                    <Text className='filter-title'>Subcategories</Text>
                                    <CheckboxGroup
                                        onChange={(values) => {
                                            handleChange({
                                                subcategories: subcategories,
                                                game: game,
                                                location: location,
                                                siteType: values,
                                                salary: salary,
                                                experience: experience
                                            })
                                        }}
                                    >
                                        {tempSiteTypeData.map((entry, index) => (
                                            <Checkbox key={index} value={entry}>{entry}</Checkbox>
                                        ))}
                                    </CheckboxGroup>
                                </>
                            )}
                        />
                    </Stack>
                    <Stack>
                        <Controller
                            control={control}
                            name='salary'
                            render={({ field: { onChange, value } }) => (
                                <>
                                    <Text className='filter-title'>Salary Expectation</Text>
                                    <HStack>
                                        <Select
                                            defaultChecked='usd'
                                            value={value.currency}
                                            onChange={(event) => {
                                                onChange({ ...value, currency: event.currentTarget.value })
                                                handleChange({
                                                    subcategories: subcategories,
                                                    game: game,
                                                    location: location,
                                                    siteType: siteType,
                                                    salary: { ...value, currency: event.currentTarget.value },
                                                    experience: experience
                                                })
                                            }}
                                        >
                                            <option value="usd">USD</option>
                                            <option value="cad">CAD</option>
                                            <option value="gbp">GBP</option>
                                        </Select>
                                        <Select
                                            defaultChecked='hourly'
                                            value={value.compensationType}
                                            onChange={(event) => {
                                                onChange({ ...value, compensationType: event.currentTarget.value })
                                                handleChange({
                                                    subcategories: subcategories,
                                                    game: game,
                                                    location: location,
                                                    siteType: siteType,
                                                    salary: { ...value, compensationType: event.currentTarget.value },
                                                    experience: experience
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
                                            value={value.min}
                                            onChange={(event) => {
                                                onChange({ ...value, min: event.currentTarget.value })
                                                setMinMax({ min: event.target.value, max: minMax.max })

                                            }}
                                        />
                                        <Input
                                            placeholder="Max."
                                            value={value.max}
                                            onChange={(event) => {
                                                onChange({ ...value, max: event.currentTarget.value })
                                                setMinMax({ min: minMax.min, max: event.currentTarget.value })
                                            }}
                                        />
                                    </HStack>
                                </>

                            )}
                        />
                    </Stack>
                    <Stack>
                        <Controller
                            control={control}
                            name='experience'
                            render={() => (
                                <>
                                    <Text className='filter-title'>Experience Level</Text>
                                    <CheckboxGroup
                                        onChange={(values) => {
                                            handleChange({
                                                subcategories: subcategories,
                                                game: game,
                                                location: location,
                                                siteType: siteType,
                                                salary: salary,
                                                experience: values
                                            })
                                        }}
                                    >
                                        {tempExperienceData.map((entry, index) => (
                                            <Checkbox key={index} value={entry}>{entry}</Checkbox>
                                        ))}
                                    </CheckboxGroup>
                                </>
                            )}
                        />
                    </Stack>
                </Stack>
            </form>
        </FormProvider>
    )
}