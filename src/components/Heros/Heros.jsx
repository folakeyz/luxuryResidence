import React from 'react'
import styles from  './styles.module.css';
import { Link } from 'react-router-dom';

export const Heros = (props) => {
    return (
        <div className={styles.hero}>
           <h1>{props.title}</h1>
          
        </div>
    )
}
export default Heros;