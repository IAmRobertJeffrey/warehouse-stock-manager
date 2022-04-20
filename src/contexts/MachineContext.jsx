import React from 'react'
import { createContext } from 'react'

import { useMachine } from '@xstate/react'
import { AppMachine } from '../state/AppMachine'

const MachineContext = createContext({})

export const MachineProvidor = ({ children }) =>
{
	const [state, send] = useMachine(AppMachine);

	const authenticateToken = async () =>
	{
		const response = await fetch(`${state.context.apiLocation}/auth/authCheck`, {
			method: "POST",
			headers: {
				authorization: localStorage.getItem("token"),
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})

		const data = await response.json();
		if (data.response === "Token Valid.")
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	return (
		<MachineContext.Provider value={{
			state,
			send,
			authenticateToken,
		}}>
			{children}
		</MachineContext.Provider>
	)
}

export default MachineContext
