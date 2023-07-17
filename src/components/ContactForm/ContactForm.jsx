import React, {useState} from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

function checkEmailValid (email) {
  let isValid = true;

  if (email.length === 0) {
    isValid = false;
  } else if (email.split('@').length !== 2) {
    isValid = false;
  }

  return isValid;
}

function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiry, setInquiry] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [inquiryError, setInquiryError] = useState('');

  //TODO Need to make sure all sections of form are all filled out
  //if all sections are not filled out, show alert for each one
  //TODO Need input validation for email
  const handleChange = (event) => {
    const inputType = event.target.id;
    const text = event.target.value;

    if (inputType === 'first-name-input') {
      setFirstName(text);
    } else if (inputType === 'last-name-input') {
      setLastName(text);
    } else if (inputType === 'email-input') {
      setEmail(text);
    } else if (inputType === 'inquiry-input') {
      setInquiry(text);
    }
  }

  const validateForm = () => {
    let isFormValid = true;
    if (!firstName.length) {
      setFirstNameError('Please enter your first name ⚠️');
      isFormValid = false;
    } else if (firstName.length) {
      setFirstNameError('');
    }

    if (!lastName.length) { 
      setLastNameError('Please enter your last name ⚠️');
      isFormValid = false;
    } else if (lastName.length) {
      setLastNameError('');
    }

    if (!inquiry.length) {
      setInquiryError('Please enter the reason you would like to contact me ⚠️');
      isFormValid = false;
    } else if (inquiry.length) {
      setInquiryError('');
    } 

    const isEmailValid = checkEmailValid(email);
    if (!isEmailValid) {
      setEmailError('Please enter a valid email ⚠️');
      isFormValid = false;
    } else if (isEmailValid) {
      setEmailError('');
    }

    return isFormValid;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const passedFormValidation = validateForm();
    if (passedFormValidation) {
      const formData = new FormData();
      formData.append('first_name', firstName);
      formData.append('last_name', lastName);
      formData.append('email', email);
      formData.append('message', inquiry);

      //submit email
      emailjs.send(
        'service_8lcu1lj',
        'template_670fj1i', 
        {
          'first_name': firstName,
          'last_name': lastName,
          'email': email,
          'message': inquiry,
        },
        'SxcZS4Ol36eVHIlQ3'
      )
        .then((result) => {
            console.log('email sent: ', result.text);
        })
        .catch((error) => {
            console.log('email failed: ', error.text);
        });
    }
    //else do nothing
  }
  
  //TODO Need to make sure that the validation messages don't mess up the css
  const isFirstNameWrong = firstNameError.length > 0;
  const isLastNameWrong = lastNameError.length > 0;
  const isEmailWrong = emailError.length > 0;
  const isInquiryWrong = inquiryError.length > 0;
  return (
    <div className="contact-container">
      <h1>Have Any Questions?</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-name-inputs-container">
          <div className="form-first-name-container">
            {
              isFirstNameWrong
              ? <span id="first-name-input-error">{firstNameError}</span>
              : null
            }
            <input id="first-name-input" placeholder="First Name" onChange={handleChange}></input>
          </div>
          <div className="form-last-name-container">
            {
              isLastNameWrong
              ? <span id="last-name-input-error">{lastNameError}</span>
              : null
            }
            <input id="last-name-input" placeholder="Last Name" onChange={handleChange}></input>
          </div>
        </div>
        <div className="form-email-container">
          {
            isEmailWrong
            ? <span id="email-input-error">{emailError}</span>
            : null
          }
          <input id="email-input" placeholder="Email" onChange={handleChange}></input>
        </div>
        <div className="form-inquiry-container">
          {
            isInquiryWrong
            ? <span id="inquiry-input-error">{inquiryError}</span>
            : null
          }
          <textarea id="inquiry-input" placeholder="Type Your Message Here" onChange={handleChange}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ContactForm;