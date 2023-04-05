import './home.css';
import {Helmet} from 'react-helmet';
import React, { useRef} from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Typical from 'react-typical';

 function Home(){

    const secondSectionRef = useRef(null);
    const firstSectionRef = useRef(null);

  const handleClickToSecondeSection = () => {
    secondSectionRef.current.scrollIntoView({ behavior: "smooth" });
    firstSectionRef.current.scrollIntoView({behavior: "smooth" })
  };



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

                   

                       <Typical
                       
                       steps={[
                        'HI, IM BRUNO ROSA',
                        5000
                       ]}
                       loop={Infinity}
                       wrapper='h1'
                       delay={100000000}
                       />

                        <p>
                        A Fullstackjr professional qualified to understand and act in all layers of the development  of a project,  </p>
                        <p>  from the creation of internal servers to the communication interfaces with the end user.
                        </p>
                    </div>
                   
                        
 
                   
                    
                  
               </section>
            </div>
        </>
    )
}
export default Home;
