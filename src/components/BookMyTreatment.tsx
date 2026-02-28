import { LuCircleArrowRight } from "react-icons/lu";

type Props = {
    bg: string
    content: string
}

export default function BookMyTreatment(props: Props) {
    return (
        <button className={`flex items-center xl:gap-3 2xl:gap-4 interFont font-bold xl:text-base 2xl:text-lg rounded-full xl:px-6.5 2xl:px-7.5 xl:py-3 2xl:py-3.5 ${props.bg} ${props.content}`}>
            BOOK MY TREATMENT
            <LuCircleArrowRight className={`xl:size-5 2xl:size-6 ${props.content}`}/>
        </button>
    )
}