import React from 'react'
import styled from '@emotion/styled';

const InputField = ({
  label,
  type
}) => {

  const Input = styled(({type}) => (
    <input type={type}/>
  ))`
    display: block;
    color: white;
    width: 100%;
    height: 3rem;
    border: 1px solid grey;
    outline: none;
    border-radius: .1rem;
    background: transparent;
    appearance: none;
    text-indent: 1.5rem;
    &:focus {
      border-color: blue;
    }
  `;

  return (
    <div style={{width: '100%', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '.5rem'}}>
      <label style={{color: 'white'}}>{label}</label>
      <Input type={type}/>
    </div>
  )
}

export default InputField