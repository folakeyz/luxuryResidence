import React from 'react';
import Heros from '../Heros/Heros';
import Cons from '../Cons/Cons';
import Flow from '../Flow/Flow';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';


export const Props = () => {
    return (
        <>
       <Heros title="Our Properties" />
       <Card />
       <Cons />
       <Flow />
       <Footer />
       </>
    )
}
export default Props;