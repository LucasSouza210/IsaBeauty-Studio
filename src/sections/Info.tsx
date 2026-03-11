import info from "../assets/images/info.png"

export default function Info() {

    const cards = [
        {
            step: 1,
            title: "Personal Assessment",
            description: "I analyze your skin and body to identify exactly what needs to be treated."
        },
        {
            step: 2,
            title: "Targeted Treatments",
            description: "I apply advanced facial and body procedures using professional-grade technology and products."
        },
        {
            step: 3,
            title: "Real Results",
            description: "You see and feel the difference healthier skin, improved texture, and a more sculpted, confident body."
        }
    ]

    return (
        <div className="w-full lg:h-[116vh] flex justify-center py-16 lg:py-0 px-10 lg:px-0 bg-[#EFE6DF]">
            <div className="w-full lg:w-174 xl:w-218 2xl:w-280 h-full flex flex-col justify-center gap-6 xl:gap-4 2xl:gap-6">
                <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-4 lg:gap-0">
                    <div className="flex flex-col gap-4 lg:gap-2.5 xl:gap-5 2xl:gap-8">
                        <div className="flex flex-col gap-2 lg:gap-0 xl:gap-1 2xl:gap-2.5">
                            <p className="dmFont font-semibold text-sm lg:text-[17px] xl:text-[21px] 2xl:text-[26px] leading-6 lg:leading-7.5 2xl:leading-9 text-black">YOU DON’T HAVE TO LIVE WITH <br /> SKIN OR BODY INSECURITIES.</p>
                            <p className="dmFont font-semibold text-3xl lg:text-[32px] xl:text-[38px] 2xl:text-[46px] leading-10 tracking-wide 2xl:tracking-wider text-[#6A4830]">I can help you change that.</p>
                        </div>
                        <p className="lg:whitespace-nowrap fontPoppins font-semibold xl:font-bold lg:font-semibold text-[10px] lg:text-[10px] xl:text-[11px] 2xl:text-sm lg:leading-3.5 xl:leading-5 2xl:leading-5.5 tracking-wider text-black">If you struggle with acne, pigmentation, dull skin, sagging, localized fat <br className="hidden lg:block"/> or lack of firmness. I create targeted facial and body treatments designed <br className="hidden lg:block"/> to correct, improve and restore your confidence. Your concerns are specific. <br className="hidden lg:block"/> Your treatment should be too.</p>
                    </div>
                    <img src={info} alt="" className="w-full lg:w-auto lg:size-76 xl:size-98 2xl:size-132" />
                </div>
                <div className="w-full flex flex-col lg:grid grid-cols-3 gap-4 lg:gap-3.5 xl:gap-5 2xl:gap-6">
                    {
                        cards.map((i, index) => (
                            <div className="w-full h-48 lg:h-34 xl:h-44 2xl:h-54 flex flex-col items-center justify-center lg:justify-start rounded-xl lg:relative lg:py-0 px-10 lg:px-0 bg-[#F7F2EE]" key={index}>
                                <div className="flex flex-col gap-1 lg:gap-1 xl:gap-2.5 2xl:gap-2 lg:absolute lg:top-[15%] xl:top-[16%] 2xl:top-[20%] lg:max-w-15/20 xl:max-w-14/20">
                                    <p className="poppinsFont font-semibold text-5xl lg:text-4xl xl:text-[46px] 2xl:text-[52px] leading-none text-[#BF987E]">{i.step}</p>
                                    <div className="flex flex-col lg:gap-0.5 xl:gap-0 2xl:gap-1">
                                        <p className="poppinsFont font-bold text-lg lg:text-[12px] xl:text-[17px] 2xl:text-xl lg:tracking-wider xl:tracking-[0.055em] text-black">{i.title}</p>
                                        <p className="poppinsFont font-bold text-[10px] lg:text-[9px] xl:text-[10px] 2xl:text-xs tracking-wide 2xl:tracking-wider text-black">{i.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}