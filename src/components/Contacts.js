import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com'; // Ensure emailjs is installed

const ContactContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem;
  background-color: #f0f0f0;
  color: #333;
  font-family: 'Arial', sans-serif;
`;

const ContactInfo = styled.div`
  flex: 1;
  min-width: 300px;
  margin-right: 2rem;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ContactForm = styled.div`
  flex: 2;
  min-width: 300px;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

const FormTextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #282c34;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #21a0f6;
  }
`;

const DownloadButton = styled.a`
  display: inline-block;
  text-decoration: none;
  padding: 0.5rem 1rem;
  background-color: #282c34;
  color: #ffffff;
  border-radius: 5px;
  font-size: 1rem;
  margin-top: 1rem;
  &:hover {
    background-color: #21a0f6;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        e.target,
        'YOUR_USER_ID'
      )
      .then(
        (result) => {
          setSuccessMessage('Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setErrorMessage('Failed to send message. Please try again.');
        }
      );
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <ContactContainer id="contact">
      <ContactInfo>
        <h2>Contact Information</h2>
        <p>Email: rightmazolo2@gmail.com</p>
        <p>Phone: (+265) 883 252 419</p>
        <DownloadButton href="/Right Mazolo_CV.pdf" download>
          Download Resume
        </DownloadButton>
      </ContactInfo>
      <ContactForm>
        <h2>Contact Form</h2>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormInput
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="message">Message</FormLabel>
            <FormTextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            />
          </FormGroup>
          <ButtonContainer>
            <Button type="submit">Send Message</Button>
            <Button type="button" onClick={handleClear}>
              Clear
            </Button>
          </ButtonContainer>
        </form>
        {successMessage && <p>{successMessage}</p>}
        {errorMessage && <p>{errorMessage}</p>}
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
