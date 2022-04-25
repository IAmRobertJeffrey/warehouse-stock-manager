import React, { useState } from 'react'
import { useContext } from 'react';
import MachineContext from '../../contexts/MachineContext';
import Nav from '../../components/Nav';
import { Wrapper } from '../../style/Generic.styled';
import ScannerPlugin from '../../components/ScannerPlugin'

const Scan = () =>
{

	const { state, send } = useContext(MachineContext);
	const [inputBarcode, setInputBarcode] = useState('')


	return (
		<>
			<Nav />
			<Wrapper>
				<ScannerPlugin qrCodeSuccessCallback={(e) => send({ type: "onScan", initialBarcode: e })} />
				<input type={"text"} value={inputBarcode} onChange={(e) => setInputBarcode(e.target.value)} />
				<button onClick={() => send({ type: "onScan", initialBarcode: inputBarcode })}>Enter text barcode</button>
			</Wrapper>
		</>
	)
}

export default Scan