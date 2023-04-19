import {
    Select,
    HStack,
    Stack,
    Text,
    CheckboxGroup,
    Checkbox,
    Input,
    useToast
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useForm, FormProvider, Controller } from 'react-hook-form'

export default function FilterSidebar({ states }) {

    /**
     * Temporary data
     * 
     */

    const tempCheckboxData = [
        'Caster',
        'Host',
        'Observer',
        'Replay Operator',
        'Technical Directory'
    ]

    const tempDropdownData = [
        'Broadcasting',
        'Business Operations',
        'Communications & Marketing',
        'Content Creation',
        'Perforamnce',
        'Tournament & events'
    ]

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

    /**
     * 
     * 
     */

    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.setItem('beforeAll', JSON.stringify([]));
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    const [values, setValues] = useState({
        category: 'broadcasting',
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
    })

    const [currentSelection, setCurrentSelection] = states

    const toast = useToast()

    const methods = useForm({
        mode: 'onBlur',
        defaultValues: {
            ...values
        }
    })

    const { watch, control } = methods

    const category = watch('category')
    const subcategories = watch('subcategories')
    const game = watch('game')
    const location = watch('location')
    const siteType = watch('siteType')
    const salary = watch('salary')
    const experience = watch('experience')

    const [gameValue, setGameValue] = useState('')
    const [locationValue, setLocationValue] = useState('')

    // Delay user input for game input (aka debounce) so that
    // the backend is not overloaded by requests

    useEffect(() => {
        const timer = setTimeout(async () => {
            await handleChange({
                ...values,
                game: gameValue
            })
        }, 1000)

        return () => clearTimeout(timer)
    }, [gameValue])

    //
    //

    useEffect(() => {
        const timer = setTimeout(async () => {
            await handleChange({
                ...values,
                location: locationValue
            })
        }, 1000)

        return () => clearTimeout(timer)
    }, [locationValue])

    const handleChange = async (data) => {

        console.log('data: ', data.subcategories)
        setValues((previousValues) => ({
            ...previousValues,
            ...data,
        }))

        if (data) {
            toast({
                position: 'top',
                duration: 10000,
                isClosable: true,
                title: JSON.stringify(data)
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
    }

    return (
        <Stack
            width='335px'
            border='1px solid #A6A6A6'
            padding='20px'
            borderRadius='10px'
        >
            <FormProvider {...methods}>
                <form>
                    <Stack gap='20px'>
                        <Stack>
                            <Controller
                                control={control}
                                name='category'
                                render={({ field: { onChange, value } }) => (
                                    <>
                                        <Text className='filter-title'>
                                            Category
                                        </Text>
                                        <Select
                                            defaultChecked='broadcasting'
                                            onChange={(event) => {
                                                onChange(event.target.value)
                                                handleChange({
                                                    category: event.target.value,
                                                    subcategories: subcategories,
                                                    game: game,
                                                    location: location,
                                                    siteType: siteType,
                                                    salary: salary,
                                                    experience: experience
                                                })
                                            }}
                                            value={value}
                                        >
                                            {tempDropdownData.map((entry, index) => (
                                                <option key={index} value={entry}>{entry}</option>
                                            ))}
                                        </Select>
                                    </>
                                )}
                            />
                        </Stack>
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
                                                    category: category,
                                                    subcategories: values,
                                                    game: game,
                                                    location: location,
                                                    siteType: siteType,
                                                    salary: salary,
                                                    experience: experience
                                                })
                                            }}
                                        >
                                            {tempCheckboxData.map((entry, index) => (
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
                                                    {entry}
                                                </Checkbox>
                                            ))}
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
                                                    category: category,
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
                                                        category: category,
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
                                                        category: category,
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
                                                    handleChange({
                                                        category: category,
                                                        subcategories: subcategories,
                                                        game: game,
                                                        location: location,
                                                        siteType: siteType,
                                                        salary: { ...value, min: event.currentTarget.value },
                                                        experience: experience
                                                    })

                                                }}
                                            />
                                            <Input
                                                placeholder="Max."
                                                value={value.max}
                                                onChange={(event) => {
                                                    onChange({ ...value, max: event.currentTarget.value })
                                                    handleChange({
                                                        category: category,
                                                        subcategories: subcategories,
                                                        game: game,
                                                        location: location,
                                                        siteType: siteType,
                                                        salary: { ...value, max: event.currentTarget.value },
                                                        experience: experience
                                                    })
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
                                                    category: category,
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
        </Stack >
    )
}