import React, { useState } from 'react';

type stringInput = {
	index: number;
	param: string;
	item: string;
	saveChange(index: number, item: string, newData: string|number): void;
}

const LargeTextInput: React.FC<stringInput> = ({
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
		<td className="large">
			<div className="input-group">
				<textarea className="area" placeholder="click to edit" name="address" value={newDetails} onChange={e => handleChange(e)} />
				<button type="submit" onClick={handleSave}>SAVE</button>
			</div>
		</td>
	);
};
export default LargeTextInput;
