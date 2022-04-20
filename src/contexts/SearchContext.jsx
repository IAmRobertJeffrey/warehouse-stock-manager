import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import MachineContext from './MachineContext'


const SearchContext = createContext({})

export const SearchProvidor = ({ children }) =>
{

	const { state } = useContext(MachineContext)
	const [loadedSearchData, setLoadedSearchData] = useState([]);
	const [filteredSearchData, setFilteredSearchData] = useState([]);
	const [searchInput, setSearchInput] = useState('');


	useEffect(() =>
	{
		setFilteredSearchData([]);
		if (searchInput !== '')
		{
			loadedSearchData.forEach((current) =>
			{
				if (current.location_name.toLowerCase().includes(searchInput.toLowerCase()) || current.product_name.toLowerCase().includes(searchInput.toLowerCase()) || current.product_reference.toLowerCase().includes(searchInput.toLowerCase()))
				{
					setFilteredSearchData((filteredSearchData) => [...filteredSearchData, current])
				}
			})
			// console.log(filteredSearchData);
		}
	}, [searchInput])


	const loadData = async () =>
	{
		const response = await fetch(`${state.context.apiLocation}/product_location/searchData`, {
			method: "GET",
			headers: {
				authorization: localStorage.getItem("token"),
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
		const data = await response.json();
		// console.log(data);
		setLoadedSearchData(data)
	}

	return (
		<SearchContext.Provider value={{
			loadData,
			loadedSearchData,
			filteredSearchData,
			setFilteredSearchData,
			searchInput,
			setSearchInput
		}}>
			{children}
		</SearchContext.Provider>
	)
}

export default SearchContext
