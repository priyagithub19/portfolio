import profilepic from './assets/profilepic.jpg'
import arr from './assets/arrow.png'
import { useState, useEffect } from 'react'
import news from './assets/news.png'
import newsweb from './assets/NewsWebsite.pdf'
import webh from './assets/Webh.jpg'
import Nav from './navBar.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import mypic from './assets/mypic.png'
import uiux1 from './assets/uiux1.png'
import uiux2 from './assets/uiux2.png'
import uiux3 from './assets/uiux3.png'
import uiux4 from './assets/uiux4.png'
import { FaWhatsapp } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import climateapi from './assets/climateapi.png'

const climateRepo = "https://github.com/priyagithub19/climate-app-API.git";

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

                                <div className="flex gap-20 mt-23 ml-23 pt-[100px]" id='aboutMe'>
                                    <div className='justify-start flex-initial md:flex-1 w-1/2 font-medium'>
                                        <h4 className='text-5xl mb-8 text-start text-about abt animate__animated animate__bounce' >About Me</h4>
                                        <p className='text-introclr text-2xl font-intro text-justify my-auto'>
                                            I am Priya Chauhan from Jamnagar. I am pursuing a Bachelor of Technology (B.Tech) in Computer Engineering at Marwadi University, Rajkot, Gujarat. With an expected graduation in May 2026 and a current CGPA is 7.69.<br /><br />
                                            Passionate about front-end and UI/UX design with skills in problem-solving.
                                        </p>
                                    </div>
                                    <div className='justify-end ml-50 md:flex-1 w-1/2'>
                                        <img className='h-80 rounded-4xl rotate-90' src={mypic} />
                                    </div>
                                </div>

                                <div className="flex gap-20 mt-23 pl-23 relative pt-[100px] " id='projects' data-aos="fade-up" >
                                    <div className='justify-start flex-initial md:flex-1 w-1/2 font-medium'>
                                        <h4 className='text-5xl text-start text-about abt'>Projects</h4>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex gap-20 justify-center pb-10'>
                                        <div className="max-w-sm rounded overflow-hidden shadow-xl mt-20 bg-stone-800 hover:scale-105 ">
                                            <img className="w-full" src={news} alt="Sunset in the mountains" />
                                            <div className="px-6 py-4">
                                                <div className="font-bold text-gray-100 text-xl mb-2">News Website</div>
                                                <p className="text-gray-300 text-base">
                                                    This is News Website cbuild using technologies: html, css. It contains specific news like News of india, Cities, Sports, Cricket, Lifestyle, education etc. There is a login page.
                                                </p>
                                            </div>
                                            <div className="px-6 pt-4 pb-2">
                                                <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#html</span>
                                                <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#news website</span>
                                                <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Bootstrap & JS</span>
                                            </div>
                                            <div className='mb-6'>
                                                <a className="inline-block bg-gray-700 rounded-xl px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2 cursor-pointer  mt-5" href={newsweb}>Show</a>
                                            </div>
                                        </div>
                                        <div className="max-w-sm rounded overflow-hidden shadow-lg mt-20 bg-stone-800 hover:scale-105">
                                            <img className="w-full" src={climateapi} alt="Sunset in the mountains" />
                                            <div className="px-6 py-4">
                                                <div className="font-bold text-gray-100 text-xl mb-2">Climate Api app</div>
                                                <p className="text-gray-300">
                                                    This website includes Climate News, before and After Impacts, Future Impacts, Climate Visualization and more.
                                                </p>
                                            </div>
                                            <div className="px-6 pt-4 pb-2">
                                                <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#react</span>
                                                <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#climate website</span>
                                                <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#API</span>
                                            </div>
                                            <div className='mb-6'>
                                                <a className="inline-block bg-gray-700 rounded-xl px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mt-5 cursor-pointer" href={climateRepo} target='_blank'><button>Show</button></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-25'>
                                        <p className='text-2xl text-white'>➡️ 'Blogy' is my current project, which is currently in development.</p>
                                    </div>
                                </div>
                                <div className="flex mt-23 ml-50 gap-20 justify-start flex-initial pt-[100px]" id='skills'>
                                    {/* <div className='justify-start flex-initial md:flex-1 w-1/2 font-medium my-auto'> */}
                                    <h4 className='text-5xl text-start text-about abt my-auto' data-aos="fade-right">Skills :-</h4>
                                    {/* </div> */}
                                    <div className='justify-start flex-initial md:flex-1 w-1/2 font-medium text-gray-300 text-justify'>
                                        <p>I have technical skills in front-end technologies including HTML, CSS, JavaScript (ES6+), React.js, Tailwind CSS. I am also proficient in REST APIs. In terms of programming languages, I am comfortable with JavaScript.</p>
                                        <br /><p>Alongside my technical abilities, I have soft skills such as problem-solving, time management, leadership, teamwork, and the ability to learn quickly and adapt to new skills.</p><br />
                                        <h6 className='text-3xl text-red-200'>Languages I Know:</h6><br />
                                        <p>I am fluent in Gujarati and Hindi, and I have a working proficiency in English as a second language.</p>
                                    </div>
                                </div>
                                <div className="flex mt-23 flex-col gap-20 justify-start flex-initial justify-center pt-[100px]" id='achievements'>
                                    <div className='justify-start ml-70 flex-initial md:flex-1 w-1/2 font-medium mt-auto'>
                                        <h4 className='text-5xl text-start text-about abt my-auto justify-center' data-aos="fade-left">Achievements</h4>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='justify-start w-1/3 flex-initial md:flex-1 font-medium text-gray-300 text-justify ml-100 infodiv'>
                                            <img src={webh} />
                                            <div className='relative -mt-28 opacity-0 bg-cercover info p-1 mr-1'>
                                                <p className='text-slate-300 text-2xl p-2'>Certificate of WebHorizon Compitition in University. "Gym Website" was a project task.</p>
                                            </div>
                                        </div>
                                        <p className='text-white text-2xl mt-4'>➡️ I have completed Bharatnatyam classes, I have given Exam of Navodaya School.</p>
                                   </div>
                                </div>
                                <div className="flex gap-20 mt-23 pl-23 relative pt-[120px] " id='UI/UX' data-aos="fade-up-left" >
                                    <div className='justify-start flex-initial md:flex-1 w-1/2 font-medium'>
                                        <h4 className='text-5xl text-start text-about abt' data-aos="fade-up" >Few UI/UX designs</h4>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex gap-20 justify-center pb-10'>
                                        <div className="max-w-sm rounded overflow-hidden w-90 shadow-lg mt-20 bg-stone-800 hover:scale-105 " data-aos="flip-left"
                                        data-aos-easing="ease-out-cubic"
                                        data-aos-duration="2000">
                                            <img className="w-full h-100" src={uiux1} alt="Sunset in the mountains" />
                                            <div className="px-6 py-4">
                                                <div className="font-bold text-gray-100 text-xl mb-2">Mobile cloth app</div>
                                            </div>
                                            <div className='mb-6'>
                                                <span className="inline-block bg-gray-700 rounded-xl px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mt-5"><a href='https://www.figma.com/proto/kbAESatN6PyfkZfECnSIjG/Cloth-App?node-id=8-2690&p=f&t=2OsA5PdCFKjH6QfH-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=366%3A247&show-proto-sidebar=1' target="_blank">Show</a></span>
                                            </div>
                                        </div>
                                        <div className="max-w-sm rounded overflow-hidden w-90 shadow-lg mt-20 bg-stone-800 hover:scale-105"  data-aos="flip-left"
                                        data-aos-easing="ease-out-cubic"
                                        data-aos-duration="2000">
                                            <img className="w-full h-100 object-fill" src={uiux2} alt="Sunset in the mountains" />
                                            <div className="px-6 py-4">
                                                <div className="font-bold text-gray-100 text-xl mb-2">slide animation</div>
                                            </div>
                                            <div className='mb-6'>
                                                <span className="inline-block bg-gray-700 rounded-xl px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mt-5"><a href='https://www.figma.com/proto/GWi3yXpoCv8r4ZjNh2PeKX/Untitled?node-id=0-1&p=f&t=pdDephxa9NFniQTf-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1' target="_blank">Show</a></span>
                                            </div>
                                        </div>
                                    </div>
                                     <div className='flex gap-20 justify-center pb-10'>
                                    <div className="max-w-sm rounded overflow-hidden w-90 shadow-lg mt-20 bg-stone-800 hover:scale-105"  data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000">
                                            <img className="w-full h-100 object-cover" src={uiux3} alt="Sunset in the mountains" />
                                            <div className="px-6 py-4">
                                                <div className="font-bold text-gray-100 text-xl mb-2">Fitness app splash screen animation</div>
                                            </div>
                                            <div className='mb-6'>
                                                <span className="inline-block bg-gray-700 rounded-xl px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mt-5"><a href='https://www.figma.com/proto/5SNvS6TiqI3iMpah3tVmPN/Untitled?node-id=3-27' target="_blank">Show</a></span>
                                            </div>
                                        </div>
                                        <div className="max-w-sm rounded overflow-hidden w-90 shadow-lg mt-20 bg-stone-800 hover:scale-105"  data-aos="flip-left"
                                        data-aos-easing="ease-out-cubic"
                                        data-aos-duration="2000">
                                            <img className="w-full h-100 object-cover" src={uiux4} alt="Sunset in the mountains" />
                                            <div className="px-6 py-4">
                                                <div className="font-bold text-gray-100 text-xl mb-2">Product ad animation</div>
                                            </div>
                                            <div className='mb-6'>
                                                <span className="inline-block bg-gray-700 rounded-xl px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mt-5"><a href='https://www.figma.com/proto/3iHTKmAXVEpM6J5D6z9I1t/Untitled?node-id=2-11&t=KbL6bfo0xm8QCXKJ-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1' target="_blank">Show</a></span>
                                            </div>
                                        </div>
                                        </div>
                                </div>
                                <div className="flex flex-col mb-23 ml-50 gap-20 justify-start flex-initial pt-[100px] " id='contact'>
                                    <h4 className='text-5xl text-center text-about abt my-auto w-fit mx-70 justify-center' data-aos="fade-right">Contact Me </h4>
                                    <div className='justify-center flex flex-initial ml-33 flex-row md:flex-1 w-1/2 font-medium text-gray-300 text-justify'>
                                        <span className='flex m-auto text-2xl hover:text-mail cursor-pointer mx-5' onClick={() => window.location = 'mailto:priyachauhan4824@gmail.com'}><MdEmail className='text-3xl mt-auto mr-3'/> priyachauhan4824@gmail.com</span>
                                        <a className='flex m-auto text-2xl hover:text-phn cursor-pointer mx-5 ' href='tel:+91-940-864-3001'><FaPhoneAlt className='text-3xl m-auto mr-3'/> +91&nbsp;9408643001 </a>
                                        <a className='flex m-auto text-2xl hover:text-whtapp cursor-pointer mx-5' href='tel:+91-940-864-3001'><FaWhatsapp className='text-3xl mt-auto mr-3'/> +91&nbsp;9408643001 </a>
                                        <a className='flex m-auto text-2xl hover:text-git cursor-pointer mx-5' href='https://github.com/priyagithub19' target='_blank'><FaGithub className='text-3xl mt-auto mr-3'/> priyagithub19 </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}