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

    const [values, setValues] = useState({
        category: 'broadcasting',
        subcategories: '',
        game: '',
        location: '',
        siteType: '',
        salary: '',
        experience: '',
    })

    const toast = useToast()

    const methods = useForm({
        mode: 'onBlur',
        defaultValues: {
            ...values
        }
    })

    const { watch, control, } = methods

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
        setValues((previousValues) => ({
            ...previousValues,
            ...data
        }))

        if (data) {
            toast({
                position: 'top',
                status: 'success',
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
                                            <Checkbox value='All'>All</Checkbox>
                                            <Checkbox value='Caster'>Caster</Checkbox>
                                            <Checkbox value='Host'>Host</Checkbox>
                                            <Checkbox value='Observer'>Observer</Checkbox>
                                            <Checkbox value='Replay Operator'>Replay Operator</Checkbox>
                                            <Checkbox value='Technical Directory'>Technical Directory</Checkbox>
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
                                render={({ fields: { onChange, value } }) => (
                                    <>
                                        <Text>Salary Expectation</Text>
                                        <HStack>
                                            <Select defaultChecked='usd'>
                                                <option value="usd">USD</option>
                                                <option value="cad">CAD</option>
                                                <option value="gbp">GBP</option>
                                            </Select>
                                            <Select>
                                                <option value="hourly">Hourly</option>
                                                <option value="salary">Salary</option>
                                                <option value="milestone">Milestone</option>
                                            </Select>
                                        </HStack>
                                        <HStack>
                                            <Input placeholder="Min." />
                                            <Input placeholder="Max." />
                                        </HStack>
                                    </>

                                )}
                            />
                        </Stack>
                        <Stack>
                            <Text>Experience Level</Text>
                            <CheckboxGroup>
                                <Checkbox>
                                    Entry (0-1 years)
                                </Checkbox>
                                <Checkbox>
                                    Junior (1-2 years)
                                </Checkbox>
                                <Checkbox>
                                    Intermediate (2-5 years)
                                </Checkbox>
                                <Checkbox>
                                    Senior (5+ß years)
                                </Checkbox>
                            </CheckboxGroup>
                        </Stack>
                    </Stack>
                </form>
            </FormProvider>
        </Stack >
    )
}