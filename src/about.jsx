import mypic from './assets/mypic.png'

export default function About() {
  return (
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
  );
}