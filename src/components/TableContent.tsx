import React from 'react';

type stringheader = {
	content: string|number;
}

export const LargeContent: React.FC<stringheader> = ({ content }) => {
	return (
		<td className="large">{content}</td>
	);
};
export const SmallContent: React.FC<stringheader> = ({ content }) => {
	return (
		<td className="small">{content}</td>
	);
};
export const MediumContent: React.FC<stringheader> = ({ content }) => {
	return (
		<td className="medium">{content}</td>
	);
};
