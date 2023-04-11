import './home.css';
import {Helmet} from 'react-helmet';
import React,  {useState, useRef} from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Typical from 'react-typical';
import { Link } from 'react-router-dom';

 function Home(){

    return(
        <>
        <Helmet>
        <title>Bruno Rosa | BrunoCodes | FullstackJr Developer</title>
        </Helmet>
            <div>
               <section className='container' >

               <div className='socialRedes' >
                        <div>
                           <a href='https://github.com/DevJuniorBruno' target='_blank' >
                            <FaGithub size='32px' color="#000" />
                            </a>
                        </div>

                        <div>
                           <a href='https://www.linkedin.com/in/bruno-rosa-6956871b5/' target='_blank' >
                            <FaLinkedin size='32px' color='#000' />
                           </a>
                        </div>

                        <div>
                            teste
                        </div>

                    </div>
                    <div className='home'>

                        <div className='h1'>
                            <h1>
                                HI, IM BRUNO ROSA
                            </h1>
                        </div>

                       <Typical
                       className='typical'
                       steps={[
                        'HI, IM BRUNO ROSA',
                        5000
                       ]}
                       delay={10000}
                       wrapper='h1'
                       style={{ willChange: 'transform' }}
                        />
                        <div className='paragraph' >
                            <p>
                        A Fullstackjr professional qualified to understand and act in all layers of the development  of a project,  </p>
                        <p>  from the creation of internal servers to the communication interfaces with the end user.
                        </p>  
                        </div>
                       

                       <Link to='projects'> <button className='buttonProjects' > PROJECTS </button> </Link>

                     <div className='socialRedesAfter' >
                        <div>
                           <a href='https://github.com/DevJuniorBruno' target='_blank' >
                            <FaGithub size='32px' color="#000" />
                            </a>
                        </div>

                        <div>
                           <a href='https://www.linkedin.com/in/bruno-rosa-6956871b5/' target='_blank' >
                            <FaLinkedin size='32px' color='#000' />
                           </a>
                        </div>

                        <div>
                            teste
                        </div>

                    </div>

                   
                      
                    </div>
                   
                        
 
                   
                    
                  
               </section>
            </div>
        </>
    )
}
export default Home;
