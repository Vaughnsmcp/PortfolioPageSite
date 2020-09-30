import React from 'react';



import eventify from '../assets/images/eventify.png';
import dice from '../assets/images/dice.png';
import notes from '../assets/images/notes.png';
import fitness from '../assets/images/fitness.png';
import book from '../assets/images/book.png';
import planner from '../assets/images/planner.png';
import directory from '../assets/images/directory.png';
import budget from '../assets/images/budget.png';
import team from '../assets/images/team.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from '../components/Card';


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Eventify Your Map',
                    subTitle: 'My first group project',
                    imgSrc: eventify,
                    link: 'https://github.com/FrantzCFelix/Eventify-your-map',
                    selected: false
                },
                {
                    id: 1,
                    title: 'D&D Character Generator',
                    subTitle: 'My second group project',
                    imgSrc: dice,
                    link: 'https://chargenproj.herokuapp.com/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Day Planner',
                    subTitle: 'Plan your day in hourly increments',
                    imgSrc: planner,
                    link: ' https://vaughnsmcp.github.io/HW5_DayPlanner/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Fitness Tracker',
                    subTitle: 'Track your weekly routine',
                    imgSrc: fitness,
                    link: 'https://powerful-wave-84543.herokuapp.com/exercise?id=5e87eda0df3df3169e4803a4',
                    selected: false
                },
                {
                    id: 4,
                    title: 'React Book Search',
                    subTitle: 'Create a reading list via Google',
                    imgSrc: book,
                    link: 'https://github.com/Vaughnsmcp/Unit21_HW_Google_Book_Search',
                    selected: false
                },
                
               
                {
                    id: 5,
                    title: 'Employee Directory',
                    subTitle: 'Keep in touch with your team using React',
                    imgSrc: directory,
                    link: 'https://sleepy-ocean-07701.herokuapp.com/',
                    selected: false
                },
                {
                    id: 6,
                    title: 'Note Taker',
                    subTitle: 'A simple note taking app',
                    imgSrc: notes,
                    link: 'https://github.com/Vaughnsmcp/Unit11HW_Express',
                    selected: false
                },
                {
                    id: 7,
                    title: 'Progressive Budget',
                    subTitle: 'Manage your budget with this PWA',
                    imgSrc: budget,
                    link: 'https://github.com/Vaughnsmcp/Unit18_Budget_Tracker',
                    selected: false
                },
                {
                    id: 8,
                    title: 'Team Profile Generator',
                    subTitle: 'Create your team with OOP',
                    imgSrc: team,
                    link: 'https://sleepy-ocean-07701.herokuapp.com/',
                    selected: false
                },
                
            ]

        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

        
    

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>

            </Container>
        );
        
    }
}



export default Carousel;