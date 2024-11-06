import React from 'react';
import styles from './Navbar.module.css';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.brand}>
        <h1>PALM <br /> JEBEL ALI</h1>
      </div>
      <div className={styles.contact}>
        <a href="tel:+971585964631" className={styles.phone}>
          <FaPhoneAlt />
          <span className={styles.text}>+971 58 596 4631</span>
        </a>
        <a href="https://wa.me/971585964631" target="_blank" rel="noopener noreferrer" className={styles.whatsapp}>
          <FaWhatsapp />
          <span className={styles.text}>+971 58 596 4631</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
