import React from 'react'
import { DotLoader } from 'react-spinners'
import { Wrapper } from '../style/Generic.styled'

const Loading = () =>
{
	return (
		<Wrapper style={{ alignItems: "center", justifyContent: "center" }}>
			<DotLoader color='#5e81ac' />
		</Wrapper>
	)
}

export default Loading