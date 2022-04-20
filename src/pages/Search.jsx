import React, { useEffect } from 'react'
import { useContext } from 'react';
import MachineContext from '../contexts/MachineContext';
import { Wrapper } from '../style/Generic.styled';
import Nav from '../components/Nav';
import SearchContext from '../contexts/SearchContext'
import { SearchTable, SearchTableHead, SearchTableRow, SearchTableHeading, SearchTableBody, SearchTableData, SearchBar } from '../style/Search.styled';

const Search = () =>
{
	const { state, send } = useContext(MachineContext);
	const { loadData, loadedSearchData, filteredSearchData, searchInput, setSearchInput } = useContext(SearchContext)

	useEffect(() =>
	{
		loadData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (filteredSearchData.length > 0 && loadedSearchData.length > 0)
	{
		return (
			<>
				<Nav />
				<Wrapper>
					<SearchBar value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder='Search...' type={'text'}></SearchBar>
					<SearchTable>
						<SearchTableHead>
							<SearchTableRow>
								<SearchTableHeading width={"20%"}>Location Name</SearchTableHeading>
								<SearchTableHeading width={"50%"}>Product Name</SearchTableHeading>
								<SearchTableHeading width={"15%"}>Product Reference</SearchTableHeading>
								<SearchTableHeading width={"15%"}>Stock Quantity</SearchTableHeading>
							</SearchTableRow>
						</SearchTableHead>
						<SearchTableBody>
							{
								filteredSearchData.map((current) =>
								{
									return (
										<SearchTableRow key={current.product_location_id}>
											<SearchTableData width={"20%"}>{current.location_name}</SearchTableData>
											<SearchTableData width={"50%"}>{current.product_name}</SearchTableData>
											<SearchTableData width={"15%"}>{current.product_reference}</SearchTableData>
											<SearchTableData width={"15%"}>{current.product_location_stock}</SearchTableData>
										</SearchTableRow>
									)
								})

							}

						</SearchTableBody>
					</SearchTable>
				</Wrapper>
			</>
		)
	}
	else
	{
		return (
			<>
				<Nav />
				<Wrapper>
					<SearchBar value={searchInput} onChange={(e) => setSearchInput(e.target.value)} autoFocus placeholder='Search...' type={'text'}></SearchBar>
					<SearchTable>
						<SearchTableHead>
							<SearchTableRow>
								<SearchTableHeading width={"20%"}>Location Name</SearchTableHeading>
								<SearchTableHeading width={"40%"}>Product Name</SearchTableHeading>
								<SearchTableHeading width={"20%"}>Product Reference</SearchTableHeading>
								<SearchTableHeading width={"20%"}>Stock Quantity</SearchTableHeading>
							</SearchTableRow>
						</SearchTableHead>
						<SearchTableBody>
							<SearchTableRow>
								<SearchTableData>...</SearchTableData>
								<SearchTableData>...</SearchTableData>
								<SearchTableData>...</SearchTableData>
								<SearchTableData>...</SearchTableData>
							</SearchTableRow>
						</SearchTableBody>
					</SearchTable>
				</Wrapper>
			</>
		)

	}

}

export default Search