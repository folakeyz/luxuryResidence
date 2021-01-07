import React from 'react';
import Hero from '../Hero/Hero';
import Cons from '../Cons/Cons';
import MediaCard  from '../Card/Card';
import Flow from '../Flow/Flow';
import Content from '../Contents/Contents';
import Footer from '../Footer/Footer';


export const Home = () => {
    return (
        <>
       <Hero />
       <Cons />
       <MediaCard />
       <Flow />
       <Content />
       <Footer />
       </>
    )
}
export default Home;