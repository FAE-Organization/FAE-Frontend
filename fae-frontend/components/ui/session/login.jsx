import { Stack, FormControl, Input, FormErrorMessage, Button, HStack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";

export default function Login() {
    const defaultValues = {
        firstName: '',
        lastName: '',
        dispalyName: '',
        birthday: '',
        password: '',
        confirmPassword: '',
        region: 'NA'
    }
    const methods = useForm({
        mode: 'onSubmit',
        defaultValues: {
            ...defaultValues
        }
    })

    const { handleSubmit, reset, control, formState: { isSubmitSuccessful } } = methods

    useEffect(() => {
        reset({
            ...defaultValues
        }, {
            keepIsValid: true
        })
    }, [isSubmitSuccessful, reset])

    const onSubmit = () => {
        console.log('Form submit successful')
    }

    return (
        <Stack width='100%' alignItems='center'>
            <Stack width={{ base: '80%', md: '75%', lg: '50%' }}>
                <FormProvider {...methods}>
                    <form
                        onSubmit={(event) => {
                            handleSubmit(onSubmit)(event)
                        }}

                        onKeyDown={(event) => {
                            if (event.key == 'Enter') {
                                handleSubmit(onSubmit)(event)
                            }
                        }}
                    >
                        <HStack>
                            <Controller
                                name='firstName'
                                control={control}
                                rules={{
                                    validate: (data) => {
                                        if (data.length === 0) return 'Please enter a first name'
                                        return true
                                    }
                                }}
                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                    <FormControl isInvalid={!!error}>
                                        <Input
                                            variant='flushed'
                                            placeholder='First name'
                                            value={value}
                                            onChange={onChange}
                                        />
                                        <FormErrorMessage>
                                            {error && (
                                                <Text>{error.message}</Text>
                                            )}
                                        </FormErrorMessage>
                                    </FormControl>
                                )}
                            />
                            <Controller
                                name='lastName'
                                control={control}
                                rules={{
                                    validate: (data) => {
                                        if (data.length === 0) return 'Please enter a last name'
                                        return true
                                    }
                                }}
                                render={({ field: { onChange, value }, formState: { error } }) => (
                                    <FormControl isINvalid={!!error}>
                                        <Input
                                            variant='flushed'
                                            placeholder='Last Name'
                                            value={value}
                                            onChange={onChange}
                                        />
                                        <FormErrorMessage>
                                            {error && (
                                                <Text>{error.message}</Text>
                                            )}
                                        </FormErrorMessage>
                                    </FormControl>
                                )}
                            />
                        </HStack>
                        <Stack>
                            <Controller

                            />
                        </Stack>
                        <Button type='submit'>
                            Log in
                        </Button>
                    </form>
                </FormProvider>
            </Stack>
        </Stack>
    )
}