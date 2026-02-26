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
            <div className="2xl:w-300 min-h-full flex flex-col justify-center items-start 2xl:gap-9 relative">
                <div className="flex flex-col gap-9 items-start">
                    <img src={logo} alt="" className="2xl:h-34 w-auto" />
                    <p className="2xl:max-w-176 dmFont font-semibold 2xl:text-[62px] leading-15 tracking-normal text-[#6A4830]">Awaken the best version of you, take care of your skin, take care of yourself.</p>
                    <p className="2xl:max-w-xl poppinsFont 2xl:font-semibold 2xl:text-lg">With my experience, I’m confident I can help you achieve the skin of your dreams. I can’t wait to welcome you to my treatment room!</p>
                    <BookMyTreatment bg="#6A4830" content="#FFFFFF"/>
                </div>
                <img src={isa} alt="" className="2xl:h-298 absolute right-0 -bottom-88" />
                <div className="w-full flex flex-col gap-8 absolute -bottom-46 z-20">
                    <p className="poppinsFont font-bold text-lg leading-[1.44]">Some brands we reached</p>
                    <div className="grid grid-cols-3 gap-8">
                        {
                            data.map((i, index) => (
                                <div className="w-full h-62 flex items-end justify-center rounded-[10px] bg-white shadow-[0px_7px_24px_0px_rgba(0,0,0,0.25)]" key={index}>
                                    <div className="flex flex-col mb-10">
                                        <p className="interFont font-bold text-[38px] leading-12 text-[#6A4830]">{i.total}</p>
                                        <p className="interFont font-bold text-sm text-[#918F8F]">{i.title}</p>
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