import React, { useState } from 'react'
import { Wrapper } from '../../style/Generic.styled'
import Nav from '../../components/Nav'
import { useContext } from 'react'
import MachineContext from '../../contexts/MachineContext'
import { AddNewProductOrLocationButton, AddNewProductOrLocationForm, AddNewProductOrLocationInput, AddNewProductOrLocationInputLabel } from '../../style/AddNewProductOrLocation.styled'

const AddProductOrLocation = () =>
{
	const { state, send } = useContext(MachineContext);
	const [productOrLocation, setProductOrLocation] = useState('Product')
	const [newProductForm, setNewProductForm] = useState({ newProductName: '', newProductReference: '' })
	const [newLocationForm, setNewLocationForm] = useState({ newLocationName: '' })

	return (
		<>
			<Nav />
			<Wrapper>
				<AddNewProductOrLocationForm>
					<AddNewProductOrLocationInputLabel>Product Name</AddNewProductOrLocationInputLabel>
					<AddNewProductOrLocationInput value={newProductForm.newProductName} onChange={(e) => setNewProductForm({ ...newProductForm, newProductName: e.target.value })} type={"text"} />
					<AddNewProductOrLocationInputLabel>Product Reference</AddNewProductOrLocationInputLabel>
					<AddNewProductOrLocationInput value={newProductForm.newProductReference} onChange={(e) => setNewProductForm({ ...newProductForm, newProductReference: e.target.value })} type={"text"} />
					<AddNewProductOrLocationButton onClick={(e) => { e.preventDefault(); send({ type: "onFinishAddProductOrLocation" }) }}>Add Product</AddNewProductOrLocationButton>
				</AddNewProductOrLocationForm>
			</Wrapper>
		</>
	)
}

export default AddProductOrLocation