import React from 'react';
import styles from  './styles.module.css';


const Flow = () => {
  return (
      <div className={styles.containers}>
           <div className={styles.headingsection}>
<span className={styles.subheading}>WORK FLOW</span>
<h1>How it works</h1>
</div>
            <div className={styles.grid}>
       
            <div className={styles.card}>
            <div className={styles.hex}>
                <h3>01</h3>
            </div>
            <h3>Schedule an Appointment</h3>
            <p>You can schedule an appointment online for property evaluation </p>
            </div>

            <div className={styles.card}>
            <div className={styles.hex}>
                <h3>02</h3>
            </div>
            <h3>Evaluate Property</h3>
            <p>Evaluate the property on Site </p>
            </div>

            
            <div className={styles.card}>
            <div className={styles.hex}>
                <h3>03</h3>
            </div>
            <h3>Close the Deal</h3>
            <p>Talk to our Agents</p>
            </div>

            <div className={styles.card}>
            <div className={styles.hex}>
                <h3>04</h3>
            </div>
            <h3>Have Your Property</h3>
            <p>Get your Keys</p>
            </div>

            

            
           
    
    </div>
    </div>
  );
}
export default Flow;