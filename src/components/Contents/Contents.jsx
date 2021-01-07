import React from 'react';
import styles from  './styles.module.css';
import { Link } from 'react-router-dom';
import apt1 from '../../assets/montblancs5.jpeg';
import apt2 from '../../assets/montblancs6.jpeg';


const Content = () => {
  return (
      <div className={styles.containers}>
            <div className={styles.grid}>
       
            <div className={styles.card}>
            <h1>Luxury Residences</h1>
            <p>Locally inspired interiors and art, comfort-centric technology,
                and curated lifestyle programming combine to create an elevated residence</p>
                <p>Luxury Residences serviced amenities are curated for entertainment, productivity, and wellness.</p>
                <ul>
                    <li>VoLTE telephony to call free within the estate and call outside world at a below market rate.</li>
                    <li>Fully fitted kitchen with electronic inductive cooker alongside traditional gas cooker integrated with washing machine.</li>
                    <li>Waste treatment plant for greener environment</li>
                    <li>Sub Olympic size swimming pool with children paddle.</li>
                </ul>
                <Link to="/" className={styles.btn}>View More</Link>
            </div>

            <div className={styles.card}>
          <img src={apt1} alt="luxury residences" />
            </div>

            
            <div className={styles.card}>
            <img src={apt2} alt="luxury residences" />
            </div>

            

            
           
    
    </div>
    </div>
  );
}
export default Content;