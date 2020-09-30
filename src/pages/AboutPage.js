import React from 'react';
import Jumbo from '../components/Jumbo';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Jumbo title={props.title} />

            <Content>
                <p>Hello, my name is Vaughn McPherson. I am a recent graduate of the Trilogy Bootcamp program through the University of Washington. I am very excited to open my next chapter in the field of full stack web development. I would love to become a part of your team. When I'm not honing my newly acquired coding skills, you can find me at the piano, cooking up a storm, playing my favorite retro games, or just relaxing with my pup. My dream is to eventually work in the gaming industry programming and composing soundtracks on the side. Thank you for visiting my portfolio page.</p>


            </Content>
        </div>
    );
}
    
    
    export default AboutPage;