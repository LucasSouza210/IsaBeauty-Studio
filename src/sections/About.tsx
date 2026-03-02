import isa from "../assets/images/isaAbout.jpg"
import isaUp from "../assets/images/isaUp.png"
import BookMyTreatment from "../components/BookMyTreatment"

export default function About() {
    return (
        <div className="w-full lg:h-[87vh] flex justify-center z-10 relative bg-white">
            <div className="lg:w-174 xl:w-218 2xl:w-280 h-auto flex flex-col absolute lg:-bottom-16 xl:-bottom-20 2xl:-bottom-28 z-10">
                <div className="flex flex-col items-center xl:gap-0.5 2xl:gap-2.5 lg:mb-12 xl:mb-14 2xl:mb-24">
                    <p className="interFont font-bold lg:text-[12px] xl:text-[15px] 2xl:text-xl tracking-[0.45em] text-[#918F8F]">PERSONAL STATEMENT</p>
                    <p className="dmFont font-semibold lg:text-2xl xl:text-[28px] 2xl:text-4xl text-[#6A4830]">My name is Isabel and I am your Skin Specialist.</p>
                </div>
                <div className="w-full flex">
                    <div className="lg:h-68 xl:h-78 2xl:h-106 lg:w-70 xl:w-86 2xl:w-116 flex justify-center relative overflow-visible rounded-tl-2xl rounded-bl-2xl bg-zinc-400">
                        <div className="absolute inset-0 overflow-hidden rounded-tl-2xl rounded-bl-2xl">
                            <img src={isa} alt="" className="scale-136 object-cover absolute -left-10 top-0" />
                        </div>
                        <div className="absolute inset-0">
                            <img src={isaUp} alt="" className="scale-136 object-cover absolute -left-10 lg:[clip-path:inset(0_60px_360px_0)] xl:[clip-path:inset(0_60px_380px_0)]" />
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center rounded-tr-2xl rounded-br-2xl lg:pt-8 xl:pt-9 2xl:pt-12 bg-[#C89A76]">
                        <div className="flex flex-col items-start lg:gap-3.5 xl:gap-3.5 2xl:gap-7">
                            <p className="whitespace-nowrap dmFont font-semibold lg:text-base xl:text-[19px] 2xl:text-2xl lg:leading-4 xl:leading-5 2xl:leading-6.5 lg:tracking-[0.015em] xl:tracking-wider text-[#6B452E]">With over 10 years of experience in the beauty <br /> industry, I combine professional expertise with <br /> a true passion for skin improvement and self-care.</p>
                            <p className="whitespace-nowrap dmFont xl:font-medium lg:text-[9px] xl:text-[11px] 2xl:text-sm lg:leading-3.5 xl:leading-4 2xl:leading-5 lg:tracking-[0.085em] xl:tracking-[0.09em] xl:mb-2 2xl:mb-0 text-white">Over the years, I have completed multiple courses and earned certifications in <br /> different countries, gaining an international perspective on the latest beauty <br /> techniques and trends. At IsaBeauty, quality is essential. I work with carefully <br /> selected products and treatments that deliver real results, always tailored to <br /> your skin and individual needs.</p>
                            <BookMyTreatment bg="bg-[#6A4830]" content="text-[#FFFFFF]"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}