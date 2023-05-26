import { setBadgeName, setBadgeValue } from '@/lib/redux/activeBadgeSlice'
import { setUser, setUsersByFilter, setUsersBySearch } from '@/lib/redux/userSlice'
import { Stack, HStack, Input, Select, Button, FormControl, FormErrorMessage, useToast, Text, Badge, IconButton } from '@chakra-ui/react'
import { useState } from 'react'
import { useForm, FormProvider, Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineClose } from 'react-icons/ai'
import { setIsUserCardLoading } from '@/lib/redux/loadingSlice'

/**
 * 
 * TODO
 * 
 * 1. DONE Clear all filters when leaving the page: Filters persist but form resets when users leave and come back to the page 
 * 2. DONE Search filtering with tags does not work 
 * 3. DONE Search filtering does not update the pagination: Filtering for observers and producers and then searching for "Paul" leaves 3 pages
 * 4. DONE licking on directory does not respond to the user. Need some suspense animation
 * 5. DONE Current Search badge makes the cursor a pointer. No good.
 * 6. DONE Paginator needs to have ... in between to signify start and end of search and update accordingly. Include 6 max. ex 123...789 or 123456.
 * 7. DONE Paginator needs button ... eh whatever
 * 8. DONE Search bar Placeholder needs to change text as dropdown value changes.
 * 9. DONE Clicking on a user needs to take them to the user page located at search/user/profile. maybe do search/user/[...profile].jsx
 * 10. Modify the profile page so other users cannot be seen.
 * 11. Do not show current logged in users information in user cards.
 * 12. Send logged in tokens to backend.
 * 13. DONE Get the correct users information when navigating to search/user/[...profile].jsx
 * 14. Fix sign out dropdown position on larger screens
 * 15. Implement dark mode
 * 16. Fix backend search: currently it is using .skip()
 * 17. Fix search when using search bar. Search bar only returns current values in user cards instead of searching through entire database.
 * 18. Create colors for all tags
 * 19. Starting filter on second page generates page 2 of 1 instead of page 1 of 1.
 * 
 */


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

    const { handleSubmit, control, reset, watch } = methods
    const [categoryIndex, setCategoryIndex] = useState(0)

    const badgeName = useSelector((state) => state.activeBadge.badgeName)
    const badgeValue = useSelector((state) => state.activeBadge.badgeValue)

    const onSubmit = async (data) => {
        dispatch(setIsUserCardLoading(true))
        setTrigger(false)
        if (data) {
            const result = await (await fetch(process.env.NODE_ENV == 'development' ? (
                `http://localhost:3001/api/filter/search?category=${data.category.toLowerCase()}&value=${data.input.toLowerCase()}`
            ) : (
                `${process.env.NEXT_PUBLIC_BACKEND_BASE_URI}/api/filtersearch?category=${data.category.toLowerCase()}&value=${data.input.toLowerCase()}`
            ))).json()
            const result = await (await fetch(
                `https://fae-backend.onrender.com/api/filter/search?category=${data.category.toLowerCase()}&value=${data.input}`
            )).json()

            dispatch(setUsersBySearch({
                data: Array.from(result.payload),
                initialLoad: false
            }))
            dispatch(setBadgeName(data.category))
            dispatch(setBadgeValue(data.input))
            dispatch(setUser(JSON.parse(result.dataLength)))
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
        dispatch(setIsUserCardLoading(false))
    }

    const fields = useSelector((state) => {
        return state.form
    })

    const toast = useToast()

    const category = watch('category')
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
                                            placeholder={(() => {
                                                if (category.toLowerCase() === 'name') {
                                                    return 'e.g. Shroud'
                                                } else if (category.toLowerCase() === 'role') {
                                                    return 'e.g. Color Caster'
                                                } else {
                                                    return 'e.g. Collegiate'
                                                }
                                            })()}
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
                            fontSize={{ base: '12px', md: '13px', lg: '14px' }}
                        >
                            <Badge border='1px solid #BBB' fontSize={{ base: '10px', md: '11px', lg: '12px' }}>
                                Current Search
                            </Badge>
                            <Text>&gt;</Text>
                            {badgeName.length > 0 ? (
                                <HStack
                                    padding='3px 5px'
                                    borderRadius='5px'
                                    _hover={{
                                        backgroundColor: '#D8D8D8',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => {
                                        const handleClick = async () => {
                                            dispatch(setIsUserCardLoading(true))
                                            dispatch(setBadgeValue(''))
                                            dispatch(setBadgeName(''))
                                            dispatch(setUsersBySearch({
                                                data: [],
                                                initialLoad: true
                                            }))
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
                                        handleClick()
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