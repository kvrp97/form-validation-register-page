import React from 'react'
import '../textInputField/TextInputField.css';
import TextField from '@mui/material/TextField';

export default function TextInputField(props) {
    return (
        <div className='textField'>
            <TextField
                sx={{ width: 360}}
                name={props.name}
                type={props.type}
                // id="outlined-basic"
                label={props.placeholder}
                variant="outlined"
                value={props.value}
                onChange={props.onChange}
                error={props.error}
                helperText={props.helperText}
            />
        </div>
    )
}
