import React from 'react';
import apt1 from '../../assets/coming.png';
import apt2 from '../../assets/montblancs.jpeg';
// import apt3 from '../../assets/luxury6.jpeg';
import styles from  './styles.module.css';


const MediaCard = () => {
  return (
      <div className={styles.containers}>
           <div className={styles.headingsection}>
<span className={styles.subheading}>What we offer</span>
<h1>FEATURED  PROPERTIES</h1>
</div>
            <div className={styles.grid}>
       
            <div className={styles.myCard}>
            <div className={styles.myPix}>
                <div className={styles.smCaption}><small>The Gleen Residence</small></div>
                <a href="https://glenn.luxuryresidences.ng/">
                <img src={apt2} alt="The Gleen Residence" />
                </a>
                </div> 
                <div className={styles.myText}>
                <h4> The Gleen Residence</h4>
                <small>Location: GRA Ikeja</small>
                <hr className={styles.line} />
                <a href="https://glenn.luxuryresidences.ng/" className={styles.btn}>View</a>
                </div> 
            </div>

            <div className={styles.myCard}>
            <div className={styles.myPix}>
               <div className={styles.smCaption}><small>MontBlanc Flats</small></div>
               <a href="https://montblancs.luxuryresidences.ng/">
                <img src={apt1} alt="Mont Blanc Flats" />
                </a>
                </div> 
                <div className={styles.myText}>
                <h4> MontBlanc Flats</h4>
                <small>Location: Kofo Abayomi Street, Victoria Island</small>
                <hr className={styles.line} />
                <a href="https://montblancs.luxuryresidences.ng/" className={styles.btn}>View</a>
                </div> 
            </div>

            
            <div className={styles.myCard}>
            <div className={styles.myPix}>
            <div className={styles.smCaption}><small>Viagem Terraces</small></div>
            <a href="https://viagem.luxuryresidences.ng/">
                <img src={apt1} alt="Viagem Terraces" />
                </a>
                </div> 
                <div className={styles.myText}>
                <h4>Viagem Terraces</h4>
                <small>Location: Adeniyi Jones Street, Ikeja</small>
                <hr className={styles.line} />
                <a href="https://viagem.luxuryresidences.ng/" className={styles.btn}>View</a>
                </div> 
            </div>


    
    </div>
    </div>
  );
}
export default MediaCard;