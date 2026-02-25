export default function About() {
    return (
        <div className="w-full 2xl:h-[87vh] flex justify-center z-10 relative bg-white">
            <div className="2xl:w-300 h-auto flex flex-col absolute -bottom-54">
                <div className="flex flex-col items-center gap-2 2xl:mb-20">
                    <p className="interFont font-bold text-lg tracking-[0.5em] text-[#918F8F]">PERSONAL STATEMENT</p>
                    <p className="dmFont font-semibold text-[32px] text-[#6A4830]">My name is Isabel and I am your Skin Specialist.</p>
                </div>
                <div className="w-full flex rounded-2xl overflow-hidden">
                    <div className="2xl:size-120 bg-zinc-400"></div>
                    <div className="2xl:h-120 2xl:flex-1 flex items-center justify-center bg-[#C89A76]">
                        <div className="2xl:w-114 flex flex-col items-start gap-8">
                            <p className="max-w-114 dmFont font-semibold text-[22px] text-[#6B452E]">With over 10 years of experience in the beauty industry, I combine professional expertise with a true passion for skin improvement and self-care.</p>
                            <p className="max-w-108 dmFont font-semibold text-[13px] text-white">Over the years, I have completed multiple courses and earned certifications in different countries, gaining an international perspective on the latest beauty techniques and trends. At IsaBeauty, quality is essential. I work with carefully selected products and treatments that deliver real results, always tailored to your skin and individual needs.</p>
                            <button className="interFont font-bold py-4 pl-6 pr-12 rounded-full text-base bg-[#6A4830] text-white">BOOK MY TREATMENT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}