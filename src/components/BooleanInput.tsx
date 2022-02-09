import React, { useState, memo } from 'react';

type stringInput = {
	index: number;
	param: boolean;
	item: string;
	saveChange(index: number, item: string, newData: string|number|boolean): void;
}

const BooleanInput: React.FC<stringInput> = ({
	index, item, param, saveChange,
}) => {
	const [newDetails, setNewDetails] = useState<boolean>(param);
	const handleSave = () => {
		saveChange(index, item, newDetails);
	};

	const radioHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewDetails(e.target.value === 'true');
	};
	return (
		<td className="medium">
			<div className="input-group">
				<fieldset>
					<p>
						<label htmlFor="choice-true">
							True
							<input type="radio" name="isActive" value="true" id="choice-true" onChange={radioHandler} />
						</label>
					</p>
					<p>
						<label htmlFor="choice-false">
							False
							<input type="radio" name="isActive" value="false" id="choice-false" onChange={radioHandler} />
						</label>
					</p>
					<button type="submit" onClick={handleSave}>SAVE</button>
				</fieldset>
			</div>
		</td>
	);
};
export default memo(BooleanInput);
