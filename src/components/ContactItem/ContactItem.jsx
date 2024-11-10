// src/components/ContactItem/ContactItem.jsx
import React from "react";
import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';

const ContactItem = ({ name, number, onDelete }) => (
  <li className={styles.item}>
    {name}: {number}
    <button onClick={onDelete} className={styles.deleteButton}>Delete</button>
  </li>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;