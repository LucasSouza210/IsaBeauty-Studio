import logo from '../assets/images/heroLogo.png'
import one from '../assets/images/treatmentOne.jpg'
import two from '../assets/images/treatmentTwo.jpg'
import three from '../assets/images/treatmentThree.png'
import four from '../assets/images/treatmentFour.png'
import five from '../assets/images/treatmentFive.jpg'
import six from '../assets/images/treatmentSix.jpg'

export default function Treatments() {

    const treatments = [
        {
            title: 'Weight Loss and Body Contouring (Iximia HR777)',
            description: 'A non-invasive body contouring treatment designed to reduce localized fat, improve body shape, and enhance definition. The Iximia HR777 technology stimulates fat reduction while helping to firm and sculpt targeted areas for visible, measurable results.',
            src: one
        },
        {
            title: 'Cellulite and Skin Tightening Treatments (Radiofrequency + Lipolaser) ',
            description: 'Advanced combination therapy that targets cellulite, improves skin texture, and boosts firmness. Radiofrequency stimulates collagen production while lipolaser helps reduce fat deposits, leaving the skin smoother and tighter.',
            src: two
        },
        {
            title: 'Lymphatic Drainage / Body Detox',
            description: 'A specialized technique that stimulates the lymphatic system, reducing water retention, swelling, and toxins. Ideal for improving circulation, enhancing body contour, and promoting a lighter, more defined appearance.',
            src: three
        },
        {
            title: 'Laser Hair Removal',
            description: 'Safe and effective long-term hair reduction using advanced laser technology. Targets hair follicles precisely, reducing regrowth while keeping the surrounding skin protected and smooth.',
            src: four
        },
        {
            title: 'Advanced Facial Treatments (Deep Cleansing + Peels)',
            description: 'Professional facial treatments designed to deeply cleanse, renew, and restore skin health. Includes customized cleansing protocols and chemical peels to improve texture, brightness, acne, and pigmentation.',
            src: five
        },
        {
            title: 'Anti-Aging / Facial Rejuvenation Treatments (HIFU – High-Intensity Focused Ultrasound)',
            description: 'Non-invasive facial lifting and rejuvenation treatment using High-Intensity Focused Ultrasound (HIFU). Stimulates deep collagen production, improves skin firmness, reduces sagging and fine lines, and promotes a natural lifting and tightening effect with no downtime.',
            src: six
        }
    ]

    return (
        <div className="w-full lg:py-22 xl:py-28 2xl:py-34 flex justify-center bg-white">
            <div className="lg:w-174 xl:w-218 2xl:w-280 h-full flex flex-col items-center justify-center lg:gap-14 xl:gap-18 2xl:gap-24">
                <div className="flex items-center lg:gap-5 xl:gap-6 2xl:gap-8">
                    <img src={logo} alt="" className='lg:h-9 xl:h-11 2xl:h-13' />
                    <p className='poppinsFont font-semibold lg:text-2xl xl:text-[30px] 2xl:text-4xl leading-5.5 tracking-wide text-[#6A4830]'>Treatments</p>
                </div>
                <div className="grid grid-cols-3 grid-rows-2 justify-items-center lg:gap-x-8 xl:gap-x-10 2xl:gap-x-13 lg:gap-y-14 xl:gap-y-19 2xl:gap-y-26">
                    {
                        treatments.map((i, index) => (
                            <div className='w-full flex flex-col lg:gap-4 xl:gap-6 2xl:gap-8 items-center' key={index}>
                                <div className='w-full flex flex-col rounded-[14px] overflow-hidden'>
                                    <img src={i.src} alt="" className='w-full aspect-square object-cover' />
                                    <div className='w-full lg:h-13 xl:h-16 2xl:h-18 flex items-center justify-center bg-[#C0987E]'>
                                        <p className='max-w-9/10 text-center poppinsFont font-semibold lg:text-[10px] xl:text-xs text-sm lg:tracking-widest lg:leading-3 xl:leading-4 2xl:leading-4.5 text-white'>{i.title}</p>
                                    </div>
                                </div>
                                <p className='w-full lg:h-36 xl:h-40 2xl:h-48 poppinsFont font-medium lg:text-[11px] xl:text-[13px] 2xl:text-base lg:tracking-widest lg:leading-4 xl:leading-5 2xl:leading-6 text-black'>{i.description}</p>
                                <button className='w-17/20 lg:h-8.5 xl:h-10 2xl:h-13 flex items-center justify-center poppinsFont font-semibold lg:text-[11px] xl:text-[13px] 2xl:text-base tracking-wider rounded-full bg-[#6A4830] text-white'>MAKE AN APPOINTMENT</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}