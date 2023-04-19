import './projects.css';
import mobileVet from '../../assets/img/packatualizado.png';
import underContruction from '../../assets/img/underContruction.webp';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


function Projects(){
    return(
        <div className='container'>
            <div className='projects'>
                <div className='titleProjects'>
                    <h1>
                        PROJECTS
                    </h1>
                </div>
                <div className='line'></div>
                <div className='paragraphAbout' >
                    <p>
                    Here you will find some of my projects and personal characteristics.
                    </p>
                </div>

               <div className='projectsContainer'>
                <div className='imgs' >
                <img className='webVet' src={ mobileVet } alt="webVet" />
                </div>

                <a href='https://veterinaria-e-petshop.vercel.app/' target='_blank' className='buttonMoreSee'>
                    View more
                </a>

                <h1>
                    Under Contruction
                </h1>

                <img className='underConstruction' src={underContruction} alt='Under Construction' />

                <a href='https://veterinaria-e-petshop.vercel.app/' target='_blank' className='buttonUnderContruction'>
                   Under Contruction
                </a>

               </div>

               <div className='socialRedesProjects' >
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
        </div>
    )
}

export default Projects;