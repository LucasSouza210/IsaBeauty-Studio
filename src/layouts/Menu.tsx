import { useContext } from "react";
import { Contexts } from "../ContextsProvider";
import { IoClose } from "react-icons/io5";
import logo from '../assets/images/heroLogo.png'
import LanguageButton from "../components/LanguageButton";
import { useTranslate } from "../Translations";

export default function Menu() {

    const context = useContext(Contexts)
    const { overlay, setOverlay, langOpen, setLangOpen } = context!

    const translate = useTranslate()

    const links = [
        {
            title: translate('firstLink').line(),
            src: '#about'
        },
        {
            title: translate('secondLink').line(),
            src: '#process'
        },
        {
            title: translate('thirdLink').line(),
            src: '#reviews'
        },
        {
            title: translate('fourthLink').line(),
            src: '#treatments'
        }
    ]

    return (
        <div className={`w-50 sm:w-56 md:w-62 min-h-full flex flex-col items-center gap-10 sm:gap-11 md:gap-12 absolute right-0 top-0 border-l transition-all duration-300 py-10 sm:py-11 md:py-12 bg-[#F6E0D7] border-[#CF9F89]/50 ${overlay ? "translate-x-0" : "translate-x-full"}`} onClick={(e) => {
            e.stopPropagation()
            langOpen && setLangOpen(false)
        }}>
            <img src={logo} alt="" className="h-6 md:h-8" />
            <div className="flex flex-col items-center gap-6 sm:gap-6.5 md:gap-7">
                {
                    links.map((i, index) => (
                        <a className="interFont font-medium text-base sm:text-[17px] md:text-lg leading-none tracking-wide transition-all duration-200 cursor-pointer text-zinc-800 hover:text-zinc-900" href={i.src} key={index} onClick={(e) => {
                            e.preventDefault()
                            setOverlay(false)
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
            <div className="flex flex-col items-center gap-5 sm:gap-5.5 md:gap-6">
                <LanguageButton />
                <button className="group cursor-pointer" onClick={() => setOverlay(false)}>
                    <IoClose className="size-5 sm:size-6 md:size-7 transition-all duration-300 fill-zinc-700 group-hover:fill-zinc-800" />
                </button>
            </div>
        </div>
    )
}