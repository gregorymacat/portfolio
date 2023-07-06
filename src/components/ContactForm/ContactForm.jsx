import React, {useState} from 'react';
import './ContactForm.css';

function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiry, setInquiry] = useState('');

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

  const handleSubmit = (event) => {
    event.preventDefault();
    //TODO Send email with this information in it to me
    console.log('Name: ', firstName, ' ', lastName);
    console.log('Email: ', email);
    console.log('Message: ', inquiry);
  }
  
  return (
    <div className="contact-container">
      <h1>Have Any Questions?</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="name-inputs">
          <input id="first-name-input" placeholder="First Name" onChange={handleChange}></input>
          <input id="last-name-input" placeholder="Last Name" onChange={handleChange}></input>
        </div>
        <input id="email-input" placeholder="Email" onChange={handleChange}></input>
        <input id="inquiry-input" type="text-area" placeholder="Type Your Message Here" onChange={handleChange}></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ContactForm;