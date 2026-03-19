import { useTranslate } from "../Translations"
import { IoLogoWhatsapp } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import isa from '../assets/images/treatmentTwo.jpg'

export default function Contact() {

    const translate = useTranslate()

    const contact = [
        {
            icon: <IoLogoWhatsapp className="size-4 sm:size-5 md:size-6 lg:size-3 xl:size-4 2xl:size-5 fill-[#6A4830]"/>,
            content: '+32 493 67 20 74',
        },
        {
            icon: <FaEnvelope className="size-4 sm:size-5 md:size-6 lg:size-3 xl:size-4 2xl:size-5 fill-[#6A4830]"/>,
            content: 'Isabelbeautybr74@gmail.com',
        },
        {
            icon: <FaLocationDot className="size-4 sm:size-5 md:size-6 lg:size-3 xl:size-4 2xl:size-5 fill-[#6A4830]"/>,
            content: 'Paternosterstraat 89, Rotselaar, 3110',
        },
    ]

    return (
        <div className="w-full flex justify-center px-10 md:px-16 lg:px-0 py-18 sm:py-20 md:py-22 lg:py-24 xl:py-30 2xl:py-36 bg-white" id="contact">
            <div className="w-full sm:w-7/10 lg:w-176 xl:w-218 2xl:w-280 h-full flex flex-col lg:flex-row items-center lg:justify-between gap-14 sm:gap-16 md:gap-18 lg:gap-0 overflow-x-visible">
                <div className="flex flex-col items-start gap-10 sm:gap-12 md:gap-14 lg:gap-8 xl:gap-10 2xl:gap-12">
                    <div className="flex flex-col gap-3 sm:gap-3.5 md:gap-4 lg:gap-2 xl:gap-2.5 2xl:gap-3">
                        <p className="dmFont font-semibold text-sm sm:text-base md:text-lg lg:text-sm xl:text-base 2xl:text-lg leading-none tracking-wider text-black">{translate('contactTitle').line()}</p>
                        <p className="dmFont font-semibold text-2xl sm:text-[26px] md:text-3xl lg:text-2xl xl:text-[26px] 2xl:text-3xl leading-8.5 sm:leading-9.5 md:leading-10 lg:leading-8 xl:leading-9 2xl:leading-10 tracking-wider text-[#6A4830]">{translate('contactSubtitle').break()}</p>
                    </div>
                    <div className="flex flex-col gap-4.5 sm:gap-6 md:gap-7 lg:gap-4 xl:gap-5 2xl:gap-6">
                        {
                            contact.map((i, index) => (
                                <div className="flex items-center gap-4 sm:gap-4.5 md:gap-5 lg:gap-3 xl:gap-4 2xl:gap-5" key={index}>
                                    {i.icon}
                                    <p className="interFont font-medium text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-base leading-5 sm:leading-none tracking-wide sm:tracking-wider">{i.content}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <img src={isa} className="aspect-square lg:aspect-auto w-full lg:w-auto lg:size-66 xl:size-86 2xl:size-106 object-cover rounded-3xl xl:rounded-[30px]" />
            </div>
        </div>
    )
}