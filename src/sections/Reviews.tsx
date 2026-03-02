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
        <div className="w-full lg:pt-18 xl:pt-22 2xl:pt-26 lg:pb-10 xl:pb-12 2xl:pb-18 flex justify-center bg-[#EFE6DF]">
            <div className="lg:w-174 xl:w-218 2xl:w-280 h-full flex flex-col justify-center lg:gap-10 xl:gap-12">
                <div className="flex items-center lg:gap-5 xl:gap-7.5 2xl:gap-9">
                    <p className="poppinsFont font-semibold lg:text-[19px] xl:text-[23px] 2xl:text-[26px] leading-5.5 text-[#6A4830]">Customer reviews</p>
                    <div className="flex items-center lg:gap-0.5">
                        {
                            getStars('lg:size-3 xl:size-3.5 2xl:size-4', 'text-[#6A4830]')
                        }
                    </div>
                </div>
                <div className="w-full flex flex-col gap-14">
                    <div className="w-full grid grid-cols-3 items-center lg:gap-3 xl:gap-4 2xl:gap-5">
                        {
                            reviews.map((i, index) => (
                                <div className="w-full aspect-square flex flex-col lg:gap-1.5 xl:gap-2 2xl:gap-2.5 rounded-[14px] lg:p-6 xl:p-7 2xl:p-8 bg-white" key={index}>
                                    <div className="flex items-center">
                                        {
                                            getStars('lg:size-3.5 xl:size-4 2xl:size-4.5', 'text-yellow-500')
                                        }
                                    </div>
                                    <p className="poppinsFont font-semibold lg:text-xs xl:text-[15px] 2xl:text-lg tracking-wider leading-5.5 text-black">{i.name}</p>
                                    <p className="poppinsFont font-medium lg:text-[10px] xl:text-xs 2xl:text-sm lg:tracking-widest 2xl:tracking-[0.15em] lg:leading-4 xl:leading-5 2xl:leading-6 text-black">{i.review}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="w-full flex justify-center lg:gap-2.5 xl:gap-3 2xl:gap-3.5">
                        {
                            [0, 1, 2].map((i, index) => (
                                <span className="lg:size-2 xl:size-2.5 2xl:size-3 rounded-full bg-white" key={index} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}