import { Stack, FormControl, Input, FormErrorMessage, Button, HStack, Text, FormLabel, Select } from "@chakra-ui/react";
import { useEffect } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";

export default function Signup() {
    const defaultValues = {
        firstName: '',
        lastName: '',
        displayName: '',
        email: '',
        // birthday: '', for managing nsfw content?
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
                                control={control}
                                name='displayName'
                                rules={{
                                    validate: async (data) => {
                                        if (data.length === 0) return 'Please enter a display name'

                                        /**
                                         * await fetch(...db displayName endpoint)
                                         * Set to false right now, make call to db
                                         * to see if display name is already taken
                                         */
                                        const nameTaken = false
                                        if (nameTaken) return 'Name already taken'
                                        return true
                                    }
                                }}
                                render={({ field: { onChange, value }, formState: error }) => (
                                    <FormControl isInvalid={!!error}>
                                        <Input
                                            variant='flushed'
                                            placeholder='Display Name'
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
                                control={control}
                                name='email'
                                rules={{
                                    validate: async (data) => {
                                        if (data.length == 0) return 'Please provide an email'

                                        /**
                                         * Make call to db to check if email exists
                                         */
                                        const emailExists = false
                                        if (emailExists) return 'Email already exists, try loggin in'
                                    }
                                }}
                                render={({ field: { onChange, value }, formState: { error } }) => (
                                    <FormControl isInvalid={!!error}>
                                        <Input
                                            variant='flushed'
                                            placeholder='Email Address'
                                            value={value}
                                            onChange={onChange}
                                            type='email'
                                        />
                                        <FormErrorMessage>
                                            {error && (
                                                <Text>{error.message}</Text>
                                            )}
                                        </FormErrorMessage>
                                    </FormControl>
                                )}
                            />
                            <HStack>
                                <Controller
                                    control={control}
                                    name='password'
                                    render={({ field: { onChange, value }, formState: { error } }) => (
                                        <FormControl isInvalid={!!error}>
                                            <Input
                                                variant='flushed'
                                                placeholder='Password'
                                                value={value}
                                                onChange={onChange}
                                                type='password'
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
                                    control={control}
                                    name='confirm password'
                                    render={({ field: { onChange, value }, formState: { error } }) => (
                                        <FormControl isInvalid={!!error}>
                                            <Input
                                                variant='flushed'
                                                placeholder='Confirm Password'
                                                value={value}
                                                onChange={onChange}
                                                type='password'
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
                            <Controller
                                control={control}
                                name='region'
                                render={({ field: { onChange, value } }) => (
                                    <Select
                                        value={value}
                                        onChange={onChange}
                                    >
                                        <option value="AF">AF</option>
                                        <option value="AS">AS</option>
                                        <option value="AN">AN</option>
                                        <option value="EU">EU</option>
                                        <option value="NA">NA</option>
                                        <option value="OC">OC</option>
                                        <option value="SA">SA</option>
                                    </Select>
                                )}
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