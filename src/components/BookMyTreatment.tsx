import { LuCircleArrowRight } from "react-icons/lu";

type Props = {
    bg: string
    content: string
}

export default function BookMyTreatment(props: Props) {
    return (
        <button className={`flex items-center gap-4 interFont font-bold text-lg rounded-full px-7.5 py-3 bg-[${props.bg}] text-[${props.content == 'white' ? '#FFFFFF' : props.content}]`}>
            BOOK MY TREATMENT
            <LuCircleArrowRight className={`size-6 text-[${props.content}]`}/>
        </button>
    )
}