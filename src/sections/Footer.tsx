import logo from "../assets/images/heroLogo.png"

export default function Footer() {
    return (
        <footer className="w-full 2xl:h-64 flex items-center justify-around border-t-12 px-30 relative bg-[#6E442C] border-[#C1987E]">
            <div className="flex flex-col gap-2 absolute left-86">
                <p className="poppinsFont font-medium text-sm leading-5 text-white">Copyrigth Isabeauty</p>
                <p className="poppinsFont font-medium text-sm leading-5 text-white">All rights reserved 2026</p>
            </div>
            <img src={logo} alt="" className="2xl:h-30 w-auto" />
            <p className="flex items-center absolute right-86 gap-1.5 poppinsFont font-normal text-sm leading-5 tracking-wide text-white">Desenvolvido por: <p className="font-extrabold tracking-widest">Felipe Maia Publicidade</p></p>
        </footer>
    )
}