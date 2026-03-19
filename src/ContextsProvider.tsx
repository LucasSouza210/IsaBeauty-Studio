import { createContext, useState, useEffect } from "react"
import type { ReactNode } from "react"
import brFlag from '../src/assets/flags/BR.png'
import beFlag from '../src/assets/flags/BE.png'
import ukFlag from '../src/assets/flags/GB.png'
import frFlag from '../src/assets/flags/RE.png'

type ProviderProps = {
    children: ReactNode
}

type Language = {
    title: string
    flag: string
}

type AppContexts = {
    languages: Language[]
    overlay: boolean | undefined
    setOverlay: React.Dispatch<React.SetStateAction<boolean | undefined>>
    selectedLang: Language
    setSelectedLang: React.Dispatch<React.SetStateAction<Language>>
    langOpen: boolean | undefined
    setLangOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>
}

export const Contexts = createContext<AppContexts | null>(null)

export default function ContextsProvider({ children }: ProviderProps) {

    const languages: Language[] = [
        {
            title: 'nl',
            flag: beFlag
        },
        {
            title: 'en',
            flag: ukFlag
        },
        {
            title: 'fr',
            flag: frFlag
        },
        {
            title: 'pt',
            flag: brFlag
        },
    ]
    const [overlay, setOverlay] = useState<boolean | undefined>(false)

    const [selectedLang, setSelectedLang] = useState<Language>(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem('selectedLang')
            return saved ? JSON.parse(saved) : languages[0]
        }
    })

    const [langOpen, setLangOpen] = useState<boolean | undefined>(false)

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem('selectedLang', JSON.stringify(selectedLang));
        }
    }, [selectedLang])

    useEffect(() => {
        if (typeof window !== "undefined") {
            const html = document.documentElement
            html.setAttribute('lang', selectedLang.title)
        }
    }, [selectedLang])

    return (
        <Contexts.Provider value={{ languages, overlay, setOverlay, selectedLang, setSelectedLang, langOpen, setLangOpen }}>
            {children}
        </Contexts.Provider>
    )
}