import styled from 'styled-components'

import { device } from '../../utils/device'

export const ScrollableContainer = styled.section`
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  flex: 1 100%;
  margin: 1%;
  overflow: auto;
  border: 1px solid var(--light-grey);
  border-radius: 0.3125rem;
  padding: 1rem;
  background: ${props => props.background &&
    props.background === `dark` ?
      `var(--light-grey);` :
      `var(--white);`
  }

  @media ${device.medium} {
    flex: 1 1 40%;
  }
`

export const TextArea = styled.textarea`
  width: 95%;
  height: 40vh;
  padding: 1%;
  margin-bottom: 2rem;
  border: none;
  resize: none;
  background: inherit;
  color: var(--dark-grey);

  &:focus {
    border: none;
    outline: none;
  }

  @media ${device.medium} {
    height: 60vh;
  }
`
export const Header = styled.header`
  margin: 0.625rem;
  font-weight: bold;
  text-transform: capitalize;
  color: var(--medium-blue);
  text-align: center;
`

export const ErrorMessage = styled.p`
  color: var(--white);
  background: ${props => props.hide ? `inherit;` :`var(--red);`}
  font-weight: 600;
  font-size: 0.75rem;
  border-radius: 0.3125rem;
  margin: 0% 0 0 1%;
  min-height: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
`