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
        <div className="w-full h-[116vh] flex justify-center bg-[#EFE6DF]">
            <div className="lg:w-176 xl:w-218 2xl:w-280 h-full flex flex-col justify-center gap-6">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col">
                            <p className="xl:w-97 2xl:w-106 dmFont font-semibold xl:text-2xl 2xl:text-[26px] leading-7.5 text-black">YOU DON’T HAVE TO LIVE WITH SKIN OR BODY INSECURITIES.</p>
                            <p className="xl:w-115.5 2xl:w-132.5 dmFont font-semibold xl:text-[40px] 2xl:text-[46px] text-[#6A4830]">I can help you change that.</p>
                        </div>
                        <p className="whitespace-nowrap fontPoppins xl:font-bold 2xl:font-semibold xl:text-xs 2xl:text-sm leading-5.5 text-black">If you struggle with acne, pigmentation, dull skin, sagging, localized fat <br /> or lack of firmness. I create targeted facial and body treatments designed <br /> to correct, improve and restore your confidence. Your concerns are specific. <br /> Your treatment should be too.</p>
                    </div>
                    <img src={info} alt="" className="xl:size-80 2xl:size-136 " />
                </div>
                <div className="w-full grid grid-cols-3 xl:gap-5 2xl:gap-6">
                    {
                        cards.map((i, index) => (
                            <div className="w-full xl:h-46 2xl:h-54 flex flex-col items-center rounded-xl bg-[#F7F2EE]" key={index}>
                                <div className="flex flex-col xl:mt-10 2xl:mt-12 max-w-13/20">
                                    <p className="poppinsFont font-semibold text-5xl 2xl:text-[52px] text-[#BF987E]">{i.step}</p>
                                    <div className="flex flex-col">
                                        <p className="poppinsFont font-bold xl:text-[17px] 2xl:text-xl text-black">{i.title}</p>
                                        <p className="poppinsFont font-bold xl:text-[10px] 2xl:text-xs text-black">{i.description}</p>
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