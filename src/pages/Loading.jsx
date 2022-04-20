import React from 'react'
import { DotLoader } from 'react-spinners'
import { LoadingWrapper } from '../style/Generic.styled'

const Loading = () =>
{
	return (
		<LoadingWrapper>
			<DotLoader color='#88c0d0' />
		</LoadingWrapper>
	)
}

export default Loading