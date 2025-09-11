import { FaWhatsapp } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

export default function Contact() {
  return (
    <div className="flex flex-col mb-23 ml-50 gap-20 justify-start flex-initial pt-[100px] " id='contact'>
        <h4 className='text-5xl text-center text-about abt my-auto w-fit mx-70 justify-center' data-aos="fade-right">Contact Me </h4>
        <div className='justify-center flex flex-initial ml-33 flex-row md:flex-1 w-1/2 font-medium text-gray-300 text-justify'>
            <span className='flex m-auto text-2xl hover:text-mail cursor-pointer mx-5' onClick={() => window.location = 'mailto:priyachauhan4824@gmail.com'}><MdEmail className='text-3xl mt-auto mr-3'/> priyachauhan4824@gmail.com</span>
            <a className='flex m-auto text-2xl hover:text-phn cursor-pointer mx-5 ' href='tel:+91-940-864-3001'><FaPhoneAlt className='text-3xl m-auto mr-3'/> +91&nbsp;9408643001 </a>
            <a className='flex m-auto text-2xl hover:text-whtapp cursor-pointer mx-5' href='tel:+91-940-864-3001'><FaWhatsapp className='text-3xl mt-auto mr-3'/> +91&nbsp;9408643001 </a>
            <a className='flex m-auto text-2xl hover:text-git cursor-pointer mx-5' href='https://github.com/priyagithub19' target='_blank'><FaGithub className='text-3xl mt-auto mr-3'/> priyagithub19 </a>
        </div>
    </div>
  );
}