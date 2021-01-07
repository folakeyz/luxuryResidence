import React from 'react';
import styles from './styles.module.css';
const Contacts = () => {
    return (
        <div>
       
                <div className={styles.grid}>
                <div className={styles.placeholder}>
                
                  
                    </div>
                    <div className={styles.form}>
                    <div className={styles.headingsection}>
<span className={styles.subheading}>GET IN TOUCH</span>
</div>
                    <form>
                    <div className={styles.formGroup}>
                <label>Fullname</label>
                 <input type="text" name="name" className="" /> 
                </div>
                <div className={styles.formGroup}>
                <label>Email</label>
                 <input type="email" name="email" className="" /> 
                </div>
                <div className={styles.formGroup}>
                <label>Mobile</label>
                 <input type="number" name="mobile" className="" /> 
                </div>
                <div className={styles.formGroup}>
                <label>Message</label>
                 <textarea name="msg" className=""></textarea> 
                </div>
                <div className={styles.formGroup}>
                 <input type="submit" name="submit" className={styles.btns} value="Send" /> 
                </div>
                    </form>
                    </div>
                </div>
           
        </div>
    )
}
export default Contacts;