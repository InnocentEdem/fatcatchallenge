import React, { useState } from 'react';
import './App.css';
import FileInput from './components/FileInput';
import TextInput from './components/TextInput';
import NumberInput from './components/NumberInput';
import BooleanInput from './components/BooleanInput';
import LargeTextInput from './components/LargeTextInput';
import moment from 'moment';
import DateInput from './components/DateInput';
import { MediumTableHeader, LargeTableHeader, SmallTableHeader } from './components/TableHeaders';
import { LargeContent, MediumContent, SmallContent } from './components/TableContent';

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
						<thead>
							{
								typeof el === 'object' &&
								index === 0 &&
								el !== null &&
								Object.keys(el).map((item) => {
									const result = el[item];
									const isString = typeof result === 'string';
									const isDate = isString && moment(result.substring(0, 13)).isValid();
									const islargeText = isString && result.length > 60;
									const isBoolean = typeof result === 'boolean';
									const isNumber = typeof result === 'number';
									return (isDate && (<SmallTableHeader headerTitle={item} />)) ||
										(islargeText && (<LargeTableHeader headerTitle={item} />)) ||
										(isString && (<MediumTableHeader headerTitle={item} />)) ||
										(isNumber && (<SmallTableHeader headerTitle={item} />)) ||
										(isBoolean && (<SmallTableHeader headerTitle={item} />));
								})
							}
						</thead>
						<tbody>
							<tr>
								{
									typeof el === 'object' &&
									el !== null &&
									Object.keys(el).map((item) => {
										const result = el[item];
										const isString = typeof result === 'string';
										const isNumber = typeof result === 'number';
										const isBoolean = typeof result === 'boolean';
										const islargeText = isString && result.length > 60;
										const isDate = isString && moment((el[item] as string).substring(0, 13)).isValid();
										return (
											(isDate && <SmallContent content={moment((el[item] as string).substring(0, 13)).format('YYYY-MM-DD')} />) ||
											(islargeText && <LargeContent content={result as string} />) ||
											(isString && <SmallContent content={result as string} />) ||
											(isNumber && <SmallContent content={result as number} />) ||
											(isBoolean && <SmallContent content={result === true ? 'TRUE' : 'FALSE'} />));
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
										const islargeText = isString && result.length > 60;
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
						</tbody>
					</table>
				);
			})}
		</>
	);
}

export default App;
