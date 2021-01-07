import React from 'react';
import Heros from '../Heros/Heros';
import Contacts from '../Contact/Contact';
import Footer from '../Footer/Footer';


export const Contact = () => {
    return (
        <>
       <Heros title="Contact US" />
       <Contacts />
       <Footer />
       </>
    )
}
export default Contact;