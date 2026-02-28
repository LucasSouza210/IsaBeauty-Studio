import background from "../assets/images/heroBackground.png"
import logo from "../assets/images/heroLogo.png"
import isa from "../assets/images/heroIsa.png"
import BookMyTreatment from "../components/BookMyTreatment";

type Item = {
    total: string
    title: string
}

export default function Hero() {

    const data: Item[] = [
        {
            total: '+10',
            title: 'AESTHETIC TREATMENTS'
        },
        {
            total: '+100',
            title: 'CUSTOMERS SERVED'
        },
        {
            total: '+98%',
            title: 'TOTAL SATISFACTION'
        }
    ]

    return (
        <div className="w-full min-h-screen flex justify-center bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
            <div className="xl:w-214 2xl:w-280 min-h-full flex flex-col justify-center items-start 2xl:gap-9 relative">
                <div className="flex flex-col xl:gap-7.5 2xl:gap-9 items-start absolute xl:top-40 2xl:top-42">
                    <img src={logo} alt="" className="xl:h-14 2xl:h-18 w-auto xl:mb-1 2xl:mb-2" />
                    <p className="xl:max-w-122 2xl:max-w-152 dmFont font-semibold xl:text-[43px] 2xl:text-[54px] xl:leading-12 2xl:leading-15 tracking-normal text-[#6A4830]">Awaken the best version of you, take care of your skin, take care of yourself.</p>
                    <p className="xl:max-w-112 2xl:max-w-xl poppinsFont xl:font-semibold 2xl:font-semibold xl:text-sm 2xl:text-lg">With my experience, I’m confident I can help you achieve the skin of your dreams. I can’t wait to welcome you to my treatment room!</p>
                    <BookMyTreatment bg="bg-[#6A4830]" content="text-[#FFFFFF]"/>
                </div>
                <img src={isa} alt="" className="xl:h-238 2xl:h-306 absolute right-0 xl:-bottom-72 2xl:-bottom-88" />
                <div className="w-full flex flex-col gap-6 2xl:gap-8 absolute -bottom-30 2xl:-bottom-40 z-20">
                    <p className="poppinsFont font-bold 2xl:text-base 2xl:text-lg leading-[1.44]">Some brands we reached</p>
                    <div className="grid grid-cols-3 gap-8">
                        {
                            data.map((i, index) => (
                                <div className="w-full xl:h-42 2xl:h-58 flex items-end justify-center rounded-[10px] bg-white shadow-[0px_7px_24px_0px_rgba(0,0,0,0.25)]" key={index}>
                                    <div className="flex flex-col mb-10">
                                        <p className="interFont font-bold xl:text-3xl 2xl:text-[38px] leading-12 text-[#6A4830]">{i.total}</p>
                                        <p className="interFont font-bold xl:text-xs 2xl:text-sm text-[#918F8F]">{i.title}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}