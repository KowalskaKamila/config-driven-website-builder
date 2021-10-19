import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
	border: 1px solid var(--primary);
	border-radius: 0.6250em;
	height: 2.5em;
	width: 100%;
	max-width: 250px;
	min-width: auto;
	text-transform: none;
	font-weight: 600;
	font-size: 0.75rem;
	cursor: pointer;
	background: var(--primary);
	color: var(--white);
	display: flex;
	align-items: center;
	justify-content: center;
	letter-spacing: 0.1rem;
	margin: 0.75rem;

	&:hover {
		background-color: var(--medium-blue);
		border-color: var(--medium-blue);
		color: var(--white);
	}

	&:active {
		transform: translateY(1.5px);
	}
`

export const Button = ({ text, handleClick = () => { }, disabled = false }) => {
	return (
		<ButtonWrapper
			disabled={disabled}
			className="button"
			onClick={disabled ? () => { } : handleClick}
		>
			<p>{text}</p>
		</ButtonWrapper>
	)
}