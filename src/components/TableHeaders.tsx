import React from 'react';

type stringheader = {
	headerTitle: string;
}
export const LargeTableHeader: React.FC<stringheader> = ({ headerTitle }) => {
	return (
		<th className="large">{headerTitle}</th>
	);
};

export const SmallTableHeader: React.FC<stringheader> = ({ headerTitle }) => {
	return (
		<th className="small">{headerTitle}</th>
	);
};
export const MediumTableHeader: React.FC<stringheader> = ({ headerTitle }) => {
	return (
		<th className="medium">{headerTitle}</th>
	);
};
