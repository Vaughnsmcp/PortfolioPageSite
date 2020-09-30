import React from 'react';

import Jumbo from '../components/Jumbo';
import Headshot from '../assets/images/headshot.png' 

function HomePage(props){

    return(
        <div>
        <Jumbo title={props.title} subTitle={props.subTitle} text={props.text}/>
        <img src={Headshot} alt='Headshot' style={{marginLeft: 595}} height={495} width={365}/>
        </div>
    );
}
    
    
    export default HomePage;
