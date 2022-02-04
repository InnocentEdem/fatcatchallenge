/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import moment from 'moment';

type thisInput = {
	element:{ name: string;
			_id: string;
			picture:string;
			address:string;
			isActive: boolean;
			email: string;
			about: string;
			age?: number;
			registered: string},
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
	registered:string;
}

const InputEdit: React.FC<thisInput> = ({ element, index, saveChange }) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>) => {
		setNewDetails({ ...newDetails, [e.target.name]: e.target.value });
	};
	const handleSave = () => {
		saveChange(index, newDetails);
	};
	const radioHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewDetails({ ...newDetails, [e.target.name]: e.target.value === 'true' });
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
			<td colSpan={1}>
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
			<td colSpan={3}>
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
				<div className="mini-headers">DATE</div>
				<div>
					{moment(element.registered.substring(0, 13)).format('YYYY-MM-DD')}
				</div>
				<div className="input-group">
					<input placeholder="click to edit" type="date" name="registered" defaultValue={moment(element.registered.substring(0, 13)).format('YYYY-MM-DD')} onChange={e => handleChange(e)} />
					<button type="submit" onClick={handleSave}>SAVE</button>
				</div>
			</td>
			<td>
				<div className="mini-headers">ACTIVE</div>
				<div className="active">
					{(element.isActive === false && 'FALSE') || (element.isActive === true && 'TRUE')}
				</div>
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
		</>
	);
};
export default InputEdit;
