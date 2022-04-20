import { Route, Routes } from "react-router-dom";
import Scan from "./pages/Scan/Scan";
import Search from "./pages/Search";
import Login from "./pages/Login";
import { AppWrapper } from "./style/App.styled";
import { useContext, useEffect } from "react";
import MachineContext from "./contexts/MachineContext";
import { useNavigate } from "react-router-dom";
import AddProductOrLocation from "./pages/Scan/AddProductOrLocation";
import AddStock from './pages/Scan/AddStock';
import MoveStock from './pages/Scan/MoveStock';
import RemoveStock from './pages/Scan/RemoveStock'
import Results from './pages/Scan/Results'
import Loading from "./pages/Loading";

function App()
{
	const { state, send, authenticateToken } = useContext(MachineContext);
	const navigate = useNavigate();

	useEffect(() =>
	{
		if (localStorage.getItem("token") !== null)
		{
			send("onUseToken")
		}
	}, [])

	useEffect(() =>
	{
		const findDeepest = (current) =>
		{
			if (typeof current === "object")
			{
				findDeepest(Object.values(current)[0]);
			}
			else
			{
				// console.log(typeof current);
				if (typeof current === "string")
				{
					navigate(`/${current}`);
				}
			}
		}
		console.log(state.value);

		// if (state.value !== 'Loading')
		// {
		findDeepest(state.value)
		// }

		authenticateToken().then((response) =>
		{
			if (response)
			{
				send({ type: 'onUseToken' })
			}
			else
			{
				send({ type: 'onLogout' })
			}
		})
	}, [state, send])


	return (
		<AppWrapper>
			<Routes>
				<Route path='/Loading' element={<Loading />} />
				<Route path='/Search' element={<Search />} />
				<Route path='/Scan' element={<Scan />} />
				<Route path='/Login' element={<Login />} />
				<Route path='/AddNewProductOrLocation' element={<AddProductOrLocation />} />
				<Route path='/AddStock' element={<AddStock />} />
				<Route path='/MoveStock' element={<MoveStock />} />
				<Route path='/RemoveStock' element={<RemoveStock />} />
				<Route path='/Results' element={<Results />} />
			</Routes>
		</AppWrapper>
	);
}

export default App;
