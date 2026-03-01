import goalIsa from "../assets/images/goalIsa.jpg"
import BookMyTreatment from "../components/BookMyTreatment"

export default function Goal() {
    return (
        <div className="w-full xl:h-130 2xl:h-160 flex justify-center bg-white">
            <div className="xl:w-218 2xl:w-280 h-full flex items-center gap-20">
                <img src={goalIsa} alt="" className="xl:h-82 2xl:h-96 xl:w-96 2xl:w-110 object-cover rounded-[30px]" />
                <div className="flex flex-col items-start xl:gap-7 2xl:gap-10">
                    <div className="flex flex-col gap-2">
                        <p className="poppinsFont font-normal xl:text-base 2xl:text-lg tracking-[0.4em] text-[#6A4830]">OUR GOAL</p>
                        <p className=" 2xl:w-126 dmFont font-semibold xl:text-[32px] text-4xl leading-9 text-[#6A4830]">Is to ensure everyone feels and <br /> is treated like family at our clinic.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="xl:w-126 2xl:w-150 poppinsFont font-normal xl:text-base 2xl:text-lg xl:leading-5 2xl:leading-5.5 text-black">Trusting someone from your family with your skin makes you feel more comfortable and safe.</p>
                        <p className="poppinsFont font-normal xl:text-base 2xl:text-lg leading-5.5 text-black">We work closely with our clients as a team to achieve the best results.</p>
                    </div>
                    <BookMyTreatment bg="bg-[#6A4830]" content="text-[#BF987E]"/>
                </div>
            </div>
        </div>
    )
}