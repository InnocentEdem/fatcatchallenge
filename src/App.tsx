import React, { useEffect, useState } from 'react';
import './App.css';
import data from './data/Data.json';
import InputEdit from './components/InputEdit';

function App() {
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
	const [personData, setPersonData] = useState<Array<IData>>();

	const fetchData = () => {
		setPersonData([...data]);
	};
	const saveChange = (index: number, newData: IData): void => {
		if (typeof personData === 'object') {
			const newArr = [...personData];
			newArr[index] = newData;
			setPersonData([...newArr]);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<table className="App">
			<thead className="table-head">
				<th>SRL</th>
				<th>ID</th>
				<th>NAME</th>
				<th>PICTURE</th>
				<th>AGE</th>
				<th>EMAIL</th>
				<th colSpan={3}>ABOUT</th>
				<th>ADDRESS</th>
				<th>DATE REGISTERED</th>
				<th>ACTIVE</th>
			</thead>
			{personData && personData.map((element, index) => {
				return (<tr><InputEdit element={element} index={index} saveChange={saveChange} /></tr>);
			})}

		</table>
	);
}

export default App;
