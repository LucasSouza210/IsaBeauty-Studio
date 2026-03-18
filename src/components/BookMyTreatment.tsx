import { LuCircleArrowRight } from "react-icons/lu";
import { useTranslate } from "../Translations";

type Props = {
    bg: string
    content: string
    style?: string
}

export default function BookMyTreatment(props: Props) {

    const translate = useTranslate()

    return (
        <a href="https://share.google/GvhgE5P3Z58PnYiIR" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-2 xl:gap-3 2xl:gap-4 interFont font-bold text-xs sm:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base tracking-wider rounded-full px-6 sm:px-7 md:px-8.5 lg:px-6 xl:px-6.5 2xl:px-7.5 py-3 sm:py-3.5 md:py-4 lg:py-2.5 xl:py-3 2xl:py-3.5 ${props.bg} ${props.content} ${props.style}`}>
            {translate('buttonContent').line()}
            <LuCircleArrowRight className={`size-4 sm:size-4.5 md:size-5.5 lg:size-4 xl:size-5 2xl:size-6 ${props.content}`} />
        </a>
    )
}