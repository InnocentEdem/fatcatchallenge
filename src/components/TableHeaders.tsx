import React from 'react';
import { nanoid } from 'nanoid';

type stringheader = {
	headerTitle: string;
}
export const LargeTableHeader: React.FC<stringheader> = ({ headerTitle }) => {
	return (
		<th key={nanoid()} className="large">{headerTitle}</th>
	);
};

export const SmallTableHeader: React.FC<stringheader> = ({ headerTitle }) => {
	return (
		<th key={nanoid()} className="small">{headerTitle}</th>
	);
};
export const MediumTableHeader: React.FC<stringheader> = ({ headerTitle }) => {
	return (
		<th key={nanoid()} className="medium">{headerTitle}</th>
	);
};
