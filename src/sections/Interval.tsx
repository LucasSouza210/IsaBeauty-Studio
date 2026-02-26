import isaBg from "../assets/images/IsaBg.jpg"
import logo from "../assets/images/heroLogo.png"

export default function Interval() {
    return (
        <div className="w-full 2xl:h-116 bg-cover bg-[center_31%]" style={{ backgroundImage: `url(${isaBg})` }}>
            <div className="size-full flex flex-col items-center justify-center gap-8 bg-[#76523C]/85">
                <img src={logo} alt="" className="2xl:w-40 opacity-50"/>
                <p className="poppinsFont font-normal 2xl:text-[28px] tracking-[0%] leading-[16px] text-white">Now I can proudly say</p>
                <p className="2xl:w-84 poppinsFont font-normal 2xl:text-[15px] leading-[19px] text-center text-white">I have helped hundreds of people transform their lives, and I can’t wait to help thousands more.</p>
                <button className="py-4 pl-6 pr-18 interFont font-bold text-base tracking-[9%] rounded-full bg-[#EFE6DF] text-[#6A4830]">BOOK MY TREATMENT</button>
            </div>
        </div>
    )
}