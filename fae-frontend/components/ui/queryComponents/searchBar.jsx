import { setBadgeName, setBadgeValue } from '@/lib/redux/activeBadgeSlice'
import { setUser, setUsersBySearch } from '@/lib/redux/userSlice'
import { Stack, HStack, Input, Select, Button, FormControl, FormErrorMessage, useToast, Text, Badge, IconButton } from '@chakra-ui/react'
import { useState } from 'react'
import { useForm, FormProvider, Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineClose } from 'react-icons/ai'

export default function SearchBar() {

    const [trigger, setTrigger] = useState(false)
    const dispatch = useDispatch()
    const userData = useSelector((state) => state.user.users)

    const tempData = [
        'Name',
        'Role',
        'Tags'
    ]

    const methods = useForm({
        mode: 'onChange',
        defaultValues: {
            category: tempData[0],
            input: ''
        }
    })

    const { handleSubmit, control, reset } = methods
    const [categoryIndex, setCategoryIndex] = useState(0)

    const badgeName = useSelector((state) => state.activeBadge.badgeName)
    const badgeValue = useSelector((state) => state.activeBadge.badgeValue)

    const onSubmit = async (data) => {
        setTrigger(false)
        if (data) {
            const result = await (await fetch(process.env.NODE_ENV == 'development' ? (
                `http://localhost:3001/api/filter/search?category=${data.category.toLowerCase()}&value=${data.input}`
            ) : (
                `${process.env.NEXT_PUBLIC_BACKEND_BASE_URI}/api/filtersearch?category=${data.category.toLowerCase()}&value=${data.input}`
            ))).json()

            // const result = await (await fetch(
            //     `https://fae-backend.onrender.com/api/filter/search?category=${data.category.toLowerCase()}&value=${data.input}`
            // )).json()

            dispatch(setUsersBySearch({
                data: Array.from(result.payload),
                initialLoad: false
            }))
            dispatch(setBadgeName(data.category))
            dispatch(setBadgeValue(data.input))
        } else {
            toast({
                title: 'Something went wrong',
                status: 'error',
                duration: 3000,
                position: 'top'
            })
        }

        reset({
            category: tempData[categoryIndex],
            input: ''
        })
    }

    const toast = useToast()

    return (
        <FormProvider {...methods}>
            <form
                style={{ width: '100%' }}
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
                <Stack>
                    <HStack width='100%' spacing={0}>
                        <Stack
                            flex={{ base: 3, sm: 2, md: 3, lg: 1, xl: 1 }}
                        >
                            <Controller
                                control={control}
                                name='category'
                                defaultValue={tempData[categoryIndex]}
                                render={({ field }) => (
                                    <Select
                                        height={{ base: '32px', md: '36px', lg: '40px' }}
                                        borderTopRightRadius='none'
                                        borderBottomRightRadius='none'
                                        {...field}
                                        onChange={(event) => {
                                            setCategoryIndex(tempData.indexOf(event.currentTarget.value))
                                            field.onChange(event)
                                        }}
                                        value={field.value}
                                        fontSize={{ base: '12px', md: '13px', lg: '14px', xl: '16px' }}
                                    >
                                        {tempData.map((entry, index) => (
                                            <option value={entry} key={index}>
                                                {entry}
                                            </option>
                                        ))}
                                    </Select>
                                )}
                            />
                        </Stack>
                        <Stack flex={{ base: 4, sm: 5, md: 7, lg: 4, xl: 6 }}>
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
                                            height={{ base: '32px', md: '36px', lg: '40px' }}
                                            placeholder='e.g. Color Caster'
                                            fontSize={{ base: '12px', md: '13px', lg: '14px', xl: '16px' }}
                                            borderRadius='none'
                                            onChange={(event) => {
                                                onChange(event)
                                                setTrigger(false)
                                            }}
                                            value={value}
                                            type='text'
                                        />
                                        <FormErrorMessage position='absolute' right='0'>
                                            {error && (
                                                <Text>{error.message}</Text>
                                            )}
                                        </FormErrorMessage>
                                    </FormControl>
                                )}
                            />
                        </Stack>
                        <Stack flex={{ base: 3, sm: 2, md: 3, lg: 1, xl: 1 }} height={{ base: '32px', md: '36px', lg: '40px' }}>
                            <Button
                                borderTopLeftRadius='none'
                                borderBottomLeftRadius='none'
                                type='submit'
                                onClick={() => { setTrigger(true) }}
                                backgroundColor='#6742CE'
                                color='#FFF'
                                fontSize={{ base: '12px', md: '13px', lg: '14px', xl: '16px' }}
                            >
                                Search
                            </Button>
                        </Stack>
                    </HStack>
                    <HStack width='275px'>
                        <HStack
                            padding='5px'
                            borderRadius='5px'
                            _hover={{
                                cursor: 'pointer',
                            }}
                            fontSize={{ base: '12px', md: '13px', lg: '14px' }}
                        >
                            <Badge border='1px solid #BBB' fontSize={{ base: '10px', md: '11px', lg: '12px' }}>
                                Current Filter
                            </Badge>
                            <Text>&gt;</Text>
                            {badgeName.length > 0 ? (
                                <HStack
                                    padding='3px 5px'
                                    borderRadius='5px'
                                    _hover={{
                                        backgroundColor: '#D8D8D8'
                                    }}
                                    onClick={() => {
                                        dispatch(setBadgeValue(''))
                                        dispatch(setBadgeName(''))
                                        dispatch(setUsersBySearch({
                                            data: [],
                                            initialLoad: true
                                        }))
                                    }}
                                >
                                    <Badge border='1px solid #BBB' fontSize={{ base: '10px', md: '11px', lg: '12px' }}>
                                        {badgeName}
                                    </Badge>
                                    {badgeValue.length > 0 && (
                                        <>
                                            <Text>&gt;</Text>
                                            <Badge border='1px solid #BBB' fontSize={{ base: '10px', md: '11px', lg: '12px' }}>
                                                {badgeValue}
                                            </Badge>
                                        </>
                                    )}
                                    <IconButton
                                        aria-label='Remove search filters.'
                                        icon={<AiOutlineClose size='12px' />}
                                        size='xs'
                                        backgroundColor='transparent'
                                        _hover={{
                                            backgroundColor: 'transparent'
                                        }}
                                    />
                                </HStack>
                            ) : (
                                <Text>None</Text>
                            )}
                        </HStack>
                    </HStack>
                </Stack>
            </form>
        </FormProvider>
    )
}