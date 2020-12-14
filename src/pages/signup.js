import React from 'react';
import { Form } from '../components/index';

export default function SignUp() {
  return (
    <Form>
      <Form.Text>Name:</Form.Text>
      <Form.Input />
      <Form.Text>Nickname: </Form.Text>
      <Form.Input />
      <Form.Text>Email: </Form.Text>
      <Form.Input />
      <Form.Text>Address: </Form.Text>
      <Form.Input />
      <Form.Break />
      <Form.Button>Submit</Form.Button>
    </Form>
  );
}
