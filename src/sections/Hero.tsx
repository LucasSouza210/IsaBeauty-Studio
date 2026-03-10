import background from "../assets/images/heroBackground.png"
import logo from "../assets/images/heroLogo.png"
import isa from "../assets/images/heroIsa.png"
import isaMobile from "../assets/images/mobileIsa.png"
import BookMyTreatment from "../components/BookMyTreatment"

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
        <div className="w-full min-h-screen flex justify-center bg-cover bg-center p-6 lg:p-0 pt-12 lg:pt-0" style={{ backgroundImage: `url(${background})` }}>
            <div className="w-full lg:w-174 xl:w-218 2xl:w-280 min-h-full flex flex-col lg:justify-center lg:items-start gap-8 lg:gap-0 2xl:gap-9 relative">
                <div className="w-full lg:w-auto flex flex-col items-center lg:items-start gap-6 lg:gap-6 xl:gap-7.5 2xl:gap-9 lg:absolute lg:top-34 xl:top-36 2xl:top-42">
                    <img src={logo} alt="" className="h-10 lg:h-12 xl:h-16 2xl:h-18 w-auto xl:mb-1 2xl:mb-2" />
                    <img src={isaMobile} alt="" className="block lg:hidden w-7/10 object-cover mt-8 [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]"/>
                    <p className="dmFont font-semibold text-center lg:text-start text-[20px] lg:text-[35px] xl:text-[44px] 2xl:text-[52px] leading-7 lg:leading-9 xl:leading-12 2xl:leading-15 lg:tracking-tight xl:tracking-normal text-[#6A4830]">Awaken the best version <br className="hidden lg:block"/> of you,<br className="lg:hidden"/> take care of your <br className="hidden lg:block"/> skin,<br className="lg:hidden"/> take care of yourself.</p>
                    <p className="whitespace-nowrap poppinsFont font-semibold text-center lg:text-start text-xs lg:text-[10px] xl:text-sm 2xl:text-base tracking-wide xl:tracking-normal">With my experience, I’m confident I can help you<br className="lg:hidden"/> achieve the skin <br className="hidden lg:block"/> of your dreams. I can’t wait<br className="lg:hidden"/> to welcome you to my treatment room!</p>
                    <BookMyTreatment bg="bg-[#6A4830]" content="text-[#FFFFFF]"/>
                </div>
                <img src={isa} alt="" className="hidden lg:block lg:h-210 xl:h-242 2xl:h-306 absolute right-0 -bottom-6 lg:-bottom-63 xl:-bottom-70 2xl:-bottom-88" />
                <div className="w-full flex flex-col gap-4 lg:gap-5 xl:gap-6 2xl:gap-7 relative lg:absolute lg:-bottom-28 xl:-bottom-32 2xl:-bottom-40 lg:z-20">
                    <p className="poppinsFont font-bold lg:text-sm xl:text-base 2xl:text-lg leading-[1.44]">Some brands we reached</p>
                    <div className="flex flex-col lg:grid grid-cols-3 gap-6 xl:gap-7 2xl:gap-8">
                        {
                            data.map((i, index) => (
                                <div className="w-full h-46 lg:h-38 xl:h-46 2xl:h-58 flex items-end justify-center rounded-[10px] bg-white shadow-[0px_7px_24px_0px_rgba(0,0,0,0.25)]" key={index}>
                                    <div className="flex flex-col gap-2 lg:gap-0 mb-10">
                                        <p className="interFont font-bold text-4xl lg:text-2xl xl:text-3xl 2xl:text-[38px] lg:leading-7 xl:leading-12 text-[#6A4830]">{i.total}</p>
                                        <p className="interFont font-bold text-sm lg:text-[10px] xl:text-xs 2xl:text-sm text-[#918F8F]">{i.title}</p>
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