import logo from "../assets/images/heroLogo.png"

export default function Footer() {
    return (
        <footer className="w-full xl:h-40 2xl:h-48 flex items-center justify-around border-t-12 px-30 relative bg-[#6E442C] border-[#C1987E]">
            <div className="flex flex-col 2xl:gap-0.5 absolute xl:left-56 2xl:left-84">
                <p className="poppinsFont font-medium xl:text-[10px] 2xl:text-xs leading-5 text-white">Copyrigth Isabeauty</p>
                <p className="poppinsFont font-medium xl:text-[10px] 2xl:text-xs leading-5 text-white">All rights reserved 2026</p>
            </div>
            <img src={logo} alt="" className="xl:h-10 2xl:h-12 w-auto" />
            <p className="flex items-center absolute xl:right-56 2xl:right-84 gap-1.5 poppinsFont font-normal xl:text-[10px] 2xl:text-xs leading-5 tracking-wide text-white">Desenvolvido por: <p className="font-extrabold tracking-widest">Felipe Maia Publicidade</p></p>
        </footer>
    )
}