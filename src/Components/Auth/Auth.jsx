'use client';

import {
  Anchor,
  Button,
  Container,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import '../../styles/auth/auth.css';
import { validateEmail } from '@/src/Utils/Regex';

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

  const customerForm = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      mobileNumber: '',
      houseNo: null,
      streetName: '',
      city: '',
      state: '',
    },
    validateInputOnChange: true,
    validate: {
      firstName: value =>
        !value ? 'firstName is required.' : null,
      lastName: value =>
        !value ? 'lastName is required.' : null,
      email: value =>
        !validateEmail(value) ? 'Enter valid email' : null,
      mobileNumber: value =>
        value?.length != 10
          ? 'Enter valid mobileNumber'
          : null,
      houseNo: value =>
        !value ? 'House no. is required.' : null,
      streetName: value =>
        !value ? 'Street name is required.' : null,
      city: value => (!value ? 'City is required.' : null),

      state: value =>
        !value ? 'state is required.' : null,
    },
  });

  const handleSubmit = () => {};
  const handleCustomerSubmit = () => {};

  return (
    <>
      <div className="signup-container signup-container-animation">
        <div className="w-full flex  flex-col items-center gap-2">
          {props?.isCustomer ? (
            <Container my={40} style={{ width: '420px' }}>
              <Title
                ta="center"
                style={{ fontWeight: 900 }}
              >
                Let's know about you
              </Title>
              <Paper
                withBorder
                shadow="md"
                p={30}
                mt={30}
                radius="md"
              >
                <form
                  onSubmit={customerForm.onSubmit(
                    handleCustomerSubmit
                  )}
                >
                  <TextInput
                    label="First name"
                    placeholder="John"
                    mt={'xs'}
                    required
                    {...customerForm.getInputProps(
                      'firstName'
                    )}
                  />
                  <TextInput
                    label="First name"
                    placeholder="Doe"
                    mt={'xs'}
                    required
                    {...customerForm.getInputProps(
                      'lastName'
                    )}
                  />
                  <TextInput
                    label="Email"
                    placeholder="ap@gmail.com"
                    mt={'xs'}
                    required
                    {...customerForm.getInputProps('email')}
                  />
                  <TextInput
                    label="Mobile number"
                    placeholder="8837467387"
                    mt={'xs'}
                    required
                    {...customerForm.getInputProps(
                      'mobileNumber'
                    )}
                  />
                  <TextInput
                    label="House no"
                    placeholder="22"
                    mt={'xs'}
                    required
                    {...customerForm.getInputProps(
                      'houseNo'
                    )}
                  />
                  <TextInput
                    label="Street Name"
                    placeholder="Nayapalli"
                    mt={'xs'}
                    required
                    {...customerForm.getInputProps(
                      'streetName'
                    )}
                  />
                  <TextInput
                    label="City"
                    placeholder="bhubaneswar"
                    mt={'xs'}
                    required
                    {...customerForm.getInputProps('city')}
                  />
                  <TextInput
                    label="State"
                    placeholder="odisha"
                    mt={'xs'}
                    required
                    {...customerForm.getInputProps('state')}
                  />
                </form>
                <Button fullWidth mt="xl">
                  Get started
                </Button>
              </Paper>
            </Container>
          ) : (
            <Container my={40} style={{ width: '420px' }}>
              <Title
                ta="center"
                style={{ fontWeight: 900 }}
              >
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
          )}
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Auth;
