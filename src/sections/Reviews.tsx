import { TiStarOutline } from "react-icons/ti";

export default function Reviews() {

    const reviews = [
        {
            rating: 5,
            name: "Ana Ichim",
            review: `Superb visit at Isa Beauty! At 50 years old, the owner has a glowing youthfulness. Excellent facial treatment, I will definitely return!`
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

    const getStars = (size: string, color: string) => {
        return Array.from({ length: 5 }, (_, i) => (
            <TiStarOutline key={i} className={`${size} ${color}`} />
        ))
    }

    return (
        <div className="w-full xl:pt-22 2xl:pt-26 xl:pb-12 2xl:pb-18 flex justify-center bg-[#EFE6DF]">
            <div className="xl:w-226 2xl:w-280 h-full flex flex-col justify-center gap-12">
                <div className="flex items-center xl:gap-7.5 2xl:gap-9">
                    <p className="poppinsFont font-semibold xl:text-[24px] 2xl:text-[26px] leading-5.5 text-[#6A4830]">Customer reviews</p>
                    <div className="flex items-center gap-1">
                        {
                            getStars('xl:size:3-5 2xl:size-4', 'text-[#6A4830]')
                        }
                    </div>
                </div>
                <div className="w-full flex flex-col gap-14">
                    <div className="w-full grid grid-cols-3 items-center gap-4">
                        {
                            reviews.map((i, index) => (
                                <div className="w-full aspect-square flex justify-center relative rounded-[14px] bg-white" key={index}>
                                    <div className="w-7/10 flex flex-col xl:gap-2.5 2xl:gap-3 absolute top-10">
                                        <div className="flex items-center">
                                            {
                                                getStars('xl:size-4 2xl:size-4.5', 'text-yellow-500')
                                            }
                                        </div>
                                        <p className="poppinsFont font-semibold xl:text-base 2xl:text-lg tracking-wider leading-5.5 text-black">{i.name}</p>
                                        <p className="poppinsFont font-semibold xl:text-[13px] 2xl:text-sm tracking-wide leading-5.25 text-black">{i.review}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="w-full flex justify-center xl:gap-3 2xl:gap-3.5">
                        {
                            [0, 1, 2].map((i, index) => (
                                <span className="xl:size-2.5 2xl:size-3 rounded-full bg-white" key={index}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}