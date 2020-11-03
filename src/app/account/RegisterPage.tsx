import React from 'react';
import { Formiz, useForm } from '@formiz/core';
import {
  Box,
  Button,
  Flex,
  Stack,
  useToast,
} from '@chakra-ui/core';
import { useCreateAccount } from '@/app/account/service';
import { FieldInput } from '@/components';
import { isEmail } from '@formiz/validations';
import { useNavigate } from 'react-router-dom';

export const RegisterPage = () => {
  const form = useForm({ subscribe: 'form' });
  const toast = useToast();
  const navigate = useNavigate();

  const [createUser, { isLoading }] = useCreateAccount({
    onSuccess: () => {
      toast({
        title: 'Register success',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      navigate('/login');
    },
    onError: () => {
      toast({
        title: 'Register failed',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    },
  });

  return (
    <Box p="4" maxW="20rem" m="auto">
      <Formiz autoForm onValidSubmit={createUser} connect={form}>
        <Stack spacing="4">
          <FieldInput
            name="login"
            label="Username"
            required="Username is required"
          />
          <FieldInput
            name="email"
            label="Email"
            validations={[
              {
                rule: isEmail(),
                message: 'Invalid email',
              }
            ]}
            required="Email is required"
          />
          <FieldInput
            name="password"
            type="password"
            label="Password"
            required="Password is required"
          />
          <Flex>
            <Button
              isLoading={isLoading}
              isDisabled={form.isSubmitted && !form.isValid}
              type="submit"
              colorScheme="brand"
              ml="auto"
            >
              Create Account
            </Button>
          </Flex>
        </Stack>
      </Formiz>
    </Box>
  );
};