import isa from "../assets/images/isaAbout.jpg"
import isaUp from "../assets/images/isaUp.png"

export default function About() {
    return (
        <div className="w-full 2xl:h-[87vh] flex justify-center z-10 relative bg-white">
            <div className="2xl:w-300 h-auto flex flex-col absolute -bottom-28 z-10">
                <div className="flex flex-col items-center gap-2 2xl:mb-20">
                    <p className="interFont font-bold text-lg tracking-[0.5em] text-[#918F8F]">PERSONAL STATEMENT</p>
                    <p className="dmFont font-semibold text-[32px] text-[#6A4830]">My name is Isabel and I am your Skin Specialist.</p>
                </div>
                <div className="w-full flex">
                    <div className="2xl:size-110 flex justify-center relative overflow-visible rounded-tl-2xl rounded-bl-2xl bg-zinc-400">
                        <div className="absolute inset-0 overflow-hidden rounded-tl-2xl rounded-bl-2xl">
                            <img src={isa} alt="" className="scale-136 object-cover absolute -left-10 top-0" />
                        </div>
                        <div className="absolute inset-0">
                            <img src={isaUp} alt="" className="scale-136 object-cover absolute -left-10 [clip-path:inset(0_60px_280px_0)]"/>
                        </div>
                    </div>
                    <div className="2xl:h-110 2xl:flex-1 flex items-center justify-center rounded-tr-2xl rounded-br-2xl bg-[#C89A76]">
                        <div className="2xl:w-114 flex flex-col items-start gap-8">
                            <p className="w-126 dmFont font-semibold text-2xl leading-[24px] text-[#6B452E]">With over 10 years of experience in the beauty industry, I combine professional expertise with a true passion for skin improvement and self-care.</p>
                            <p className="w-120 dmFont font-semibold text-sm leading-4 text-white">Over the years, I have completed multiple courses and earned certifications in different countries, gaining an international perspective on the latest beauty techniques and trends. At IsaBeauty, quality is essential. I work with carefully selected products and treatments that deliver real results, always tailored to your skin and individual needs.</p>
                            <button className="interFont font-bold py-4 pl-6 pr-20 rounded-full text-base bg-[#6A4830] text-white">BOOK MY TREATMENT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}