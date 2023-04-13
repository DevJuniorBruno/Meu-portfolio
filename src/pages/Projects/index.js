import './projects.css';
import mobileVet from '../../assets/img/packatualizado.png';

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
                <div className='subscriptions' >
                    <p>
                      Here you will find some of my projects and personal characteristics.
                    </p>
                </div>
               </div>
               

            </div>
        </div>
    )
}

export default Projects;