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
            <div className="lg:w-176 xl:w-226 2xl:w-280 min-h-full flex flex-col justify-center items-start 2xl:gap-9 relative">
                <div className="flex flex-col lg:gap-6 xl:gap-7.5 2xl:gap-9 items-start absolute lg:top-34 xl:top-36 2xl:top-42">
                    <img src={logo} alt="" className="lg:h-12 xl:h-16 2xl:h-18 w-auto xl:mb-1 2xl:mb-2" />
                    <p className="dmFont font-semibold lg:text-[35px] xl:text-[44px] 2xl:text-[52px] lg:leading-9 xl:leading-12 2xl:leading-15 lg:tracking-tight xl:tracking-normal text-[#6A4830]">Awaken the best version <br /> of you, take care of your <br /> skin, take care of yourself.</p>
                    <p className="poppinsFont lg:font-semibold lg:text-[10px] xl:text-sm 2xl:text-base lg:tracking-wide xl:tracking-normal">With my experience, I’m confident I can help you achieve the skin <br /> of your dreams. I can’t wait to welcome you to my treatment room!</p>
                    <BookMyTreatment bg="bg-[#6A4830]" content="text-[#FFFFFF]"/>
                </div>
                <img src={isa} alt="" className="lg:h-210 xl:h-242 2xl:h-306 absolute right-0 lg:-bottom-63 xl:-bottom-70 2xl:-bottom-88" />
                <div className="w-full flex flex-col lg:gap-5 xl:gap-6 2xl:gap-7 absolute lg:-bottom-28 xl:-bottom-34 2xl:-bottom-40 z-20">
                    <p className="poppinsFont font-bold lg:text-sm xl:text-base 2xl:text-lg leading-[1.44]">Some brands we reached</p>
                    <div className="grid grid-cols-3 lg:gap-6 xl:gap-7 2xl:gap-8">
                        {
                            data.map((i, index) => (
                                <div className="w-full lg:h-38 xl:h-48 2xl:h-58 flex items-end justify-center rounded-[10px] bg-white shadow-[0px_7px_24px_0px_rgba(0,0,0,0.25)]" key={index}>
                                    <div className="flex flex-col mb-10">
                                        <p className="interFont font-bold lg:text-2xl xl:text-3xl 2xl:text-[38px] lg:leading-7 xl:leading-12 text-[#6A4830]">{i.total}</p>
                                        <p className="interFont font-bold lg:text-[10px] xl:text-xs 2xl:text-sm text-[#918F8F]">{i.title}</p>
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