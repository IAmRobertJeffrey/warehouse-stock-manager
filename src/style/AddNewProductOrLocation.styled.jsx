import styled from 'styled-components'

export const AddNewProductOrLocationForm = styled.form`
	
`

export const AddNewProductOrLocationButton = styled.button`
	color: white;
	width:100%;
	height:52.5px;
	background-color:transparent;
	border: 2px solid white;
	border-radius: 0.5rem;

	&:hover, &:active{
		border: 2px solid #a3be8c;
		color: #a3be8c;
	}
`

export const AddNewProductOrLocationInput = styled.input`
	color: white;
	border-radius: 0.5rem;
	padding-left:0.5rem;
	background-color:transparent;
	border: 2px solid white;
	width:100%;
	height:35px;
	margin-bottom:2rem;

	&:active, &:focus{
		border: 2px solid #5e81ac;
		outline: none;
	}

`

export const AddNewProductOrLocationInputLabel = styled.label`
	color: white;

`