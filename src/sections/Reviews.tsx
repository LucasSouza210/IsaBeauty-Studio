import { TiStarOutline } from "react-icons/ti";
import { useTranslate } from "../Translations";

export default function Reviews() {

    const translate = useTranslate()

    const reviews = [
        {
            rating: 5,
            name: "Ana Ichim",
            review: translate('firstReview').line()
        },
        {
            rating: 5,
            name: "Tatiana",
            review: translate('secondReview').line()
        },
        {
            rating: 5,
            name: "Amrita",
            review: translate('thirdReview').line()
        }
    ];

    const getStars = (size: string, color: string) => {
        return Array.from({ length: 5 }, (_, i) => (
            <TiStarOutline key={i} className={`${size} ${color}`} />
        ))
    }

    return (
        <div className="w-full lg:pt-18 xl:pt-22 2xl:pt-26 lg:pb-10 xl:pb-12 2xl:pb-18 px-10 md:px-16 lg:px-0 py-14 sm:px-16 md:py-18 lg:py-0 flex justify-center bg-[#EFE6DF]" id="reviews">
            <div className="w-full sm:w-7/10 lg:w-176 xl:w-218 2xl:w-280 h-full flex flex-col justify-center gap-10 sm:gap-11 md:gap-12 lg:gap-10 xl:gap-12">
                <div className="flex items-center gap-4 sm:gap-5 md:gap-6 lg:gap-5 xl:gap-7.5 2xl:gap-9">
                    <p className="poppinsFont font-semibold text-lg sm:text-xl md:text-[22px] lg:text-[19px] xl:text-[23px] 2xl:text-[26px] leading-none text-[#6A4830]">{translate('reviewsTitle').line()}</p>
                    <div className="flex items-center gap-0.5 md:gap-1 lg:gap-0.5">
                        {
                            getStars('size-3 sm:size-3.5 md:size-4 lg:size-3 xl:size-3.5 2xl:size-4', 'text-[#6A4830]')
                        }
                    </div>
                </div>
                <div className="w-full flex flex-col gap-12 lg:gap-14">
                    <div className="w-full flex flex-col lg:grid grid-cols-3 items-center gap-8 sm:gap-9 md:gap-10 lg:gap-3 xl:gap-4 2xl:gap-5">
                        {
                            reviews.map((i, index) => (
                                <div className="w-full h-52 sm:h-58 md:h-68 lg:h-auto lg:aspect-square flex flex-col gap-2 sm:gap-2.5 md:gap-3 lg:gap-1 xl:gap-2 2xl:gap-2.5 rounded-[14px] p-8 sm:p-9 md:p-10 lg:p-6 xl:p-7 2xl:p-8 bg-white" key={index}>
                                    <div className="flex items-center md:gap-0.5 mb-1 sm:mb-1.5 lg:mb-1 xl:mb-1.5">
                                        {
                                            getStars('size-3 sm:size-3.5 md:size-4 lg:size-3 xl:size-3.5 2xl:size-4.5', 'text-yellow-500')
                                        }
                                    </div>
                                    <p className="poppinsFont font-semibold text-sm sm:text-base md:text-lg lg:text-xs xl:text-[15px] 2xl:text-lg tracking-wider leading-none text-black">{i.name}</p>
                                    <p className="poppinsFont font-medium text-xs sm:text-sm md:text-base lg:text-[10px] xl:text-xs 2xl:text-sm tracking-wide lg:tracking-wide 2xl:tracking-wider leading-4.5 sm:leading-5 md:leading-6 lg:leading-4 xl:leading-5 2xl:leading-6 text-black">{i.review}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="w-full flex justify-center gap-2 sm:gap-2.25 md:gap-2.5 lg:gap-2.5 xl:gap-3 2xl:gap-3.5">
                        {
                            [0, 1, 2].map((i, index) => (
                                <span className="size-2 sm:size-2.25 md:size-2.5 lg:size-2 xl:size-2.5 2xl:size-3 rounded-full bg-white" key={index} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}