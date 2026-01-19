import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

     if (name !== '' && email !== '' && message !== '') {
       var templateParams = {
         name: name,
         email: email,
         message: message
       };

      console.log(templateParams);

      emailjs.send('service_mi56m48', 'template_ee4vea9', templateParams, 'paR32iJbKzUwmN96t').then(
         (response) => {
           console.log('SUCCESS!', response.status, response.text);
         },
         (error) => {
           console.log('FAILED...', error);
         },
       );
       setName('');
       setEmail('');
       setMessage('');
     }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <input
                type="text"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  console.log('Name changed:', e.target.value);
                  setName(e.target.value);
                }}
                style={{
                  width: '100%',
                  padding: '10px',
                  fontSize: '1rem',
                  color: '#000',
                  backgroundColor: '#fff',
                  border: '1px solid #ccc'
                }}
              />
              <input
                type="text"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                style={{
                  width: '100%',
                  padding: '10px',
                  fontSize: '1rem',
                  color: '#000',
                  backgroundColor: '#fff',
                  border: '1px solid #ccc'
                }}
              />
            </div>
            <textarea
              placeholder="Send me any inquiries or questions"
              rows={10}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              style={{
                width: '100%',
                padding: '10px',
                fontSize: '1rem',
                color: '#000',
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                marginBottom: '15px'
              }}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;