import logo from '../assets/images/heroLogo.png'
import one from '../assets/images/treatmentOne.jpg'
import two from '../assets/images/treatmentTwo.jpg'
import three from '../assets/images/treatmentThree.png'
import four from '../assets/images/treatmentFour.png'
import five from '../assets/images/treatmentFive.jpg'
import six from '../assets/images/treatmentSix.jpg'
import { useTranslate } from '../Translations'

export default function Treatments() {

    const translate = useTranslate()

    const treatments = [
        {
            title: translate('firstTreatmentTitle').line(),
            description: translate('firstTreatmentDesc').line(),
            src: one
        },
        {
            title: translate('secondTreatmentTitle').line(),
            description: translate('secondTreatmentDesc').line(),
            src: two
        },
        {
            title: translate('thirdTreatmentTitle').line(),
            description: translate('thirdTreatmentDesc').line(),
            src: three
        },
        {
            title: translate('fourthTreatmentTitle').line(),
            description: translate('fourthTreatmentDesc').line(),
            src: four
        },
        {
            title: translate('fifthTreatmentTitle').line(),
            description: translate('fifthTreatmentDesc').line(),
            src: five
        },
        {
            title: translate('sixthTreatmentTitle').line(),
            description: translate('sixthTreatmentDesc').line(),
            src: six
        }
    ]

    return (
        <div className="w-full py-14 sm:py-16 md:py-18 lg:py-22 xl:py-28 2xl:py-34 px-10 md:px-16 lg:px-0 flex justify-center bg-white" id='treatments'>
            <div className="w-full sm:w-7/10 lg:w-176 xl:w-218 2xl:w-280 h-full flex flex-col items-center justify-center gap-12 sm:gap-14 md:gap-16 lg:gap-14 xl:gap-18 2xl:gap-24">
                <div className="flex items-center gap-4 lg:gap-5 xl:gap-6 2xl:gap-8">
                    <img src={logo} alt="" className='h-7 sm:h-9 md:h-10.5 lg:h-9 xl:h-11 2xl:h-13' />
                    <p className='poppinsFont font-semibold text-lg sm:text-2xl md:text-[28px] lg:text-2xl xl:text-[30px] 2xl:text-4xl tracking-wide leading-none text-[#6A4830]'>{translate('treatmentsTitle').line()}</p>
                </div>
                <div className="flex flex-col lg:grid grid-cols-3 grid-rows-2 auto-rows-[1fr] justify-items-center gap-12 sm:gap-14 lg:gap-0 lg:gap-x-8 xl:gap-x-10 2xl:gap-x-13 lg:gap-y-14 xl:gap-y-19 2xl:gap-y-26">
                    {
                        treatments.map((i, index) => (
                            <div className='w-full flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-4 xl:gap-6 2xl:gap-8 items-center' key={index}>
                                <div className='w-full flex flex-col rounded-[14px] overflow-hidden'>
                                    <img src={i.src} alt="" className='w-full aspect-square object-cover' />
                                    <div className='w-full min-h-18 sm:min-h-22 md:min-h-26 lg:min-h-13 xlmin-:h-16 2xl:min-h-18 flex items-center justify-center py-3 sm:py-4 lg:py-0 px-6 lg:px-0 bg-[#C0987E]'>
                                        <p className='lg:max-w-9/10 text-center poppinsFont font-semibold text-sm sm:text-base md:text-lg lg:text-[10px] xl:text-xs tracking-wide md:tracking-wider leading-5 sm:leading-6 md:leading-7 lg:leading-3.5 xl:leading-4.5 2xl:leading-4.5 text-white'>{i.title}</p>
                                    </div>
                                </div>
                                <p className='w-full lg:flex-1 poppinsFont font-medium text-sm sm:text-base md:text-lg lg:text-[11px] xl:text-[13px] 2xl:text-base tracking-wide sm:tracking-wider leading-5.5 sm:leading-6.5 md:leading-7.75 lg:leading-4 xl:leading-5 2xl:leading-6 text-black'>{i.description}</p>
                                <a href={'#contact'} className='w-17/20 h-10 sm:h-12 md:h-14 lg:h-8.5 xl:h-10 2xl:h-13 flex items-center justify-center poppinsFont font-semibold text-sm sm:text-base md:text-lg lg:text-[11px] xl:text-[13px] 2xl:text-base tracking-wider rounded-full transition-all duration-200 cursor-pointer bg-[#6A4830] hover:bg-[#5A3D28] text-white'>{translate('buttonText').line()}</a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}