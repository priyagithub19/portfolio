import webh from './assets/Webh.jpg'

export default function Achvmnts() {
  return (
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
  );
}