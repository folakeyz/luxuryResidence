import React from 'react';
import Heros from '../Heros/Heros';
import Content from '../Contents/Contents';
import Footer from '../Footer/Footer';


export const Page = () => {
    return (
        <>
       <Heros title="About Us" />
       <Content />
       <Footer />
       </>
    )
}
export default Page;