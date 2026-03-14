import { IoClose } from "react-icons/io5";
import logo from '../assets/images/heroLogo.png'

type Props = {
    open: boolean | undefined
    setMenu: React.Dispatch<React.SetStateAction<boolean | undefined>>
}

export default function Menu(props: Props) {

    const links = [
        {
            title: 'About',
            src: '#about'
        },
        {
            title: 'How it works',
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
        <div className={`w-50 sm:w-56 md:w-62 min-h-full flex flex-col items-center gap-10 sm:gap-11 md:gap-12 absolute right-0 top-0 border-l transition-all duration-300 py-10 sm:py-11 md:py-12 bg-[#F6E0D7] border-[#CF9F89]/50 ${props.open ? "translate-x-0" : "translate-x-full"}`} onClick={(e) => e.stopPropagation()}>
            <img src={logo} alt="" className="h-6 md:h-8"/>
            <div className="flex flex-col items-center gap-6 sm:gap-6.5 md:gap-7">
                {
                    links.map((i, index) => (
                        <a className="interFont font-medium text-base sm:text-[17px] md:text-lg leading-none tracking-wide transition-all duration-200 cursor-pointer text-zinc-800 hover:text-zinc-900" href={i.src} key={index} onClick={(e) => {
                            e.preventDefault()
                            props.setMenu(false)
                            const el = document.querySelector(i.src)
                            const container = document.querySelector('.scroll-container')
                            if (el && container) {
                                container.scrollTo({
                                    top: (el as HTMLElement).offsetTop,
                                    behavior: "smooth"
                                })
                            }
                        }}>{i.title}</a>
                    ))
                }
            </div>
            <button className="group cursor-pointer" onClick={() => props.setMenu(false)}>
                <IoClose className="size-5 sm:size-6 md:size-7 transition-all duration-300 fill-zinc-700 group-hover:fill-zinc-800" />
            </button>
        </div>
    )
}