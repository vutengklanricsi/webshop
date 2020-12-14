import { React, useState } from 'react';
import { Form } from '../components/index';

export default function SignIn() {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const isInvalid = password === '' || emailAddress === '';

  const handleSignUp = (event) => {
    event.preventDefault();
    console.log(emailAddress, password);
  };
  // const [passwordConfirm, setPasswordConfirm] = useState
  return (
    <>
      <Form>
        <Form.Base method="POST" onSubmit={handleSignUp}>
          <Form.Title>Sign In</Form.Title>
          <Form.Input
            placeholder="Email Address"
            value={emailAddress}
            type="email"
            onChange={({ target }) => setEmailAddress(target.value)}
          />
          <Form.Input
            value={password}
            placeholder="Password"
            type="password"
            onChange={({ target }) => setPassword(target.value)}
          />
          <Form.Break />
          <Form.Button
            type="submit"
            data-submit-inputs="sign-up"
            disabled={isInvalid}
          >
            Sign In
          </Form.Button>
        </Form.Base>
      </Form>
    </>
  );
}
