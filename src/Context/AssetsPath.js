
import React from 'react';

export const AssetsPathContext = React.createContext();

export const AssetsPath = (props) => {
	const path = process.env.PUBLIC_URL + "assets";

	return (
		<AssetsPathContext.Provider value={path}>
			{props.children}
		</AssetsPathContext.Provider>
	);
};
