import React, { useState } from 'react'
import styled from 'styled-components'
import { v4 as uuid } from 'uuid'

import { device } from '../utils/device'
import { SchemaForm } from '../components/builder/SchemaForm'
import { Elements } from '../components/builder/Elements'

const Wrapper = styled.main`
	display: flex;
	flex-direction: column;
	padding: 2%;
	
	@media ${device.medium} {
		flex-direction: row;
		justify-content: space-around;
		max-height: 90vh;
	}  
`

export const WebsiteBuilderScreen = () => {
	const [ schemaValue, setSchemaValue ] = useState('')
	const [ element, setElement ] = useState(null)
	const [ error, setError ] = useState('')

	const createElements = (el) => {

		const key = uuid()
		if (el.props) {
			el.props['key'] = key
		} else {
			el['props'] = { 'key': key }
		}

		if (typeof el.children === 'string') {
			return React.createElement(el.element, el.props, el.children)
		}

		const children = []
		el.children.forEach(child => {
			children.push(createElements(child))
		})
		return React.createElement(el.element, el.props, children)
	}

	const handleFormSubmit = () => {
		error && error.length > 0 && setError('')

		if (schemaValue && schemaValue.length > 0) {
			try {
				const obj = JSON.parse(schemaValue)
				const uiElements = createElements(obj)
				setElement(uiElements)
			} catch (e) {
				console.log(e)
				setError(e.message)
				setElement(null)
			}
		}
	}

	return (
		<Wrapper>
			<SchemaForm
				schemaValue={schemaValue}
				updateSchemaValue={setSchemaValue}
				handleFormSubmit={handleFormSubmit}
				error={error}
			/>
			<Elements element={element} />
		</Wrapper>
	)
}