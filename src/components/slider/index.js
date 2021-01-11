import React from 'react'
import { Frame, Text } from "./styles/slider"

export default function Slider({ children, ...restProps}) {
	return (
		<Frame {...restProps}>
			{children}
		</Frame>
	)
}

Slider.Text = function SliderText({children, ...restProps}) {
	return (
		<Text {...restProps}>
			{children}
		</Text>
	)
}