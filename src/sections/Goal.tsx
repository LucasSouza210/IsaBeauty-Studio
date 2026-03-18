import goalIsa from "../assets/images/goalIsa.jpg"
import BookMyTreatment from "../components/BookMyTreatment"
import { useTranslate } from "../Translations"

export default function Goal() {

    const translate = useTranslate()

    return (
        <div className="w-full lg:h-110 xl:h-132 2xl:h-160 flex justify-center px-10 md:px-16 lg:px-0 py-14 sm:py-16 md:py-18 lg:py-0 bg-white">
            <div className="w-full sm:w-7/10 lg:w-176 xl:w-218 2xl:w-280 h-full flex flex-col-reverse lg:flex-row items-center gap-12 sm:gap-14 md:gap-16 lg:gap-12 xl:gap-15 2xl:gap-18 overflow-x-visible">
                <img src={goalIsa} alt="" className="aspect-square lg:aspect-auto lg:h-72 xl:h-84 2xl:h-98 w-full lg:w-80 xl:w-96 2xl:w-md object-cover rounded-3xl xl:rounded-[30px]" />
                <div className="flex flex-col items-start gap-6 sm:gap-7 md:gap-8 lg:gap-5 xl:gap-6 2xl:gap-8">
                    <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-2 2xl:gap-3">
                        <p className="poppinsFont font-medium text-xs sm:text-sm md:text-base lg:text-[10px] xl:text-[13px] 2xl:text-base tracking-[0.35em] lg:tracking-[0.4em] xl:tracking-[0.4em] text-[#6A4830]">{translate('goalSubtitle').line()}</p>
                        <p className="lg:whitespace-nowrap dmFont font-semibold text-[22px] sm:text-3xl md:text-4xl lg:text-2xl xl:text-[30px] 2xl:text-[37px] leading-7.5 sm:leading-9 md:leading-10.5 lg:leading-6.5 xl:leading-7.5 2xl:leading-9 text-[#6A4830]">{translate('goalTitle').break()}</p>
                    </div>
                    <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-2 xl:gap-3 mb-2 sm:mb-3 md:mb-4 lg:mb-3 xl:mb-4 2xl:mb-5">
                        <p className="lg:whitespace-nowrap poppinsFont font-medium lg:font-normal text-xs sm:text-sm md:text-base lg:text-xs xl:text-[15px] 2xl:text-lg leading-4 sm:leading-5 md:leading-6 lg:leading-5 xl:leading-6 2xl:leading-6 tracking-wider 2xl:tracking-[0.055em] text-black">{translate('goalFirstText').break()}</p>
                        <p className="lg:whitespace-nowrap poppinsFont font-medium lg:font-normal text-xs sm:text-sm md:text-base lg:text-xs xl:text-[15px] 2xl:text-lg leading-4 sm:leading-5 md:leading-6 lg:leading-5 xl:leading-6 tracking-wider 2xl:tracking-[0.055em] text-black">{translate('goalSecondText').break()}</p>
                    </div>
                    <BookMyTreatment content="text-[#BF987E]" />
                </div>
            </div>
        </div>
    )
}