// React Custom Hook

import { useState, useLayoutEffect } from "react";


export const useTheme = () => {
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');


	useLayoutEffect(() => {
		document.documentElement.setAttribute('theme', theme);
		localStorage.setItem('theme', theme);
	}, [theme]);

	return {
		theme,
		setTheme,
	}
}
