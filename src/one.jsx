import profilepic from './assets/profilepic.jpg'
import arr from './assets/arrow.png'
import { useState, useEffect } from 'react'
import Nav from './navBar.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './about.jsx'
import Projects from './projects.jsx'
import Skills from './skills.jsx'
import Achvmnts from './achv.jsx'
import UiUx from './uiux.jsx'
import Contact from './contact.jsx'

export default function DivI() {
    const [cover, setCover] = useState(true);
    useEffect(() => {
        AOS.init({
        duration: 1000,  
        offset: 50 
         });
        AOS.refresh();
    }, []);

    return (
        <>
            {cover ? (
                <>
                    <div className="grid grid-flow-col gap-20 relative top-0">
                        <div className='justify-start'>
                            <h5 className='text-heading text-3xl font-name font-medium leading-[1.5] mt-30'>Hi, I am </h5><br />
                            <h1 className='text-6xl text-nmeclr font-name -mt-8'>Priya Chauhan</h1><br />
                            <h5 className='text-heading text-3xl font-name'>Front-End & UI/UX </h5>
                        </div>
                        <div className='flex justify-end ml-50'>
                            <img className='h-80 rounded-4xl' src={profilepic} />
                        </div>
                    </div>
                    <img className='h-16 mx-auto bg-arrclr p-3 rounded-full absolute bottom-10 left-200 ' src={arr} onClick={() => setCover(false)} />
                </>
            )

                :
                (
                    <>
                        <div style={{ position: 'relative', zIndex: 10 }}>
                            <Nav />
                            <div style={{ mt: 50 }}>
                                <About />
                                <Projects />
                                <Skills />
                                <Achvmnts />
                                <UiUx />
                                <Contact />
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}