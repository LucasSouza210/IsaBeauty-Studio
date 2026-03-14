import { IoMenu } from "react-icons/io5";
import logo from '../assets/images/heroLogo.png'
import { useContext } from "react";
import { Contexts } from "../ContextsProvider";

export default function Header() {

      const context = useContext(Contexts)
      const { overlay, setOverlay } = context!

    const links = [
        {
            title: 'About',
            src: '#about'
        },
        {
            title: 'Process',
            src: '#process'
        },
        {
            title: 'Reviews',
            src: '#reviews'
        },
        {
            title: 'Treatments',
            src: '#treatments'
        }
    ]

    return (
        <header className="w-full h-14 sm:h-15 md:h-16 lg:h-13 xl:h-15 2xl:h-16 flex items-center justify-between border-b px-8 sm:px-9 md:px-10 lg:px-40 xl:px-44 2xl:px-70 border-[#CF9F89]/50 bg-[#F6E0D7]">
            <img src={logo} alt="" className='h-5 sm:h-5.5 md:h-6 lg:h-5 xl:h-5.5 2xl:h-6' />
            <button className="size-5 sm:size-5.5 md:size-6 block lg:hidden" onClick={() => setOverlay(true)}>
                <IoMenu className="size-full text-zinc-700" />
            </button>
            <div className="hidden lg:flex items-center lg:gap-5 xl:gap-7.5 2xl:gap-8">
                { 
                    links.map((i, index) => (
                        <a href={i.src} key={index} className="scroll-smooth interFont font-medium lg:text-xs xl:text-sm 2xl:text-base leading-none tracking-widest xl:tracking-[0.15em] transition-all duration-200 cursor-pointer text-zinc-800 hover:text-zinc-900">
                            {i.title}
                        </a>
                    ))
                }
            </div>
        </header>
    )
}