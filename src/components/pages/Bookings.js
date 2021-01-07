import React from 'react';
import Heros from '../Heros/Heros';
import Content from '../Contents/Contents';
import Booking from '../Booking/Booking';
import Footer from '../Footer/Footer';


export const Contact = () => {
    return (
        <>
       <Heros title="Contact US" />
       <Booking />
       <Content />
       <Footer />
       </>
    )
}
export default Contact;