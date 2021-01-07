import React from 'react'
import styles from  './styles.module.css';
import { Link } from 'react-router-dom';

export const Hero = () => {
    return (
        <div className={styles.hero}>
              <div className={styles.heroContent}>
                  <h1>Welcome to Luxury Residence</h1>
            <p>Find Perfect House From Your Area.</p>
            <Link to="/">View all properties</Link>
            </div>
            <div className={styles.heroForm}>
                 <form>
                     <div className={styles.formGroup}>
                     <select>
                         <option>Select Location</option>
                         <option value="GRA">GRA</option>
                         <option value="Adeniyi Jones">Adeniyi Jones</option>
                         <option value="Kofo Abayomi, Victoria Island">Kofo Abayomi, Victoria Island</option>
                     </select>
                     </div>
                     <div className={styles.formGroup}>
                     <Link className={styles.btns} to="/properties"><i className="material-icons">search</i>&nbsp;Search</Link>
                     </div>
                 </form>
            </div>
        </div>
    )
}
export default Hero;