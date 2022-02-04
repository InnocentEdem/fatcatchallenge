import React, { useState } from 'react';
import moment from 'moment';

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
	const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
		setNewDetails(e.target.value);
	};
	return (
		<div>
			<div>
				{moment(param.substring(0, 13)).format('YYYY-MM-DD')}
			</div>
			<div className="input-group">
				<input placeholder="click to edit" type="date" name="registered" defaultValue={moment(param.substring(0, 13)).format('YYYY-MM-DD')} onChange={e => handleChange(e)} />
				<button type="submit" onClick={handleSave}>SAVE</button>
			</div>
		</div>
	);
};
export default DateInput;
