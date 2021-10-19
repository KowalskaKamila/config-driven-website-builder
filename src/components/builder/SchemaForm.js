import React from 'react'
import styled from 'styled-components'

import { TextArea, ScrollableContainer, Header, ErrorMessage } from '../core/styles'
import { Button } from './../core/Button'

const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SchemaForm = ({ schemaValue, updateSchemaValue, handleFormSubmit, error }) => {
 
  const handleSubmit = (e) => {
    e.preventDefault()
    handleFormSubmit()
  }

  return (
    <ScrollableContainer background={'dark'}>
      <form onSubmit={handleSubmit}>
        <FormLabel htmlFor='jsonFormat'>
          <Header> JSON </Header>
          <TextArea
            spellCheck='false'
            placeholder='type JSON schema here...'
            id='jsonFormat'
            value={schemaValue}
            onChange={(e) => updateSchemaValue(e.target.value)}
          />
          <ErrorMessage hide={!error}> {error} </ErrorMessage>
          <Button
            text='Build'
            type='submit'
          />
        </FormLabel>
      </form>
    </ScrollableContainer>
  )
}