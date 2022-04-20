import React from 'react'
import { useContext } from 'react';
import MachineContext from '../../contexts/MachineContext';
import Nav from '../../components/Nav';
import { Wrapper } from '../../style/Generic.styled';
import ScannerPlugin from '../../components/ScannerPlugin'

const Scan = () =>
{

	const { state, send } = useContext(MachineContext);

	return (
		<>
			<Nav />
			<Wrapper>

				<ScannerPlugin qrCodeSuccessCallback={() =>
				{

				}} />

			</Wrapper>
		</>
	)
}

export default Scan