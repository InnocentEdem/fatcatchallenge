import React, { FC, useState } from 'react';

type thisInput = {
	element:{ name: string;
			_id: string;
			picture:string;
			address:string;
			isActive: boolean;
			email: string;
			about: string;
			age?: number;},
	index: number;
	saveChange(index:number, newData:IData): void;
}
interface IData{
	name: string;
	_id: string;
	picture:string;
	address:string;
	isActive: boolean;
	email: string;
	about: string;
	age?: number;
}

const InputEdit: React.FC<thisInput> = ({ element, index, saveChange }) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>) => {
		setNewDetails({ ...newDetails, [e.target.name]: e.target.value });
	};
	const handleSave = () => {
		saveChange(index, newDetails);
	};
	const [newDetails, setNewDetails] = useState({ ...element });
	return (
		<>
			<td>
				<div>
					{index + 1}
				</div>
			</td>
			<td>
				<div className="mini-headers">ID</div>
				<div>
					{element._id}
				</div>
			</td>
			<td>
				<div className="mini-headers">NAME</div>
				<div>
					{element.name}
				</div>
				<div className="input-group">
					<input placeholder="click to edit" type="text" value={newDetails.name} name="name" onChange={e => handleChange(e)} />
					<button type="submit" onClick={handleSave}>SAVE</button>
				</div>
			</td>
			<td>
				<div className="mini-headers">PICTURE</div>
				<div>
					{element.picture}
				</div>
				<div className="input-group">
					<input placeholder="click to edit" type="text" value={newDetails.picture} name="picture" onChange={e => handleChange(e)} />
					<button type="submit" onClick={handleSave}>SAVE</button>
				</div>
			</td>
			<td>
				<div className="mini-headers">AGE</div>
				<div>
					{element.age}
				</div>
				<div className="input-group">
					<input placeholder="click to edit" type="number" value={newDetails.age} name="age" onChange={e => handleChange(e)} />
					<button type="submit" onClick={handleSave}>SAVE</button>
				</div>
			</td>
			<td>
				<div className="mini-headers">EMAIL</div>
				<div>
					{element.email}
				</div>
				<div className="input-group">
					<input placeholder="click to edit" type="email" value={newDetails.email} name="email" onChange={e => handleChange(e)} />
					<button type="submit" onClick={handleSave}>SAVE</button>
				</div>
			</td>
			<td>
				<div className="mini-headers">ABOUT</div>
				<div>
					{element.about}
				</div>
				<textarea className="area" placeholder="click to edit" name="about" value={newDetails.about} onChange={e => handleChange(e)} />
				<button type="submit" onClick={handleSave}>SAVE</button>
			</td>
			<td>
				<div className="mini-headers">ADDRESS</div>
				<div>
					{element.address}
				</div>
				<div className="input-group">
					<textarea className="area" placeholder="click to edit" name="address" value={newDetails.address} onChange={e => handleChange(e)} />
					<button type="submit" onClick={handleSave}>SAVE</button>
				</div>
			</td>
			<td>
				<div className="mini-headers">ACTIVE</div>
				<div>
					{(element.isActive === false && 'false') || (element.isActive === true && 'true')}
				</div>
				<div className="input-group">
					<input placeholder="click to edit" type="text" value={newDetails.name} name="isActive" onChange={e => handleChange(e)} />
					<button type="submit" onClick={handleSave}>SAVE</button>
				</div>
			</td>
		</>
	);
};
export default InputEdit;
