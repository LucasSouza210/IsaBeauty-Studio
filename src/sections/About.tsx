import isa from "../assets/images/isaAbout.jpg"
import isaUp from "../assets/images/isaUp.png"
import BookMyTreatment from "../components/BookMyTreatment"

export default function About() {
    return (
        <div className="w-full h-auto lg:h-[87vh] flex justify-center items-center z-10 py-16 sm:py-17 md:py-18 lg:py-0 px-10 md:px-16 lg:px-0 relative bg-white">
            <div className="w-full sm:w-7/10 lg:w-176 xl:w-218 2xl:w-280 h-auto flex flex-col items-center gap-20 sm:gap-22 md:gap-24 lg:absolute lg:-bottom-16 xl:-bottom-20 2xl:-bottom-28 z-10">
                <div className="flex flex-col items-center gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-0 xl:gap-0.5 2xl:gap-2.5 lg:mb-12 xl:mb-14 2xl:mb-24">
                    <p className="interFont font-bold text-[9px] sm:text-[11px] md:text-xs lg:text-[12px] xl:text-[15px] 2xl:text-xl tracking-[0.35em] md:tracking-[0.4em] lg:tracking-[0.45em] leading-none text-[#918F8F]">PERSONAL STATEMENT</p>
                    <p className="dmFont font-semibold text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] 2xl:text-4xl leading-none text-[#6A4830]">My name is Isabel and I am your Skin Specialist.</p>
                </div>
                <div className="w-full lg:w-full flex flex-col lg:flex-row items-center lg:items-start gap-10 sm:gap-11 md:gap-12 lg:gap-0">
                    <div className="aspect-square lg:aspect-auto lg:h-68 xl:h-78 2xl:h-100 w-full lg:w-70 xl:w-86 2xl:w-116 flex justify-center relative overflow-visible rounded-2xl lg:rounded-none lg:rounded-tl-2xl lg:rounded-bl-2xl bg-zinc-400">
                        <div className="absolute inset-0 overflow-hidden rounded-2xl lg:rounded-none lg:rounded-tl-2xl lg:rounded-bl-2xl">
                            <img src={isa} alt="" className="lg:scale-136 object-cover absolute lg:-left-10 -top-20 lg:top-0" />
                        </div>
                        <div className="absolute inset-0 rounded-2xl lg:rounded-none">
                            <img src={isaUp} alt="" className="lg:scale-136 object-cover absolute -top-20 lg:top-0 lg:-left-10 [clip-path:inset(0_60px_280px_0)] lg:[clip-path:inset(0_60px_360px_0)] xl:[clip-path:inset(0_60px_380px_0)]" />
                        </div>
                    </div>
                    <div className="lg:flex-1 lg:h-68 xl:h-78 2xl:h-100 flex justify-center lg:rounded-tr-2xl lg:rounded-br-2xl lg:pt-8 xl:pt-9 2xl:pt-12 lg:bg-[#C89A76]">
                        <div className="flex flex-col items-center lg:items-start gap-4 sm:gap-5 md:gap-6 lg:gap-3.5 xl:gap-3.5 2xl:gap-7">
                            <p className="lg:whitespace-nowrap dmFont font-semibold text-base sm:text-[22px] md:text-[26px] lg:text-base xl:text-[19px] 2xl:text-2xl leading-6 sm:leading-7 md:leading-8.5 lg:leading-4 xl:leading-5 2xl:leading-6.5 lg:tracking-[0.015em] xl:tracking-wider text-[#6B452E]">With over 10 years of experience in the beauty <br className="hidden lg:block"/> industry, I combine professional expertise with <br className="hidden lg:block"/> a true passion for skin improvement and self-care.</p>
                            <p className="mb-4 lg:mb-0 lg:whitespace-nowrap dmFont font-normal 2xl:font-medium text-xs sm:text-[15px] md:text-lg lg:text-[9px] xl:text-[11px] 2xl:text-sm leading-4.5 sm:leading-5 md:leading-6.5 lg:leading-3.5 xl:leading-4 2xl:leading-5 tracking-wide sm:tracking-wider lg:tracking-[0.085em] xl:tracking-[0.09em] xl:mb-2 2xl:mb-0 lg:text-white">Over the years, I have completed multiple courses and earned certifications in <br className="hidden lg:block"/> different countries, gaining an international perspective on the latest beauty <br className="hidden lg:block"/> techniques and trends. At IsaBeauty, quality is essential. I work with carefully <br className="hidden lg:block"/> selected products and treatments that deliver real results, always tailored to <br className="hidden lg:block"/> your skin and individual needs.</p>
                            <BookMyTreatment bg="bg-[#6A4830]" content="text-[#FFFFFF]" style="flex justify-center items-center"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}