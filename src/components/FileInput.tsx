import React, { FC } from 'react';

type fileupload = {
	fetchData(upload: Array<unknown>): void;
}
const FileInput: React.FC<fileupload> = ({ fetchData }) => {
	const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const ans = await e.currentTarget.files?.item(0)?.text();
		ans !== undefined && fetchData(JSON.parse(ans));
	};

	return (
		<div>
			<label id="fileInput" htmlFor="myFile">
				Please Upload a file of Type extension &lsquo;.json &lsquo;
				<input type="file" accept=".json" id="myFile" onChange={handleChange} />
			</label>
		</div>
	);
};
export default FileInput;
