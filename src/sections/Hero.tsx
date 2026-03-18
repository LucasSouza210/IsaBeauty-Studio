import background from "../assets/images/heroBackground.png"
import logo from "../assets/images/heroLogo.png"
import isa from "../assets/images/heroIsa3.png"
import isaMobile from "../assets/images/mobileIsa.png"
import BookMyTreatment from "../components/BookMyTreatment"
import { useTranslate } from "../Translations"

type Item = {
    total: string
    title: string
}

export default function Hero() {

    const translate = useTranslate()

    const data: Item[] = [
        {
            total: '+10',
            title: translate('firstBlock').line()
        },
        {
            total: '+100',
            title: translate('secondBlock').line()
        },
        {
            total: '+98%',
            title: translate('thirdBlock').line()
        }
    ]

    return (
        <div className="w-full min-h-screen lg:min-h-auto lg:h-[calc(100vh-52px)] xl:h-[calc(100vh-60px)] 2xl:h-[calc(100vh-64px)] flex justify-center bg-cover bg-center lg:p-0 pt-12 sm:pt-13 md:pt-14 lg:pt-0 px-10 sm:px-16 lg:px-0 pb-10 sm:pb-12 lg:pb-0" style={{ backgroundImage: `url(${background})` }}>
            <div className="w-full sm:w-7/10 lg:w-176 xl:w-218 2xl:w-280 min-h-full flex flex-col lg:justify-end lg:items-start gap-10 sm:gap-11 md:gap-12 lg:gap-0 2xl:gap-9 relative">
                <div className="w-full flex justify-end lg:items-start relative">
                    <div className="w-full lg:w-auto flex flex-col items-center lg:items-start gap-6 sm:gap-6.5 md:gap-8 lg:gap-7 xl:gap-8.5 2xl:gap-10 lg:absolute lg:bottom-46 xl:bottom-47 2xl:bottom-60 lg:left-0">
                        <img src={logo} alt="" className="h-10 sm:h-13 md:h-16 lg:h-11 xl:h-15 2xl:h-18 w-auto xl:mb-1 2xl:mb-2" />
                        <img src={isaMobile} alt="" className="w-7/10 sm:w-3/4 block lg:hidden object-cover mt-8 mask-[linear-gradient(to_bottom,black_90%,transparent_99%,transparent_100%)]" />
                        <div className="flex flex-col items-center lg:items-start gap-6 sm:gap-6.5 md:gap-8 lg:gap-5 xl:gap-6 2xl:gap-7.5">
                            <p className="whitespace-nowrap dmFont font-semibold text-center lg:text-start text-xl sm:text-3xl md:text-[36px] lg:text-[34px] xl:text-[44px] 2xl:text-[55px] leading-7 sm:leading-9 md:leading-11 lg:leading-9 xl:leading-11 2xl:leading-15 sm:tracking-wide md:tracking-wider lg:tracking-normal xl:tracking-normal text-[#6A4830]">{translate('heroMain').break()}</p>
                            <p className="whitespace-nowrap poppinsFont font-semibold text-center lg:text-start text-xs sm:text-sm md:text-[17px] lg:text-[10px] xl:text-sm 2xl:text-[17px] tracking-wide sm:tracking-wider md:tracking-[0.085em] lg:tracking-wide xl:tracking-normal leading-4.5 sm:leading-5.5 md:leading-6.5 lg:leading-4 xl:leading-5.5 2xl:leading-6.5 lg:mb-1">{translate('desc').break()}</p>
                            <BookMyTreatment />
                        </div>
                    </div>
                    <img src={isa} alt="" className="hidden lg:block lg:w-83 xl:w-92 2xl:w-118" />
                </div>
                <div className="w-full flex flex-col gap-5 sm:gap-6 md:gap-7 lg:gap-5 xl:gap-6 2xl:gap-7 relative lg:absolute lg:-bottom-29 xl:-bottom-35 2xl:-bottom-43 lg:z-20">
                    <p className="poppinsFont font-bold text-sm sm:text-base md:text-lg lg:text-sm xl:text-base 2xl:text-lg leading-[1.44] tracking-wide">{translate('dataTitle').line()}</p>
                    <div className="flex flex-col lg:grid grid-cols-3 gap-6 sm:gap-7 md:gap-9 lg:gap-6 xl:gap-7 2xl:gap-8">
                        {
                            data.map((i, index) => (
                                <div className="w-full h-46 sm:h-54 md:h-66 lg:h-38 xl:h-46 2xl:h-58 flex items-end justify-center rounded-[10px] sm:rounded-[11px] md:rounded-xl lg:rounded-[10px] bg-white shadow-[0px_7px_24px_0px_rgba(0,0,0,0.25)]" key={index}>
                                    <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-3 lg:gap-1 xl:gap-1.5 2xl:gap-2.5 mb-10 sm:mb-12 md:mb-14 lg:mb-10 xl:mb-12 2xl:mb-14">
                                        <p className="interFont font-bold text-[34px] sm:text-[42px] md:text-[50px] lg:text-2xl xl:text-3xl 2xl:text-[38px] leading-none tracking-wide text-[#6A4830]">{i.total}</p>
                                        <p className="interFont font-bold text-sm sm:text-base md:text-lg lg:text-[10px] xl:text-xs 2xl:text-sm leading-none tracking-wide md:tracking-wider text-[#918F8F]">{i.title}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}