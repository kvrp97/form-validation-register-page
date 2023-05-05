import React from 'react'
import Button from '@mui/material/Button';

export default function BasicButton(props) {
  return (
    <div>
        <Button type={props.type} variant="contained">{props.name}</Button>
    </div>
  )
}
