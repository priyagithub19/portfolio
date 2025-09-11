import news from './assets/news.png'
import newsweb from './assets/NewsWebsite.pdf'
import climateapi from './assets/climateapi.png'

const climateRepo = "https://github.com/priyagithub19/climate-app-API.git";

export default function Projects() {
  return (
    <>
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
    </>
  );
}