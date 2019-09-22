import React, {Component} from 'react';
import '../../../scss/Home/Organization/Organization.scss';

class Organization extends Component{
    constructor(){
        super();
       this.state={
            organizations:[

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
                    things:  'consectetur adipiscing elit'
                },


                {
                    title: '"Lorem ipsum"',
                    mission: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in.',
                    things: 'lorem ipsum dolor sit amet'
                },

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
                   const {organizations, currentPage, numbersPerPage} = this.state;
                   const indexOfLast = currentPage * numbersPerPage;
                   const indexOfFirst = indexOfLast - numbersPerPage;
                   const currentOrganization = organizations.slice(indexOfFirst, indexOfLast);

                   const elements = currentOrganization.map((organization, i) => {
                       return(
                               <div className='main_text_5' >
                           <li  key={i}> <div className='title_mission'><h4> Organizacja {organization.title}</h4><span className='text_mission'> Cel i misja: {organization.mission}</span></div>
                            <div className='main_things'>
                           <span className='things'>{organization.things}</span>
                            </div>
                           </li>
                           <hr style={{marginRight: '50px', marginTop: '30px'}}/>
                               </div>

                       )
                   });

                   const pageNumbers = [];
                   for(let i=1; i <= Math.ceil(organizations.length/numbersPerPage); i++)
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
export default Organization