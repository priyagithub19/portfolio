import uiux1 from './assets/uiux1.png'
import uiux2 from './assets/uiux2.png'
import uiux3 from './assets/uiux3.png'
import uiux4 from './assets/uiux4.png'

export default function UiUx() {
  return (
    <>
    <div className="flex gap-20 mt-23 pl-23 relative pt-[120px] " id='UI/UX' data-aos="fade-up-left" >
        <div className='justify-start flex-initial md:flex-1 w-1/2 font-medium'>
            <h4 className='text-5xl text-start text-about abt' data-aos="fade-up" >Few UI/UX designs</h4>
        </div>
    </div>
    <div>
        <div className='flex gap-20 justify-center pb-10 '>
            <div className="max-w-sm rounded overflow-hidden w-90 shadow-lg mt-20 bg-gray-600 hover:scale-105 " data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
                <img className="w-full h-100" src={uiux1} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-gray-100 text-xl mb-2">Mobile cloth app <br/>(iphone16 frame)</div>
                </div>
                <div className='mb-6'>
                    <span className="inline-block bg-gray-700 rounded-xl px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mt-5"><a href='https://www.figma.com/proto/kbAESatN6PyfkZfECnSIjG/Cloth-App?node-id=8-2690&p=f&t=2OsA5PdCFKjH6QfH-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=366%3A247&show-proto-sidebar=1' target="_blank">Show</a></span>
                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden w-90 shadow-lg mt-20 bg-gray-600 hover:scale-105"  data-aos="flip-left"
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
        <div className="max-w-sm rounded overflow-hidden w-90 shadow-lg mt-20 bg-gray-600 hover:scale-105"  data-aos="flip-left"
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
            <div className="max-w-sm rounded overflow-hidden w-90 shadow-lg mt-20 bg-gray-600 hover:scale-105"  data-aos="flip-left"
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
    </>
  );
}