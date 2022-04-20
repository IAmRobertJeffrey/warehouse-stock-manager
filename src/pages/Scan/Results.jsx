import React from 'react'
import { Wrapper } from '../../style/Generic.styled'
import Nav from '../../components/Nav'
import { useContext } from 'react'
import MachineContext from '../../contexts/MachineContext'

const Results = () =>
{
	const { state, send } = useContext(MachineContext);

	return (
		<>
			<Nav />
			<Wrapper>
				<p>{state.initialScanResults.result.product_name}</p>
			</Wrapper>
		</>
	)
}

export default Results