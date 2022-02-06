import React, { useState, memo } from 'react';
import { nanoid } from 'nanoid';

type stringInput = {
	index: number;
	param: string;
	item: string;
	saveChange(index: number, item: string, newData: string): void;
}

const TextInput: React.FC<stringInput> = ({
	index, item, param, saveChange,
}) => {
	const [newDetails, setNewDetails] = useState<string>(param);
	const handleSave = () => {
		saveChange(index, item, newDetails);
	};
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewDetails(e.target.value);
	};
	return (
		<td key={nanoid()}>
			{item !== '_id' &&
				(
					<div className="medium">
						<input placeholder="click to edit" type="text" value={newDetails} name="name" onChange={e => handleChange(e)} />
						<button type="submit" onClick={handleSave}>SAVE</button>
					</div>
				)}
			{item === '_id' &&
				(
					<div className="medium">
						Not Editable
					</div>
				)}
		</td>
	);
};
export default memo(TextInput);
