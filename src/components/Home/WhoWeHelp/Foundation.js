import React, {Component} from 'react';
import '../../../scss/Home/Foundation/Foundation.scss';

class Foundation extends Component{
    constructor(){
        super();
       this.state={
            foundations:[

                { title: '"Dbam o zdrowie"',
                  mission: 'pomoc osobom znajdującym się w trudnej sytuacji życiowej',
                  things: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
                },


                {
                   title:   '"Dla dzieci"',
                    mission: 'Pomoc dzieciom z ubogich rodzin',
                    things:  'ubrania, meble, zabawki'
                },


                {
                    title: '"Bez domu"',
                    mission: 'Pomoc dla osób nie posiadającychmiejsca zamieszkania.',
                    things: 'ubrania,jedzenie, ciepłe koce'
                },
                {   title: '"Lorem ipsum"',
                    mission: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in.',
                    things: 'lorem ipsum dolor sit amet'
                },


                {
                    title:  '"Lorem ipsum"',
                    mission: 'Pomoc dzieciom z ubogich rodzin',
                    things:  'lorem ipsum dolor sit amet, consectetur adipiscing elit'
                },


                {
                    title: '"Lorem ipsum"',
                    mission: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in.',
                    things: 'lorem ipsum dolor sit amet'
                },
                { title: '"Lorem ipsum"',
                    mission: 'pomoc osobom znajdującym się w trudnej sytuacji życiowej',
                    things: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
                },


                {
                    title:  '"Lorem ipsum"',
                    mission: 'Pomoc dzieciom z ubogich rodzin',
                    things:  'ubrania, meble, zabawki'
                },


                {
                    title: '"Lorem ipsum"',
                    mission: 'Pomoc dla osób nie posiadającychmiejsca zamieszkania.',
                    things: 'ubrania,jedzenie, ciepłe koce'
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
    render(){
        const {foundations, currentPage, numbersPerPage} = this.state;
        const indexOfLast = currentPage * numbersPerPage;
        const indexOfFirst = indexOfLast - numbersPerPage;
        const currentFoundation = foundations.slice(indexOfFirst, indexOfLast);

        const elements = currentFoundation.map((foundation, i) => {
            return(
                    <div className='main_text_5' >
                <li  key={i}> <div className='title_mission'><h4> Fundacja {foundation.title}</h4><span className='text_mission'> Cel i misja: {foundation.mission}</span></div>
                 <div className='main_things'>
                <span className='things'>{foundation.things}</span>
                 </div>
                    <hr style={{marginRight: '50px'}}/>
                </li>
                    </div>

            )
        });

        const pageNumbers = [];
        for(let i=1; i <= Math.ceil(foundations.length/numbersPerPage); i++)
        {
            const element = <li key={i}
            onClick={e => this.handleClick(e, i)}>{i}
            </li>;
            pageNumbers.push(element)
        }
        return <section className='main_4'>
            <ul>
                {elements}
            </ul>
            <ul className='page_numbers'>
                {pageNumbers}
            </ul>
        </section>
    }
}
export default Foundation