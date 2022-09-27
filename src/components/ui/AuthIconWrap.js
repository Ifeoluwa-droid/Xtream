import React from 'react'
import styled from 'styled-components'


const AuthIconWrap = styled.div.attrs(props => ({
  onClick: props.onClick,
  bgColor: props.bgColor
}))`
    padding: .5rem 1.5rem;
    background-color: ${props => props.bgColor};
    cursor: pointer;
    &:hover: {
      background-color: blue;
    }
  `

export default AuthIconWrap
