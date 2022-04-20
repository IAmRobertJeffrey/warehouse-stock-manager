import React from 'react'
import { NavItemWrapper } from '../style/Nav.styled'
import { BsSearch } from 'react-icons/bs'
import { MdOutlineLogout } from 'react-icons/md'
import { BiQrScan } from 'react-icons/bi'
import { useContext } from 'react'
import MachineContext from '../contexts/MachineContext'
import SearchContext from '../contexts/SearchContext'
import { IoMdRefresh } from 'react-icons/io'



const NavItem = ({ location, color }) =>
{
	const { state, send } = useContext(MachineContext);
	const { loadData } = useContext(SearchContext)

	if (location === 'Search')
	{
		return (
			<NavItemWrapper onClick={() => send({ type: 'onNavigateSearchScreen' })}>
				<BsSearch size={"35px"} color={color} />
			</NavItemWrapper>
		)
	}
	else if (location === 'RefreshSearch')
	{
		return (
			<NavItemWrapper onClick={() => loadData()} >
				<IoMdRefresh size={"45px"} color={color} />
			</NavItemWrapper>
		)
	}
	else if (location === 'Scan')
	{
		return (
			<NavItemWrapper onClick={() => send({ type: 'onNavigateScanScreen' })} >
				<BiQrScan size={"40px"} color={color} />
			</NavItemWrapper>
		)
	}
	else if (location === 'Log out')
	{
		return (
			<NavItemWrapper onClick={() => send({ type: 'onLogout' })}>
				<MdOutlineLogout size={"40px"} color={color} />
			</NavItemWrapper>
		)
	}

}

export default NavItem