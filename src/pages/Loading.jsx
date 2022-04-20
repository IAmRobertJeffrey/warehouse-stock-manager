import React from 'react'
import { DotLoader } from 'react-spinners'
import { LoadingWrapper } from '../style/Generic.styled'

const Loading = () =>
{
	return (
		<LoadingWrapper>
			<DotLoader color='#5e81ac' />
		</LoadingWrapper>
	)
}

export default Loading