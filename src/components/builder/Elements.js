import React from 'react'

import { ScrollableContainer} from '../core/styles'

export const Elements = ({ element }) => {
  return (
    <ScrollableContainer background={'light'}>
      {element}
    </ScrollableContainer>
  )
}
