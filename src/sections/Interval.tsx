import isaBg from "../assets/images/IsaBg.jpg"
import logo from "../assets/images/heroLogo.png"
import BookMyTreatment from "../components/BookMyTreatment"

export default function Interval() {
    return (
        <div className="w-full h-70 lg:h-80 xl:h-94 2xl:h-122 bg-cover bg-position-[center_60%] lg:bg-position-[center_33%] xl:bg-position-[center_32%] 2xl:bg-position-[center_31%]" style={{ backgroundImage: `url(${isaBg})` }}>
            <div className="size-full flex flex-col items-center justify-center gap-5.5 lg:gap-5 xl:gap-6 2xl:gap-8 bg-[#76523C]/85">
                <img src={logo} alt="" className="w-34 lg:w-33 xl:w-39 2xl:w-48 opacity-50 lg:mb-3 xl:mb-4 2xl:mb-6" />
                <p className="poppinsFont font-light 2xl:font-normal text-xl lg:text-[19px] xl:text-[23px] 2xl:text-[26px] tracking-wide 2xl:tracking-wider leading-4 text-white">Now I can proudly say</p>
                <p className="max-w-8/10 lg:max-w-none poppinsFont xl:font-extralight 2xl:font-normal text-xs lg:text-[10px] xl:text-[11px] 2xl:text-sm lg:leading-3.5 xl:leading-4.75 lg:tracking-wide xl:tracking-[0.07em] text-center text-white">I have helped hundreds of people transform their <br className="hidden lg:block"/> lives, and I can’t wait to help thousands more.</p>
                <BookMyTreatment bg="bg-[#EFE6DF]" content="text-[#6A4830]"/>
            </div>
        </div>
    )
}