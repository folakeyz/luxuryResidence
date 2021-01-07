import React from 'react';
import styles from  './styles.module.css';
import '../flaticon.css';

export const Cons = () => {
    return (
        <div className={styles.container}>
              <div className={styles.grid}>
              <div className={styles.card}>
                    <div className={styles.icon}>  
                        <span className="flaticon-business"></span>
                    </div>
                    <div className={styles.text}>  
                    <h3>Trusted by Thousands</h3>
                        <p>Our clients and partners see us as more than a Real Estate Agency. 
                        We build and cultivate strong relations, so that every need is met</p>
                    </div>
                </div>
                <div className={styles.card2}>
                    <div className={styles.icon}>  
                    <span className="flaticon-home"></span>
                    </div>
                    <div className={styles.text}>  
                    <h3>Wide Range of Properties</h3>
                        <p>Luxury Residences offers a wide range of properties to home buyers</p>
                    </div>
                </div>
                <div className={styles.card3}>
                    <div className={styles.icon}>  
                    <span className="flaticon-stats"></span>
                    </div>
                    <div className={styles.text}>  
                    <h3>Financing Made Easy</h3>
                        <p>Financing is made easy at Luxury Residences</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.icon}>  
                    <span className="flaticon-quarantine"></span>
                    </div>
                    <div className={styles.text}>  
                    <h3>Locked in Pricing</h3>
                        <p>
                     </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cons;