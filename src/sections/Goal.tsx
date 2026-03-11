import goalIsa from "../assets/images/goalIsa.jpg"
import BookMyTreatment from "../components/BookMyTreatment"

export default function Goal() {
    return (
        <div className="w-full lg:h-110 xl:h-132 2xl:h-160 flex justify-center px-10 lg:px-0 py-14 lg:py-0 bg-white">
            <div className="w-full lg:w-174 xl:w-218 2xl:w-280 h-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-12 xl:gap-15 2xl:gap-18 overflow-x-visible">
                <img src={goalIsa} alt="" className="aspect-square lg:aspect-auto lg:h-70 xl:h-82 2xl:h-96 w-full lg:w-80 xl:w-96 2xl:w-110 object-cover rounded-3xl xl:rounded-[30px]" />
                <div className="flex flex-col items-start gap-6 lg:gap-7 xl:gap-7.5 2xl:gap-10">
                    <div className="flex flex-col gap-2 lg:gap-2.5 2xl:gap-3">
                        <p className="poppinsFont font-medium text-xs lg:text-xs xl:text-[15px] 2xl:text-lg tracking-[0.35em] lg:tracking-[0.4em] xl:tracking-[0.4em] text-[#6A4830]">OUR GOAL</p>
                        <p className="lg:whitespace-nowrap dmFont font-semibold text-[22px] lg:text-2xl xl:text-[30px] 2xl:text-[37px] leading-7.5 lg:leading-6 xl:leading-7.5 2xl:leading-9 text-[#6A4830]">Is to ensure everyone feels and <br className="hidden lg:block"/> is treated like family at our clinic.</p>
                    </div>
                    <div className="flex flex-col gap-2 lg:gap-2 xl:gap-4 mb-2 lg:mb-2 xl:mb-3">
                        <p className="lg:whitespace-nowrap poppinsFont font-medium lg:font-normal text-xs lg:text-xs xl:text-[15px] 2xl:text-lg xl:leading-5 2xl:leading-6 tracking-wider 2xl:tracking-[0.055em] text-black">Trusting someone from your family with your skin makes you feel more <br className="hidden lg:block"/> comfortable and safe.</p>
                        <p className="lg:whitespace-nowrap poppinsFont font-medium lg:font-normal text-xs lg:text-xs xl:text-[15px] 2xl:text-lg tracking-wider 2xl:tracking-[0.055em] text-black">We work closely with our clients as a team to achieve the best results.</p>
                    </div>
                    <BookMyTreatment bg="bg-[#6A4830]" content="text-[#BF987E]"/>
                </div>
            </div>
        </div>
    )
}