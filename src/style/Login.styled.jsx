import styled from "styled-components";

export const LoginWrapper = styled.div`
	width:100%;
	height:100%;
	display:flex;
	background-color:#2e3440;
	align-items:center;
	justify-content:center;
`

export const LoginForm = styled.form`
	width:80%;
	align-items:center;
	background-color:#242933;
	display: flex;
	flex-direction:column;
	padding-left:2rem;
	padding-right:2rem;
	padding-bottom:2rem;
	padding-top:1.75rem;
	border-radius:1rem;
	max-width:500px;
`

export const LoginButton = styled.button`
	color: white;
	width:100%;
	height:52.5px;
	background-color:transparent;
	border: 2px solid white;
	border-radius: 0.5rem;

	&:hover, &:active{
		border: 2px solid #a3be8c;
		color: #a3be8c;
	}
`

export const LoginInput = styled.input`
	color: white;
	border-radius: 0.5rem;
	padding-left:0.5rem;
	background-color:transparent;
	border: 2px solid white;
	width:100%;
	height:35px;
	margin-bottom:2rem;

	&:active, &:focus{
		border: 2px solid #5e81ac;
		outline: none;
	}

`