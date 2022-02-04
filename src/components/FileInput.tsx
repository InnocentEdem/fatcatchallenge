import React from 'react';
import data from '../data/Data.json';

type fileupload = {
	fetchData(upload: Array<unknown>): void;
}
const FileInput: React.FC<fileupload> = ({ fetchData }) => {
	const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const ans = await e.currentTarget.files?.item(0)?.text();
		ans !== undefined && fetchData(JSON.parse(ans));
	};

	const loadInternal = () => {
		fetchData(data);
	};

	return (
		<div>
			<label id="fileInput" htmlFor="myFile">
				<button type="button" id="fileload" onClick={loadInternal}>Load Application Internal Data</button>
				<div className="divisor">OR</div>
				<div className="upload">
					Upload a JSON File
					<input type="file" accept=".json" id="myFile" onChange={handleChange} />
				</div>
			</label>
		</div>
	);
};
export default FileInput;
