import { React, useState } from 'react';
import { Form } from '../components/index';

export default function SignUp() {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');

  const isInvalid =
    password === '' ||
    address === '' ||
    emailAddress === '' ||
    name === '' ||
    nickname === '';

  const handleSignUp = (event) => {
    event.preventDefault();
    console.log('name', name, nickname, emailAddress, password, address);
  };
  // const [passwordConfirm, setPasswordConfirm] = useState
  return (
    <>
      <Form>
        <Form.Base method="POST" onSubmit={handleSignUp}>
          <Form.Title>Sign Up</Form.Title>
          <Form.Input
            placeholder="Name"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <Form.Input
            value={nickname}
            placeholder="Nickname"
            onChange={({ target }) => setNickname(target.value)}
          />
          <Form.Input
            value={password}
            placeholder="Password"
            type="password"
            onChange={({ target }) => setPassword(target.value)}
          />
          <Form.Input
            placeholder="Email Address"
            value={emailAddress}
            type="email"
            onChange={({ target }) => setEmailAddress(target.value)}
          />
          <Form.Input
            value={address}
            placeholder="Address"
            onChange={({ target }) => setAddress(target.value)}
          />
          <Form.Break />
          <Form.Button type="submit" data-submit-inputs="sign-up" disabled={isInvalid}>
            Sign Up
          </Form.Button>
        </Form.Base>
      </Form>
    </>
  );
}
