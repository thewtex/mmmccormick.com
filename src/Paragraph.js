import React from 'react'

import { Text } from 'rebass'

const Paragraph = props => {
  const m = props.m || 3
  return (
    <Text m={m}>{props.children}</Text>
  )
}

export default Paragraph
