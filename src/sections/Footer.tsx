import logo from "../assets/images/heroLogo.png"

export default function Footer() {
    return (
        <footer className="w-full lg:h-32 xl:h-40 2xl:h-48 flex items-center justify-around lg:border-t-7 xl:border-t-9 2xl:border-t-10.5 px-30 relative bg-[#6E442C] border-[#C1987E]">
            <p className="absolute lg:left-48 xl:left-56 2xl:left-84 poppinsFont font-medium lg:text-[8px] xl:text-[9px] 2xl:text-xs xl:leading-4.5 2xl:leading-5 tracking-widest text-white">Copyrigth Isabeauty <br /> All rights reserved 2026</p>
            <img src={logo} alt="" className="lg:h-8 xl:h-10 2xl:h-12 w-auto" />
            <p className="flex items-center absolute lg:right-48 xl:right-56 2xl:right-84 gap-1.5 poppinsFont font-normal lg:text-[8px] xl:text-[9px] 2xl:text-xs leading-5 lg:tracking-widest xl:tracking-wider text-white">Desenvolvido por: <p className="font-bold tracking-widest">Felipe Maia Publicidade</p></p>
        </footer>
    )
}