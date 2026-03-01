import isa from "../assets/images/isaAbout.jpg"
import isaUp from "../assets/images/isaUp.png"
import BookMyTreatment from "../components/BookMyTreatment"

export default function About() {
    return (
        <div className="w-full xl:h-[87vh] flex justify-center z-10 relative bg-white">
            <div className="xl:w-226 2xl:w-280 h-auto flex flex-col absolute xl:-bottom-20 2xl:-bottom-28 z-10">
                <div className="flex flex-col items-center gap-2.5 xl:mb-14 2xl:mb-24">
                    <p className="interFont font-bold xl:text-lg 2xl:text-xl tracking-[0.5em] text-[#918F8F]">PERSONAL STATEMENT</p>
                    <p className="dmFont font-semibold text-[32px] 2xl:text-4xl text-[#6A4830]">My name is Isabel and I am your Skin Specialist.</p>
                </div>
                <div className="w-full flex">
                    <div className="xl:h-80 2xl:h-106 xl:w-86 2xl:w-120 flex justify-center relative overflow-visible rounded-tl-2xl rounded-bl-2xl bg-zinc-400">
                        <div className="absolute inset-0 overflow-hidden rounded-tl-2xl rounded-bl-2xl">
                            <img src={isa} alt="" className="scale-136 object-cover absolute -left-10 top-0" />
                        </div>
                        <div className="absolute inset-0">
                            <img src={isaUp} alt="" className="scale-136 object-cover absolute -left-10 [clip-path:inset(0_60px_380px_0)]" />
                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center rounded-tr-2xl rounded-br-2xl relative bg-[#C89A76]">
                        <div className="flex flex-col items-start xl:gap-5 2xl:gap-7 absolute xl:top-9 2xl:top-9.5">
                            <p className="whitespace-nowrap dmFont font-semibold xl:text-[20px] 2xl:text-2xl xl:leading-5 2xl:leading-6 tracking-wide text-[#6B452E]">With over 10 years of experience in the beauty <br /> industry, I combine professional expertise with <br /> a true passion for skin improvement and self-care.</p>
                            <p className="whitespace-nowrap dmFont xl:font-medium xl:text-xs 2xl:text-sm leading-4 tracking-wider 2xl:tracking-wider xl:mb-2 2xl:mb-0 text-white">Over the years, I have completed multiple courses and earned certifications in <br /> different countries, gaining an international perspective on the latest beauty <br /> techniques and trends. At IsaBeauty, quality is essential. I work with carefully <br /> selected products and treatments that deliver real results, always tailored to <br /> your skin and individual needs.</p>
                            <BookMyTreatment bg="bg-[#6A4830]" content="text-[#FFFFFF]"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}