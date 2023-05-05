import React, { useState } from 'react'
import '../register/Register.css';
import TextInputField from '../../components/textInputField/TextInputField'
import BasicButton from '../../components/basicButton/BasicButton';
import { validateEmpty, emailValidate, passwordValidate } from '../../validations/FormInputValidation';
import Swal from 'sweetalert2'


export default function Register() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');

    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordAgainError, setPasswordAgainError] = useState('');


    // Handle input change for first name field
    const handleFirstNameChange = (event) => {
        const value = event.target.value;
        setFirstName(value);

        if (!validateEmpty(value)) {
            setFirstNameError('Please enter your first name');
        } else {
            setFirstNameError('');
        }
    }

    // Handle input change for last name field
    const handleLastNameChange = (event) => {
        const value = event.target.value;
        setLastName(value);

        if (!validateEmpty(value)) {
            setLastNameError('Please enter your last name');
        } else {
            setLastNameError('');
        }
    }

    // Handle input change for email field
    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);

        if (!emailValidate(value)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    }

    // Handle input change for password field
    const handlePasswordChange = (event) => {
        const value = event.target.value;
        setPassword(value);

        if (!passwordValidate(value)) {
            setPasswordError('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number');
        } else {
            setPasswordError('');
        }
    }

    // Handle input change for password again field
    const handlePasswordAgainChange = (event) => {
        const value = event.target.value;
        setPasswordAgain(value);

        if (value !== password) {
            setPasswordAgainError('Password does not match');
        } else {
            setPasswordAgainError('');
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (
            firstNameError ||
            lastNameError ||
            emailError ||
            passwordError ||
            passwordAgainError ||
            !firstName ||
            !lastName ||
            !email ||
            !password ||
            !passwordAgain
          ) {
            // Display an error message or alert to the user
            // alert('Please fill in all fields and correct any errors.');
            Swal.fire('Please fill in all fields and correct any errors.')
          } else {
            console.log("success");
            // Submit the form
            // ...
            Swal.fire(
                'Good job!',
                'Form Submission Success',
                'success'
              )
          }
        
    };

    return (
        <div className='reg-form'>
            <form onSubmit={handleSubmit}>
                <h2>Register New User</h2>
                <div className='text-input'>
                    <TextInputField
                        name="firstname" type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={handleFirstNameChange}
                        error={Boolean(firstNameError)}
                        helperText={firstNameError}
                    />
                </div>
                <div className='text-input'>
                    <TextInputField
                        name="lastname"
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={handleLastNameChange}
                        error={Boolean(lastNameError)}
                        helperText={lastNameError}
                    />
                </div>
                <div className='text-input'>
                    <TextInputField
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={handleEmailChange}
                        error={Boolean(emailError)}
                        helperText={emailError}
                    />
                </div>                
                <div className='text-input'>
                    <TextInputField
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        error={Boolean(passwordError)}
                        helperText={passwordError}
                    />
                </div>
                <div className='text-input'>
                    <TextInputField
                        name="password-again"
                        type="password"
                        placeholder="Password Again"
                        value={passwordAgain}
                        onChange={handlePasswordAgainChange}
                        error={Boolean(passwordAgainError)}
                        helperText={passwordAgainError}
                    />
                </div>
                <div className='submit-btn'>
                    <BasicButton type="submit" name="Register" />
                </div>
            </form>
        </div>
    )
}
