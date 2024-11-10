// src/components/ContactForm/ContactForm.jsx
import React, { useState } from "react";
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() === '' || number.trim() === '') {
      alert('Please fill in both fields.');
      return;
    }
    onSubmit(name, number);
    setName('');
    setNumber('');
  };

  const handleKeyPress = (event) => {
    const charCode = event.keyCode;
    if (!(charCode >= 48 && charCode <= 57) && charCode !== 43) {
      event.preventDefault();
    }
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nameInput">Name</label>
        <input
          type="text"
          name="name"
          id="nameInput"
          required
          value={name}
          onChange={handleInputChange}
          className={styles.input}
          autoComplete="name"
        />
        <label htmlFor="numberInput">Number</label>
        <input
          type="tel"
          name="number"
          id="numberInput"
          required
          value={number}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          className={styles.input}
          autoComplete="tel"
        />
        <button type="submit" className={styles.button}>Add contact</button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;