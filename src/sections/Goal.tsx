import goalIsa from "../assets/images/goalIsa.jpg"
import BookMyTreatment from "../components/BookMyTreatment"

export default function Goal() {
    return (
        <div className="w-full 2xl:h-158 flex justify-center bg-white">
            <div className="2xl:w-300 h-full flex items-center gap-20">
                <img src={goalIsa} alt="" className="2xl:h-96 2xl:w-110 object-cover rounded-[30px]" />
                <div className="flex flex-col items-start gap-10">
                    <div className="flex flex-col gap-2">
                        <p className="poppinsFont font-normal text-lg tracking-[0.4em] text-[#6A4830]">OUR GOAL</p>
                        <p className="w-126 dmFont font-semibold text-4xl leading-9 text-[#6A4830]">Is to ensure everyone feels and is treated like family at our clinic.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="w-150 poppinsFont font-normal text-lg leading-5.5 text-black">Trusting someone from your family with your skin makes you feel more comfortable and safe.</p>
                        <p className="poppinsFont font-normal text-lg leading-5.5 text-black">We work closely with our clients as a team to achieve the best results.</p>
                    </div>
                    <BookMyTreatment bg="bg-[#6A4830]" content="text-[#BF987E]"/>
                </div>
            </div>
        </div>
    )
}