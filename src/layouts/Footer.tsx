import logo from "../assets/images/heroLogo.png"
import { useTranslate } from "../Translations"

export default function Footer() {

    const translate = useTranslate()

    return (
        <footer className="w-full lg:h-32 xl:h-40 2xl:h-48 flex flex-col lg:flex-row items-center justify-center lg:justify-around gap-6 sm:gap-7 md:gap-8 lg:gap-0 border-t-6 sm:border-t-8 md:border-t-10 lg:border-t-7 xl:border-t-9 2xl:border-t-10.5 lg:px-30 py-8 sm:py-10 md:py-12 lg:py-0 relative bg-[#6E442C] border-[#C1987E]">
            <img src={logo} alt="" className="block lg:hidden h-8 sm:h-10 md:h-11" />
            <p className="lg:absolute lg:left-48 xl:left-56 2xl:left-84 poppinsFont font-medium text-center lg:text-start text-[10px] sm:text-xs md:text-sm lg:text-[8px] xl:text-[9px] 2xl:text-xs leading-4 sm:leading-5 md:leading-6.5 lg:leading-4 xl:leading-4.5 2xl:leading-5 tracking-widest text-white">{translate('rights').break()}</p>
            <img src={logo} alt="" className="hidden lg:block lg:h-8 xl:h-10 2xl:h-12 w-auto" />
            <div className="flex items-start gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5 lg:absolute lg:right-48 xl:right-56 2xl:right-84">
                <p className="flex items-center gap-1.5 poppinsFont font-normal text-[10px] sm:text-xs md:text-sm lg:text-[8px] xl:text-[9px] 2xl:text-xs leading-none lg:tracking-widest xl:tracking-wider text-white">
                    {translate('credits').line()}
                </p>
                <a href="https://wa.me/message/XJBQOSYFBICRF1" target="_blank" rel="noopener noreferrer" className="flex flex-col gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5 font-bold tracking-widest text-[10px] sm:text-xs md:text-sm lg:text-[8px] xl:text-[9px] 2xl:text-xs leading-none lg:tracking-widest xl:tracking-wider transition-all duration-200 cursor-pointer hover:underline text-zinc-200 hover:text-white">
                    <span>Felipe Maia Publicidade</span>
                    <span>& Lucas Souza</span>
                </a>
            </div>
        </footer>
    )
}