import React from 'react'
import { Frame } from "./styles/slider"

export default function Slider({ children, ...restProps}) {
    return (
        <Frame {...restProps}>
            {children}
        </Frame>
    )
}
