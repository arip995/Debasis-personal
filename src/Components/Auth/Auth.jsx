'use client';

import {
  Anchor,
  Button,
  Container,
  Paper,
  PasswordInput,
  TextInput,
  Title,
  Text,
} from '@mantine/core';
import { Toaster } from 'react-hot-toast';
import '../../styles/auth/auth.css';
import { useForm } from '@mantine/form';
import { useToggle } from '@mantine/hooks';
import { useState } from 'react';

const Auth = props => {
  const [isLogin, setIsLogin] = useState(false);
  const authForm = useForm({
    initialValues: {
      email: '',
      phoneNumber: '',
    },
    validateInputOnChange: true,
    validate: {
      username: value =>
        !value ? 'Username is required.' : null,
      password: value =>
        value.length < 5
          ? 'Password must be 5 characters.'
          : null,
    },
  });

  const handleSubmit = () => {};

  return (
    <>
      <div className="signup-container signup-container-animation">
        <div className="w-full flex  flex-col items-center gap-2">
          <Container my={40} style={{ width: '420px' }}>
            <Title ta="center" style={{ fontWeight: 900 }}>
              Welcome back!
            </Title>
            <Text size="sm" ta="center" mt={5}>
              {isLogin
                ? 'Do not have an account yet?'
                : 'Already have an account'}{' '}
              <Anchor
                size="sm"
                component="button"
                onClick={() => {
                  setIsLogin(prev => !prev);
                }}
              >
                {isLogin ? 'Create account' : 'Login'}
              </Anchor>
            </Text>
            <Paper
              withBorder
              shadow="md"
              p={30}
              mt={30}
              radius="md"
            >
              <form
                onSubmit={authForm.onSubmit(handleSubmit)}
              >
                <TextInput
                  label="Username"
                  placeholder="pandaop"
                  required
                  {...authForm.getInputProps('username')}
                />
                <PasswordInput
                  {...authForm.getInputProps('password')}
                  label="Password"
                  placeholder="Your password"
                  required
                  mt="md"
                />
              </form>
              <Button fullWidth mt="xl">
                Sign in
              </Button>
            </Paper>
          </Container>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Auth;
