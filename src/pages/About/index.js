import './about.css';
import {Link} from 'react-router-dom';

function About() {
    return(
        <div className='container'>
            <div className="containerAbout" >
           <div className='titleAbout'>
            <h1>
                ABOUT ME
            </h1> 
            <div className='line'></div>

            <div className='paragraphAbout' >
                <p>
            Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
                </p>
            </div>

            <main className='main' > 
                <div className='aboutLeft'>
                    <h2>
                        Het to know me!    
                    </h2>

                    <p>
                    I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section. 
                    </p>

                    <p>
                    I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming
                    </p>

                    <p>
                    I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.  
                    </p>

                    <Link to='contact'><button className='buttonContact'>Contact</button></Link>
                </div>

                <div className='aboutRight'>
                <h2>
                My Skills
                </h2>
                <div className='skillsContainer'>
                <div className='skills'>Html</div>
                <div className='skills'>Css</div>
                <div className='skills'>SASS</div>
                <div className='skills'>Javascript</div>
                <div className='skills'>Git</div>
                <div className='skills'>Github</div>
                <div className='skills'>ReactJS</div>
                <div className='skills'>Typescript</div>
                <div className='skills'>NextJS</div>
                <div className='skills'>NodeJs</div>
                <div className='skills'>Express Basics</div>
                <div className='skills'>Schemas SQL</div>
               
                <div className='skills'>Responsive Design</div>
                <div className='skills'>Terminal</div>
                
                <div className='skills'>PostgreeSQL</div>
                </div>
                </div>
            </main>

           </div>
        </div>
        </div>
        
      
    )
}

export default About;