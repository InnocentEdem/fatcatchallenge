import React, { useState } from 'react';

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
	const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
		setNewDetails(e.target.value);
	};
	return (
		<td>
			<div className="medium">
				<input placeholder="click to edit" type="text" value={newDetails} name="name" onChange={e => handleChange(e)} />
				<button type="submit" onClick={handleSave}>SAVE</button>
			</div>
		</td>
	);
};
export default TextInput;
