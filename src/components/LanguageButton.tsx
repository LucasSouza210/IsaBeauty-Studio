import { useContext } from "react"
import { Contexts } from "../ContextsProvider"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"

export default function LanguageButton() {

    const context = useContext(Contexts)
    const { overlay, setOverlay, languages, selectedLang, setSelectedLang, langOpen, setLangOpen } = context!

    return (
        <div className="flex flex-col relative" onClick={(e) => e.preventDefault}>
            <button className="flex items-center group gap-1 sm:gap-1.25 md:gap-1.5 lg:gap-1 xl:gap-1.25 2xl:gap-1.5 cursor-pointer" onClick={() => setLangOpen(!langOpen)}>
                <img className="size-5 sm:size-6 md:size-7 lg:size-5 xl:size-6 2xl:size-7 object-cover rounded-full" src={selectedLang.flag} alt="" />
                {
                    langOpen ?
                        <IoMdArrowDropup className="size-3 sm:size-3.5 md:size-4 lg:size-3 xl:size-3.5 2xl:size-4 transition-all duration-200 cursor-pointer fill-zinc-700 group-hover:fill-zinc-900" />
                        :
                        <IoMdArrowDropdown className="size-3 sm:size-3.5 md:size-4 lg:size-3 xl:size-3.5 2xl:size-4 transition-all duration-200 cursor-pointer fill-zinc-700 group-hover:fill-zinc-900" />
                }
            </button>
            <div className={`${langOpen ? 'flex' : 'hidden'} w-full flex-col gap-3 sm:gap-3.5 md:gap-4 lg:gap-3 xl:gap-3.5 2xl:gap-4 rounded-lg sm:rounded-[10px] md:rounded-xl lg:rounded-lg xl:rounded-[10px] 2xl:rounded-xl p-2 sm:p-2.25 md:p-2.5 lg:p-2 xl:p-2.25 2xl:p-2.5 absolute z-10 top-8 sm:top-9.5 md:top-11 lg:top-8 xl:top-9.5 2xl:top-11 bg-white`}>
                <button onClick={() => setLangOpen(false)} className="rounded-full overflow-hidden border border-zinc-400">
                    <img src={selectedLang.flag} alt="" className="w-full aspect-square object-cover" />
                </button>
                {
                    languages.filter(i => i.title != selectedLang.title).map((i, index) => (
                        <button key={index} className="cursor-pointer rounded-full overflow-hidden transition-all duration-200 border border-transparent hover:border-zinc-300" onClick={() => {
                            setSelectedLang(i)
                            setLangOpen(false)
                        }}>
                            <img src={i.flag} alt="" className="w-full aspect-square object-cover" />
                        </button>
                    ))
                }
            </div>
        </div>
    )
}