import { useTranslate } from "../Translations"
import isaBg from "../assets/images/IsaBg.jpg"
import logo from "../assets/images/heroLogo.png"
import BookMyTreatment from "../components/BookMyTreatment"

export default function Interval() {

    const translate = useTranslate()

    return (
        <div className="w-full h-72 sm:h-86 md:h-100 lg:h-80 xl:h-94 2xl:h-122 bg-cover bg-position-[center_66%] sm:bg-position-[center_45%] lg:bg-position-[center_33%] xl:bg-position-[center_32%] 2xl:bg-position-[center_31%]" style={{ backgroundImage: `url(${isaBg})` }}>
            <div className="size-full flex flex-col items-center justify-center gap-5.5 sm:gap-6.5 md:gap-8 lg:gap-5 xl:gap-6 2xl:gap-8 bg-[#76523C]/85">
                <img src={logo} alt="" className="w-34 sm:w-40 md:w-48 lg:w-33 xl:w-39 2xl:w-48 opacity-50 lg:mb-3 xl:mb-4 2xl:mb-6" />
                <p className="poppinsFont font-normal 2xl:font-normal text-xl sm:text-2xl md:text-[26px] lg:text-[19px] xl:text-[23px] 2xl:text-[26px] tracking-wide sm:tracking-wider 2xl:tracking-wider leading-4 text-white">{translate('intervalTitle').line()}</p>
                <p className="poppinsFont tracking-normal sm:tracking-wide xl:font-extralight 2xl:font-normal text-xs sm:text-sm md:text-base lg:text-[10px] xl:text-[11px] 2xl:text-sm leading-4.5 sm:leading-5.5 md:leading-6.5 lg:leading-3.5 xl:leading-4 2xl:leading-5.5 lg:tracking-wider xl:tracking-[0.07em] text-center text-white">{translate('intervalContent').break()}</p>
                <BookMyTreatment bg="bg-[#EFE6DF]" content="text-[#6A4830]" />
            </div>
        </div>
    )
}