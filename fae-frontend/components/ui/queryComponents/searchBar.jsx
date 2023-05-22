import { setUser } from '@/lib/redux/userSlice'
import { Stack, HStack, Input, Select, Button, FormControl, FormErrorMessage, useToast, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { useForm, FormProvider, Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

export default function SearchBar() {

    const [trigger, setTrigger] = useState(false)
    const dispatch = useDispatch()
    const userData = useSelector((state) => state.user.users)

    const tempData = [
        'Role',
        'Name',
        'Tags'
    ]

    const methods = useForm({
        mode: 'onChange',
        defaultValues: {
            category: tempData[0],
            input: ''
        }
    })

    const onSubmit = async (data) => {
        setTrigger(false)
        if (data) {
            const result = await (await fetch(process.env.NODE_ENV == 'development' ? (
                `http://localhost:3001/api/filter/search?category=${data.category.toLowerCase()}&value=${data.input}`
            ) : (
                `${process.env.NEXT_PUBLIC_BACKEND_BASE_URI}/api/filtersearch?category=${data.category.toLowerCase()}&value=${data.input}`
            ))).json()
            console.log(result)
            // WIP
            // Also add a badge below the search so users can manage search filters
            // dispatch(setUser(userData.filter(entry => {
            //     if (data.category === 'role') {
            //         return entry.roles.some(result.payload)
            //     } else if (data.category === 'name') {
            //         return entry.name.includes(result.payload)
            //     } else {
            //         return entry.tags.some(result.payload)
            //     }
            // })))
        } else {
            toast({
                title: 'Something went wrong',
                status: 'error',
                duration: 3000,
                position: 'top'
            })
        }
    }

    const toast = useToast()

    const { handleSubmit, control } = methods
    return (
        <FormProvider {...methods}>
            <form
                style={{ width: '100%', padding: '15px 0px' }}
                onSubmit={(event) => {
                    handleSubmit(onSubmit)(event)
                }}
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        setTrigger(true)
                        handleSubmit(onSubmit)(event)
                    }
                }}
            >
                <HStack width='100%' spacing={0}>
                    <Stack flex={{ base: 3, md: 1 }}>
                        <Controller
                            control={control}
                            name='category'
                            defaultValue={tempData[0]}
                            render={({ field }) => (
                                <Select
                                    borderTopRightRadius='none'
                                    borderBottomRightRadius='none'
                                    {...field}
                                    onChange={field.onChange}
                                    value={field.value}
                                >
                                    {tempData.map((entry, index) => (
                                        <option value={entry} key={index}>{entry}</option>
                                    ))}
                                </Select>
                            )}
                        />
                    </Stack>
                    <Stack flex={6}>
                        <Controller
                            control={control}
                            name='input'
                            rules={{
                                validate: (data) => {
                                    if (trigger && data.length <= 0) {
                                        return 'Type something first'
                                    }
                                    return true
                                }
                            }}
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <FormControl isInvalid={!!error} position='relative'>
                                    <Input
                                        placeholder='e.g. Color Caster'
                                        borderRadius='none'
                                        onChange={(event) => {
                                            onChange(event)
                                            setTrigger(false)
                                        }}
                                        value={value}
                                        type='text'
                                    />
                                    <FormErrorMessage position='absolute'>
                                        {error && (
                                            <Text>{error.message}</Text>
                                        )}
                                    </FormErrorMessage>
                                </FormControl>
                            )}
                        />
                    </Stack>
                    <Stack flex={1}>
                        <Button
                            borderTopLeftRadius='none'
                            borderBottomLeftRadius='none'
                            type='submit'
                            onClick={() => { setTrigger(true) }}
                            backgroundColor='#6742CE'
                            color='#FFF'
                            fontSize={{ base: '12px', md: '14px', lg: '16px' }}
                        >
                            Search
                        </Button>
                    </Stack>
                </HStack>
            </form>
        </FormProvider>
    )
}