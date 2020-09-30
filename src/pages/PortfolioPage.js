import React from 'react';

import Jumbo from '../components/Jumbo';
import Carousel from '../components/Carousel';

function PortfolioPage(props) {

    return(
        <div>
            <Jumbo title={props.title} text={props.text} />
            <Carousel />
        </div>
    );

}

export default PortfolioPage;