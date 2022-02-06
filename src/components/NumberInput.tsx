import React, { useState } from 'react';
import { nanoid } from 'nanoid';

type stringInput = {
	index: number;
	param: number;
	item: string;
	saveChange(index: number, item: string, newData: string|number): void;
}

const NumberInput: React.FC<stringInput> = ({
	index, item, param, saveChange,
}) => {
	const [newDetails, setNewDetails] = useState<number>(param);
	const handleSave = () => {
		saveChange(index, item, newDetails);
	};
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewDetails(+e.target.value);
	};
	return (
		<td key={nanoid()}>
			<div className="small">
				<input placeholder="click to edit" type="number" value={newDetails} name="name" onChange={e => handleChange(e)} />
				<button type="submit" onClick={handleSave}>SAVE</button>
			</div>
		</td>
	);
};
export default React.memo(NumberInput);
