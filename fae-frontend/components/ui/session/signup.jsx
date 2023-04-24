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
        region: 'Select Region'
    }
    const methods = useForm({
        mode: 'onSubmit',
        defaultValues: {
            ...defaultValues
        }
    })

    const { handleSubmit, reset, control, watch, formState: { isSubmitSuccessful } } = methods
    const password = watch('password')

    useEffect(() => {
        reset({
            ...defaultValues
        }, {
            keepIsValid: true
        })
    }, [isSubmitSuccessful, reset, defaultValues])

    const onSubmit = (data) => {
        console.log(JSON.stringify(data))
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
                        <HStack padding='10px'>
                            <Controller
                                name='firstName'
                                control={control}
                                rules={{
                                    validate: (data) => {
                                        if (data.length == 0) return 'Please enter a first name'
                                        return true
                                    }
                                }}
                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                    <FormControl isInvalid={!!error}>
                                        <Input
                                            id='firstName'
                                            variant='flushed'
                                            placeholder='First name'
                                            value={value}
                                            onChange={onChange}
                                        />
                                        <FormLabel htmlFor="firstName">First Name</FormLabel>
                                        <FormErrorMessage>
                                            <Text>{error ? error.message : ''}</Text>
                                        </FormErrorMessage>
                                    </FormControl>
                                )}
                            />
                            <Controller
                                name='lastName'
                                control={control}
                                rules={{
                                    validate: (data) => {
                                        if (data.length == 0) return 'Please enter a last name'
                                        return true
                                    }
                                }}
                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                    <FormControl isInvalid={!!error}>
                                        <Input
                                            id='lastName'
                                            variant='flushed'
                                            placeholder='Last Name'
                                            value={value}
                                            onChange={onChange}
                                        />
                                        <FormLabel htmlFor="lastName">Last Name</FormLabel>
                                        <FormErrorMessage>
                                            <Text>{error ? error.message : ''}</Text>
                                        </FormErrorMessage>
                                    </FormControl>
                                )}
                            />
                        </HStack>
                        <Stack padding='10px'>
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
                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                    <FormControl isInvalid={!!error}>
                                        <Input
                                            id='display'
                                            variant='flushed'
                                            placeholder='Display Name'
                                            value={value}
                                            onChange={onChange}
                                        />
                                        <FormLabel htmlFor="display">Display Name</FormLabel>
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
                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                    <FormControl isInvalid={!!error}>
                                        <Input
                                            id='email'
                                            variant='flushed'
                                            placeholder='Email Address'
                                            value={value}
                                            onChange={onChange}
                                            type='email'
                                        />
                                        <FormLabel htmlFor="email">Email Address</FormLabel>
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
                                    rules={{
                                        validate: (data) => {
                                            if (data.length < 8) {
                                                return "Password must be at least 8 characters long";
                                            }

                                            if (!/[A-Z]/.test(data)) {
                                                return "Password must contain at least one uppercase letter";
                                            }

                                            if (!/[0-9]/.test(data)) {
                                                return "Password must contain at least one numeric digit";
                                            }

                                            if (!/[!@#$%^&*]/.test(data)) {
                                                return "Password must contain at least one special character";
                                            }
                                        }
                                    }}
                                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                                        <FormControl isInvalid={!!error}>
                                            <Input
                                                id='password'
                                                variant='flushed'
                                                placeholder='Password'
                                                value={value}
                                                onChange={onChange}
                                                type='password'
                                            />
                                            <FormLabel htmlFor="password">Password</FormLabel>
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
                                    rules={{
                                        validate: (data) => {
                                            if (password !== data) {
                                                return 'Passwords do not match'
                                            }
                                            return true
                                        }
                                    }}
                                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                                        <FormControl isInvalid={!!error}>
                                            <Input
                                                id='confirmPassword'
                                                variant='flushed'
                                                placeholder='Confirm Password'
                                                value={value}
                                                onChange={onChange}
                                                type='password'
                                            />
                                            <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
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
                                rules={{
                                    validate: (data) => {
                                        if (data.length == 0) return 'Please select a region'
                                        return true
                                    }
                                }}
                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                    <>
                                        <Select
                                            value={value}
                                            onChange={onChange}
                                        >
                                            <option value="">Select Region</option>
                                            <option value="AF">AF</option>
                                            <option value="AS">AS</option>
                                            <option value="AN">AN</option>
                                            <option value="EU">EU</option>
                                            <option value="NA">NA</option>
                                            <option value="OC">OC</option>
                                            <option value="SA">SA</option>
                                        </Select>
                                        <FormErrorMessage>
                                            {error && (
                                                <Text>{error.message}</Text>
                                            )}
                                        </FormErrorMessage>
                                    </>
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