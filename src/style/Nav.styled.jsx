import styled from 'styled-components'

export const NavWrapper = styled.nav`
	width:100%;
	height:70px;
	display:flex;
	background-color:#2e3440;
	/* gap:5px; */
`

export const NavItemWrapper = styled.div`
	width:100%;
	height:100%;
	background-color:#242933;
	display:flex;
	align-items:center;
	justify-content:center;

	&:hover, &:active{
		background-color:#171d25;
	}
	
`