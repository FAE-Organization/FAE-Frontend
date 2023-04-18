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

export default function FilterSidebar() {

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
        salary: '',
        experience: '',
    })

    const [currentSelection, setCurrentSelection] = useState([])

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
    const [allChecked, setAllChecked] = useState(false)

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

    const [flag, setFlag] = useState(false)

    const handleChange = async (data) => {

        if (allChecked) {
            setAllChecked(false)
            data.subcategories = JSON.parse(localStorage.getItem('beforeAll'))
        }

        if (data.subcategories.length === 5 && !data.subcategories.includes('All')) {
            setFlag(true)
        }

        if (flag) {
            console.log('flag triggered')
            data.subcategories = [...data.subcategories.filter(item => item !== 'All')]
            setFlag(false)
        }

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

    console.log('all checked: ', allChecked)

    return (
        <Stack width='335px' border='1px solid' padding='20px'>
            <FormProvider {...methods}>
                <form>
                    <Stack gap='20px'>
                        <Stack>
                            <Controller
                                control={control}
                                name='category'
                                render={({ field: { onChange, value } }) => (
                                    <>
                                        <Text>
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
                                            <option value='broadcasting'>Broadcasting</option>
                                            <option value='Business Operations'>Business Operations</option>
                                            <option value='Communications & Marketing'>Communications & Marketing</option>
                                            <option value='Content Creation'>Content Creation</option>
                                            <option value='Performance'>Performance</option>
                                            <option value='Tournaments & Events'>Tournaments & Events</option>
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
                                        <Text>Subcategories</Text>
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
                                            <Checkbox
                                                value='All'
                                                onChange={(event) => {
                                                    if (event.currentTarget.checked) {
                                                        if (!allChecked) {
                                                            setCurrentSelection(['All', ...tempCheckboxData])
                                                            setAllChecked(true)
                                                        }
                                                    } else {
                                                        const previousData = localStorage.key('beforeAll') ?
                                                            JSON.parse(localStorage.getItem('beforeAll')) : []
                                                        setCurrentSelection(
                                                            previousData.length === tempCheckboxData.length ?
                                                                [] : previousData
                                                        )
                                                    }
                                                }}
                                            >
                                                All
                                            </Checkbox>
                                            {tempCheckboxData.map((entry, index) => (
                                                <Checkbox
                                                    key={index}
                                                    value={entry}
                                                    onChange={(event) => {
                                                        if (event.currentTarget.checked) {
                                                            if (currentSelection.length + 1 === tempCheckboxData.length) {
                                                                setCurrentSelection(['All', ...currentSelection, entry])
                                                            } else {
                                                                setCurrentSelection([...currentSelection, entry])
                                                            }
                                                            localStorage.setItem('beforeAll', JSON.stringify([...currentSelection, entry]))
                                                        } else {
                                                            setCurrentSelection(currentSelection.filter(
                                                                item => {
                                                                    return item !== entry && item !== 'All'
                                                                }
                                                            ))

                                                            localStorage.setItem('beforeAll', JSON.stringify(currentSelection.filter(
                                                                item => item !== entry && item !== 'All'
                                                            )))
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
                                        <Text>Game</Text>
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
                                        <Text>Location</Text>
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
                                        <Text>Subcategories</Text>
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
                                            <Checkbox value='onSite'>On-site</Checkbox>
                                            <Checkbox value='remote'>Remote</Checkbox>
                                            <Checkbox value='hybrid'>Hybrid</Checkbox>
                                            <Checkbox value='openToRelocation'>Open to relocation</Checkbox>
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
                                        <Text>Salary Expectation</Text>
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
                                        <Text>Experience Level</Text>
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
                                            <Checkbox value='entry'>Entry (0-1 years)</Checkbox>
                                            <Checkbox value='junior'>Junior (1-2 years)</Checkbox>
                                            <Checkbox value='intermediate'>Intermediate (2-5 years)</Checkbox>
                                            <Checkbox value='senior'>Senior (5+ years)</Checkbox>
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