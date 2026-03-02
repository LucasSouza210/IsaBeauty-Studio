import goalIsa from "../assets/images/goalIsa.jpg"
import BookMyTreatment from "../components/BookMyTreatment"

export default function Goal() {
    return (
        <div className="w-full lg:h-110 xl:h-132 2xl:h-160 flex justify-center bg-white">
            <div className="lg:w-174 xl:w-218 2xl:w-280 h-full flex items-center lg:gap-12 xl:gap-15 2xl:gap-18 overflow-x-visible">
                <img src={goalIsa} alt="" className="lg:h-70 xl:h-82 2xl:h-96 lg:w-80 xl:w-96 2xl:w-110 object-cover rounded-[24px] xl:rounded-[30px]" />
                <div className="flex flex-col items-start lg:gap-7 xl:gap-7.5 2xl:gap-10">
                    <div className="flex flex-col lg:gap-2.5 2xl:gap-3">
                        <p className="poppinsFont font-medium lg:text-xs xl:text-[15px] 2xl:text-lg tracking-[0.4em] xl:tracking-[0.4em] text-[#6A4830]">OUR GOAL</p>
                        <p className="whitespace-nowrap dmFont font-semibold lg:text-2xl xl:text-[30px] 2xl:text-[37px] lg:leading-6 xl:leading-7.5 2xl:leading-9 text-[#6A4830]">Is to ensure everyone feels and <br /> is treated like family at our clinic.</p>
                    </div>
                    <div className="flex flex-col lg:gap-2 xl:gap-4 lg:mb-2 xl:mb-3">
                        <p className="whitespace-nowrap poppinsFont font-normal lg:text-xs xl:text-[15px] 2xl:text-lg xl:leading-5 2xl:leading-6 tracking-wider 2xl:tracking-[0.055em] text-black">Trusting someone from your family with your skin makes you feel more <br /> comfortable and safe.</p>
                        <p className="whitespace-nowrap poppinsFont font-normal lg:text-xs xl:text-[15px] 2xl:text-lg tracking-wider 2xl:tracking-[0.055em] text-black">We work closely with our clients as a team to achieve the best results.</p>
                    </div>
                    <BookMyTreatment bg="bg-[#6A4830]" content="text-[#BF987E]"/>
                </div>
            </div>
        </div>
    )
}