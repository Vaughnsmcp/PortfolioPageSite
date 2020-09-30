import React from 'react';
import Jumbo from '../components/Jumbo';
import Resume from '../assets/images/resume.png';

function ResumePage(props) {

    return(
        <div>
            <Jumbo title={props.title} />
            <img src={Resume} alt='Resume' style={{marginLeft: 550}} height={1100} width={800}/>

            
        </div>
    );
}
    
    
    export default ResumePage;