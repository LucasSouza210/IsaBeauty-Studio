import info from "../assets/images/info.png"

export default function Info() {
    return (
        <div className="w-full 2xl:h-240 flex justify-center bg-[#EFE6DF]">
            <div className="2xl:w-300 h-full flex flex-col justify-center">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col">
                            <p className="2xl:w-106 dmFont font-semibold text-[26px] text-black">YOU DON’T HAVE TO LIVE WITH SKIN OR BODY INSECURITIES.</p>
                            <p className="dmFont font-semibold text-[46px] text-[#6A4830]">I can help you change that.</p>
                        </div>
                        <p className="2xl:w-118 fontPoppins font-semibold text-sm text-black">If you struggle with acne, pigmentation, dull skin, sagging, localized fat or lack of firmness. I create targeted facial and body treatments designed to correct, improve and restore your confidence. Your concerns are specific. Your treatment should be too.</p>
                    </div>
                    <img src={info} alt="" className="size-136"/>
                </div>
                <div className="w-full grid grid-cols-3"></div>
            </div>
        </div>
    )
}