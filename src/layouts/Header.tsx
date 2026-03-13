import { IoMenu } from "react-icons/io5";
import logo from '../assets/images/heroLogo.png'

type Props = {
    setMenu: React.Dispatch<React.SetStateAction<boolean | undefined>>
}

export default function Header(props: Props) {

    const links = [
        {
            title: 'About',
            src: '#about'
        },
        {
            title: 'How it works',
            src: '#process'
        },
        {
            title: 'Reviews',
            src: '#reviews'
        },
        {
            title: 'Treatments',
            src: '#treatments'
        }
    ]

    return (
        <header className="w-full h-14 flex items-center justify-between border-b px-8 border-[#CF9F89]/50 bg-[#F6E0D7]">
            <img src={logo} alt="" className='h-5' />
            <button className="size-5 block lg:hidden" onClick={() => props.setMenu(true)}>
                <IoMenu className="size-full text-zinc-700" />
            </button>
        </header>
    )
}