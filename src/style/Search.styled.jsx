import styled from 'styled-components'

export const SearchTable = styled.table`
	width:100%;
	border-collapse: collapse;
	border-spacing: 0;
	
`

export const SearchTableHead = styled.thead`
	
`

export const SearchTableBody = styled.tbody`
	
`

export const SearchTableHeading = styled.th`
	text-align:center;
	width:${props => props.width ? props.width : "min-content"};
	border: 1px solid #3b4252;
	padding:1rem;
	color: #eceff4;
	font-size:clamp(5px, 3vw, 12pt);
`

export const SearchTableRow = styled.tr`
	width:100%;
`

export const SearchTableData = styled.td`
	text-align:center;
	width:${props => props.width ? props.width : "min-content"};
	border: 1px solid #3b4252;
	padding:0.5rem;
	color: #eceff4;
	font-size:clamp(5px, 3vw, 12pt);
`

export const SearchBar = styled.input`
	z-index:2;
	height:70px;
	width:100%;
	background-color:#4c566a;
	outline:none;
	border:none;
	color:white;
	outline: 1px solid #5e81ac;
	text-align:center;
	font-size:13pt;

	&:active, &:focus
	{
		outline: 1px solid #88c0d0;
	}
`