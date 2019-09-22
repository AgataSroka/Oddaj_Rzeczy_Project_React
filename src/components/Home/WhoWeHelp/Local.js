import React, {Component} from 'react';
import '../../../scss/Home/Foundation/Foundation.scss';

class Foundation extends Component {
    constructor() {
        super();
        this.state = {
            foundations: [

                {
                    title: '"Lorem ipsum 1"',
                    mission: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    things: 'Quisque facilisis porttitor ullamcorper'
                },


                {
                    title: '"Lorem ipsum 2"',
                    mission: 'Maecenas facilisis vitae sapien sed ultrices.',
                    things: 'Cras sed tincidunt ipsum'
                },


                {
                    title: '"Lorem ipsum 3"',
                    mission: 'Etiam venenatis bibendum fermentum.',
                    things: 'Proin sed interdum est'
                }
            ],
            currentPage: 1,
            numbersPerPage: 3
        }
    }

    handleClick = (event, i) => {
        console.log('działa');
        this.setState({
            currentPage: i
        })
    };

    render() {
        const {foundations, currentPage, numbersPerPage} = this.state;
        const indexOfLast = currentPage * numbersPerPage;
        const indexOfFirst = indexOfLast - numbersPerPage;
        const currentFoundation = foundations.slice(indexOfFirst, indexOfLast);

        const elements = currentFoundation.map((foundation, i) => {
            return (
                <div className='main_text_5'>
                    <li key={i}>
                        <div className='title_mission'><h4> Zbiórka {foundation.title}</h4><span
                            className='text_mission'> Cel i misja: {foundation.mission}</span></div>
                        <div className='main_things'>
                            <span className='things'>{foundation.things}</span>
                        </div>
                    </li>
                    <hr style={{marginRight: '50px', marginTop: '30px'}}/>
                </div>

            )
        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(foundations.length / numbersPerPage); i++) {
            const element = <li key={i}
                                onClick={e => this.handleClick(e, i)}>{i}
            </li>;
            pageNumbers.push(element)
        }
        return <section className='main_4'>
            <ul>
                {elements}
            </ul>
            <ul style={{color: 'white'}} className='page_numbers border_click'>
                {pageNumbers}
            </ul>
        </section>
    }
}

export default Foundation