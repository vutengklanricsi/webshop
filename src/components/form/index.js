import React from 'react'
import {Button, Text, Title, Frame, Input} from './styles/form'

export default function Form({ children, ...restProps}) {
	return (
		<Frame {...restProps}>
			{children}
		</Frame>
	)
}

Form.Input = function FormInput ({ ...restProps}) {
	return (
		<Input {...restProps} />
	)
}

Form.Button = function FormButton ({children, ...restProps}) {
	return (
		<Button {...restProps}>
			{children}
		</Button>
	)
}

Form.Text = function FormText ({children, ...restProps}) {
	return (
		<Text {...restProps}>
			{children}
		</Text>
	)
}

Form.Title = function FormInput ({children, ...restProps}) {
	return (
		<Title {...restProps}>
			{children}
		</Title>
	)
}