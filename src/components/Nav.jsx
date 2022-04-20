import React from 'react'
import { NavWrapper } from '../style/Nav.styled'
import NavItem from './NavItem'
import { useLocation } from 'react-router-dom'

const Nav = () =>
{

	const location = useLocation()


	if (location.pathname !== "/Search")
	{
		return (
			<NavWrapper>
				<NavItem location={"Search"} color={"white"} />
				<NavItem location={"Scan"} color={"#a3be8c"} />
				<NavItem location={"Log out"} color={"white"} />
			</NavWrapper>
		)
	}

	if (location.pathname === "/Search")
	{
		return (
			<NavWrapper>
				<NavItem location={"RefreshSearch"} color={"#a3be8c"} />
				<NavItem location={"Scan"} color={"white"} />
				<NavItem location={"Log out"} color={"white"} />
			</NavWrapper>
		)
	}
}

export default Nav