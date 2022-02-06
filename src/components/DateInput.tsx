import React, { useState, memo } from 'react';
import moment from 'moment';
import { nanoid } from 'nanoid';

type stringInput = {
	index: number;
	item: string;
	param: string;
	saveChange(index: number, item: string, newData: string|number): void;
}

const DateInput: React.FC<stringInput> = ({
	index, item, param, saveChange,
}) => {
	const [newDetails, setNewDetails] = useState<number|string>(param);
	const handleSave = () => {
		saveChange(index, item, newDetails);
	};
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewDetails(e.target.value);
	};
	return (
		<td key={nanoid()}>
			<div className="small">
				<input placeholder="click to edit" type="date" name="registered" defaultValue={moment(param.substring(0, 13)).format('YYYY-MM-DD')} onChange={e => handleChange(e)} />
				<button type="submit" onClick={handleSave}>SAVE</button>
			</div>
		</td>
	);
};
export default memo(DateInput);
