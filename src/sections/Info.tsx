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
        <div className="w-full 2xl:h-[116vh] flex justify-center bg-[#EFE6DF]">
            <div className="2xl:w-280 h-full flex flex-col justify-center gap-6">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col">
                            <p className="2xl:w-106 dmFont font-semibold text-[26px] leading-7.5 text-black">YOU DON’T HAVE TO LIVE WITH SKIN OR BODY INSECURITIES.</p>
                            <p className="dmFont font-semibold text-[46px] text-[#6A4830]">I can help you change that.</p>
                        </div>
                        <p className="2xl:w-118 fontPoppins font-semibold text-sm leading-5.5 text-black">If you struggle with acne, pigmentation, dull skin, sagging, localized fat or lack of firmness. I create targeted facial and body treatments designed to correct, improve and restore your confidence. Your concerns are specific. Your treatment should be too.</p>
                    </div>
                    <img src={info} alt="" className="size-136" />
                </div>
                <div className="w-full grid grid-cols-3 gap-6">
                    {
                        cards.map((i, index) => (
                            <div className="w-full flex flex-col items-center h-54 rounded-xl bg-[#F7F2EE]" key={index}>
                                <div className="flex flex-col mt-8 max-w-12/20">
                                    <p className="poppinsFont font-semibold text-[52px] text-[#BF987E]">{i.step}</p>
                                    <div className="flex flex-col">
                                        <p className="poppinsFont font-bold text-xl text-black">{i.title}</p>
                                        <p className="poppinsFont font-bold text-xs text-black">{i.description}</p>
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