import React from 'react'
import { Wrapper } from '../../style/Generic.styled'
import Nav from '../../components/Nav'
import { useContext } from 'react'
import MachineContext from '../../contexts/MachineContext'
import { AddNewProductOrLocationButton, AddNewProductOrLocationForm, AddNewProductOrLocationInput, AddNewProductOrLocationInputLabel } from '../../style/AddNewProductOrLocation.styled'

const AddProductOrLocation = () =>
{
	const { state, send } = useContext(MachineContext);

	return (
		<>
			<Nav />
			<Wrapper>
				<AddNewProductOrLocationForm>
					<AddNewProductOrLocationInputLabel>Product Name</AddNewProductOrLocationInputLabel>
					<AddNewProductOrLocationInput value={state.context.newProductName} onChange={(e) => send({ newProductName: e.target.value })} type={"text"} />
					<AddNewProductOrLocationInputLabel>Product Reference</AddNewProductOrLocationInputLabel>
					<AddNewProductOrLocationInput value={state.context.newProductReference} onChange={(e) => send({ newProductReference: e.target.value })} type={"text"} />
					<AddNewProductOrLocationButton onClick={(e) => { e.preventDefault(); send({ type: "onFinishAddProductOrLocation" }) }}>Add Product</AddNewProductOrLocationButton>
				</AddNewProductOrLocationForm>
			</Wrapper>
		</>
	)
}

export default AddProductOrLocation