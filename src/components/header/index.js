import React from 'react';
import {Text, BackgroundImage, Logo} from './styles/header';

export default function Header({children, ...restProps}) {
	return (
		<BackgroundImage {...restProps}>
			<Text>
				De-Activision Games
			</Text>
			{children}
		</BackgroundImage>
	)
}

Header.Logo = function HeaderLogo({...restProps}) {
	return (
		<Logo {...restProps}/>
	)
}