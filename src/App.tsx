import React, { useState, useCallback } from 'react';
import './App.css';
import FileInput from './components/FileInput';
import TextInput from './components/TextInput';
import NumberInput from './components/NumberInput';
import BooleanInput from './components/BooleanInput';
import LargeTextInput from './components/LargeTextInput';
import moment from 'moment';
import DateInput from './components/DateInput';
import { MediumTableHeader } from './components/TableHeaders';
import { LargeContent, SmallContent } from './components/TableContent';

function App() {
	const [personData, setPersonData] = useState<Array<Record<string, unknown>>>(); //	Create state for storing expected json data
	const { Children } = React;	//	For displaying components of array

	const fetchData = (upload:Array<Record<string, unknown>>) => {	// Function to load data on initial render from FileInput component
		if (typeof upload === 'object') {
			setPersonData([...upload]);
		}
	};

	const saveChange = useCallback((index: number, key: string, newData: string | number | boolean): void => { //	Function to save changes from input components, memoized for efficiency
		setPersonData(prev => prev?.map((item, i) => {
			return i === index ? { ...item, [key]: newData } : item;
		}));
	}, []);

	return (
		<>
			{/*	conditional display of FileInput component */}
			{!personData && <FileInput fetchData={fetchData} />}
			{/*	display data when available */}
			{personData && personData.map((el, index) => {
				return (
					<table>
						<thead>
							{/*	display table headers	*/}
							<tr>
								{
									typeof el === 'object' &&
									index === 0 &&
									el !== null &&
									Children.toArray(Object.keys(el).map((item) => {
										return (<MediumTableHeader headerTitle={item} />);
									}))
								}
							</tr>
						</thead>
						<tbody>
							<tr>
								{/*	display contents of json object */}
								{
									typeof el === 'object' &&
									el !== null &&
									Children.toArray(Object.keys(el).map((item) => {
										const result = el[item];
										const isString = typeof result === 'string'; //	check for string compatibility
										const isNumber = typeof result === 'number'; //	check for number compatibility
										const isBoolean = typeof result === 'boolean';	//	check for boolean compatibility
										const islargeText = isString && result.length > 60; //	check for if string is more than 60 characters
										const isDate = isString && moment((el[item] as string).substring(0, 13)).isValid(); //	est for date compatibility
										return (
											//	choose display component according to compatibilty test
											(isDate && <SmallContent content={moment((el[item] as string).substring(0, 13)).format('YYYY-MM-DD')} />) ||
											(islargeText && <LargeContent content={result as string} />) ||
											(isString && <SmallContent content={result as string} />) ||
											(isNumber && <SmallContent content={result as number} />) ||
											(isBoolean && <SmallContent content={result === true ? 'TRUE' : 'FALSE'} />));
									}))
								}
							</tr>
							<tr>
								{/*	display input for edit */}
								{
									typeof el === 'object' &&
									el !== null &&
									Children.toArray(Object.keys(el).map((item) => {
										const result = el[item]; 	//	compatibility test for input component
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
									}))
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
