import { Stack, HStack, Input, Select, Button, FormControl, FormErrorMessage, useToast, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { useForm, FormProvider, Controller } from 'react-hook-form'

export default function SearchBar() {

    const [trigger, setTrigger] = useState(false)

    const tempData = [
        'Role',
        'Name',
        'Game'
    ]

    const methods = useForm({
        mode: 'onChange',
        defaultValues: {
            category: tempData[0],
            input: ''
        }
    })

    const onSubmit = (data) => {
        setTrigger(false)
        if (data) {
            toast({
                title: JSON.stringify(data),
                status: 'info',
                duration: 3000,
                position: 'top'
            })
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

    console.log(trigger)
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
                <HStack width='100%' spacing={0}>
                    <Stack flex={1}>
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
                        >
                            Search
                        </Button>
                    </Stack>
                </HStack>
            </form>
        </FormProvider>
    )
}