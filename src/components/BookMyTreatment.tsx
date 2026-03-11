import { LuCircleArrowRight } from "react-icons/lu";

type Props = {
    bg: string
    content: string
    style?: string
}

export default function BookMyTreatment(props: Props) {
    return (
        <button className={`flex items-center gap-3 lg:gap-2 xl:gap-3 2xl:gap-4 interFont font-bold text-sm lg:text-xs xl:text-sm 2xl:text-base tracking-wider rounded-full px-6.5 lg:px-6 xl:px-6.5 2xl:px-7.5 py-3 lg:py-2.5 xl:py-3 2xl:py-3.5 ${props.bg} ${props.content} ${props.style}`}>
            BOOK MY TREATMENT
            <LuCircleArrowRight className={`size-5 lg:size-4 xl:size-5 2xl:size-6 ${props.content}`}/>
        </button>
    )
}