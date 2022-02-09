import React, { useState, memo } from 'react';

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
	const validateEmail = (email:string) => {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};
	return (
		<td>
			{item !== '_id' &&
				(
					<div className="medium">
						<input placeholder="click to edit" type={validateEmail(param) ? 'email' : 'text'} defaultValue={newDetails} name="name" onChange={handleChange} />
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
