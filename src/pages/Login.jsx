import React, { useContext } from 'react'
import { useState } from 'react'
import MachineContext from '../contexts/MachineContext'

import { LoginWrapper, LoginForm, LoginInput, LoginButton } from '../style/Login.styled'

const Login = () =>
{
	const { state, send } = useContext(MachineContext)
	const [loginForm, setLoginForm] = useState({ username: '', password: '' })

	return (
		<LoginWrapper>
			<LoginForm>
				<img style={{ maxWidth: "300px", marginBottom: "1.25rem" }} alt='logo' src='img/rokeLogo.svg' />
				<LoginInput type={"text"} placeholder='Username' value={loginForm.username} onChange={(e) => { setLoginForm({ ...loginForm, username: e.target.value }) }} />
				<LoginInput type={"password"} placeholder='Password' value={loginForm.password} onChange={(e) => { setLoginForm({ ...loginForm, password: e.target.value }) }} />
				<LoginButton onClick={(e) => { e.preventDefault(); send({ type: 'onLogin', loginData: { ...loginForm } }) }}>Log In</LoginButton>
			</LoginForm>
		</LoginWrapper>
	)
}

export default Login