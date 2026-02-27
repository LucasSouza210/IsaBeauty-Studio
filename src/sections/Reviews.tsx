import { TiStarOutline } from "react-icons/ti";

export default function Reviews() {

    const reviews = [
        {
            rating: 5,
            name: "Ana Ichim",
            review: "Superb visit at Isa Beauty! At 50 years old, the owner has a glowing youthfulness. Excellent facial treatment, I will definitely return!"
        },
        {
            rating: 5,
            name: "Tatiana",
            review: "I was warmly welcomed. She explained which treatments she was doing for me and showed me the products. I left feeling very well taken care of. I will definitely come back."
        },
        {
            rating: 5,
            name: "Amrita",
            review: "It was a great experience!"
        }
    ];

    const getStars = (size: number, color: string) => {
        return Array.from({ length: 5 }, (_, i) => (
            <TiStarOutline key={i} className={`size-${size} ${color}`} />
        ))
    }

    return (
        <div className="w-full 2xl:h-172 flex justify-center bg-[#EFE6DF]">
            <div className="2xl:w-300 h-full flex flex-col justify-center gap-12">
                <div className="flex items-center gap-9">
                    <p className="poppinsFont font-semibold text-[26px] leading-5.5 text-[#6A4830]">Customer reviews</p>
                    <div className="flex items-center gap-1">
                        {
                            getStars(4, 'text-[#6A4830]')
                        }
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    {
                        reviews.map((i, index) => (
                            <div className="size-86 flex justify-center relative rounded-[14px] bg-white" key={index}>
                                <div className="w-4/5 flex flex-col gap-3 absolute top-10">
                                    <div className="flex items-center">
                                        {
                                            getStars(4.5, 'text-yellow-500')
                                        }
                                    </div>
                                    <p className="poppinsFont font-semibold text-lg tracking-wider leading-5.5 text-black">{i.name}</p>
                                    <p className="poppinsFont font-semibold text-sm tracking-wide leading-5.25 text-black">{i.review}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}