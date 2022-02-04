import React, { useEffect, useState } from 'react';
import './App.css';
// import data from './data/Data.json';
import FileInput from './components/FileInput';
import TextInput from './components/TextInput';
import NumberInput from './components/NumberInput';
import BooleanInput from './components/BooleanInput';
import LargeTextInput from './components/LargeTextInput';
import moment from 'moment';
import DateInput from './components/DateInput';

function App() {
	const [personData, setPersonData] = useState<Array<Record<string, unknown>>>();

	const fetchData = (upload:Array<Record<string, unknown>>) => {
		if (typeof upload === 'object') {
			setPersonData([...upload]);
		}
	};

	const saveChange = (index: number, key: string, newData: string | number|boolean): void => {
		if (typeof personData === 'object') {
			const newArr: Array<Record<string, unknown>> = [...personData];
			if (typeof newArr[index][key] === typeof newData) {
				newArr[index][key] = newData;
			}
			setPersonData([...newArr]);
		}
	};

	return (
		<>
			{!personData && <FileInput fetchData={fetchData} />}
			{personData && personData.map((el, index) => {
				return (
					<table>
						<tr>
							{
								typeof el === 'object' &&
								el !== null &&
								Object.keys(el).map((item) => {
									return ((typeof el[item] === 'string' && <td>{el[item] as string}</td>) ||
										(typeof el[item] === 'number' && <td>{el[item] as number}</td>) ||
										(typeof el[item] === 'boolean' && <td>{el[item] === true ? 'TRUE' : 'FALSE'}</td>));
								})
							}
						</tr>
						<tr>
							{
								typeof el === 'object' &&
								el !== null &&
								Object.keys(el).map((item) => {
									const result = el[item];
									const isString = typeof result === 'string';
									const isDate = isString && moment(result.substring(0, 13)).isValid();
									const islargeText = isString && result.length > 30;
									const isBoolean = typeof result === 'boolean';
									const isNumber = typeof result === 'number';
									return (isDate && (<DateInput index={index} item={item} param={result} saveChange={saveChange} />)) ||
											(islargeText && (<LargeTextInput index={index} item={item} param={result} saveChange={saveChange} />)) ||
											(isString && (<TextInput index={index} item={item} param={result} saveChange={saveChange} />)) ||
											(isNumber && (<NumberInput index={index} item={item} param={result} saveChange={saveChange} />)) ||
											(isBoolean && (<BooleanInput index={index} item={item} param={result} saveChange={saveChange} />));
								})
							}
						</tr>
					</table>
				);
			})}
		</>
	);
}

export default App;
