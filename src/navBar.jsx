import { Link } from "react-scroll";
import lg from './assets/P.png'
import 'animate.css';


export default function Nav() {
    
    return (
        <>
            <div>
                <nav className='navbar rounded-b-3xl w-300 h-20 flex fixed top-0 px-10 py-3 items-center justify-between rounded-b-3xl z-10' offset={-96}>
                    <div className='my-auto'>
                        <img className='w-17 rounded-full ml-25' src={lg} />
                    </div>
                    <div className='ml-100 my-auto'>
                        <ul className='flex gap-9 font-medium text-lg text-slate-800 cursor-pointer'>
                            <Link to="aboutMe" smooth={true} duration={500}  className="nav-link abt m-auto">About Me</Link>
                            <Link to="projects" smooth={true} duration={500}  className="nav-link abt m-auto">Projects</Link>
                            <Link to="skills" smooth={true} duration={500}  className="nav-link abt m-auto">Skills</Link>
                            <Link to="achievements" smooth={true} duration={500}  className="nav-link abt m-auto">Acheivements</Link>
                            <Link to="UI/UX" smooth={true} duration={500}  className="nav-link abt m-auto">UI/UX</Link>
                            <Link to="contact" smooth={true} duration={500} className="nav-link abt m-auto">Contact</Link>                            
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}
