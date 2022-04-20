import styled from 'styled-components'

export const Wrapper = styled.div`
	width:100%;
	height:calc(100% - 70px);
	display:flex;
	background-color:#2e3440;
	align-items:center;
	flex-direction:column;
`

export const LoadingWrapper = styled(Wrapper)`
height:100%;
align-items: center;
justify-content: center;

`