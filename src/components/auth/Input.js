import { PropaneSharp } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';



const Input = styled.input`
    display: block;
    color: ${props => props.color || 'white'};
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

const InputField = ({
  label,
  labelColor,
  type,
  onChange,
  inputColor,
  value
}) => {

  return (
    <div style={{width: '100%', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '.5rem'}}>
      <label style={{color: labelColor || 'white'}}>{label}</label>
      <Input type={type} onChange={onChange} color={inputColor} value={value}/>
    </div>
  )
}

export default InputField