import { useContext } from "react"
import { Contexts } from "./ContextsProvider"

type Lang = 'nl' | 'en' | 'fr' | 'pt'

const Translations = {
    hero: {
        heroMain: {
            nl: 'Ontwaak de beste versie van jezelf, zorg goed voor je huid, zorg goed voor jezelf.',
            en: 'Awaken the best version of you, take care of your skin, take care of yourself.',
            fr: 'Réveillez la meilleure version de vous-même, prenez soin de votre peau, prenez soin de vous.',
            pt: 'Desperte a melhor versão de si mesmo, cuide da sua pele, cuide de si mesmo.'
        },
        desc: {
            nl: 'Met mijn ervaring ben ik ervan overtuigd dat ik u kan helpen de huid van uw dromen te bereiken. Ik kijk ernaar uit u te verwelkomen in mijn praktijkruimte!',
            en: 'With my experience, I’m confident I can help you achieve the skin of your dreams. I can’t wait to welcome you to my treatment room!',
            fr: 'Forte de mon expérience, je suis convaincue de pouvoir vous aider à obtenir la peau de vos rêves. J’ai hâte de vous accueillir dans mon espace de soins!',
            pt: 'Com minha experiência, tenho certeza de que posso ajudar você a conquistar a pele dos seus sonhos. Mal posso esperar para receber você no meu espaço de atendimento!'
        },
        dataTitle: {
            nl: 'Enkele merken die we hebben bereikt',
            en: 'Some brands we reached',
            fr: 'Quelques marques que nous avons atteintes',
            pt: 'Algumas marcas que alcançamos'
        },
        firstBlock: {
            nl: 'ESTHETISCHE BEHANDELINGEN',
            en: 'AESTHETIC TREATMENTS',
            fr: 'TRAITEMENTS ESTHÉTIQUES',
            pt: 'TRATAMENTOS ESTÉTICOS'
        },
        secondBlock: {
            nl: 'KLANTEN GEHOLPEN',
            en: 'CUSTOMERS SERVED',
            fr: 'CLIENTS SERVIS',
            pt: 'CLIENTES ATENDIDOS'
        },
        thirdBlock: {
            nl: 'VOLLEDIGE TEVREDENHEID',
            en: 'TOTAL SATISFACTION',
            fr: 'SATISFACTION TOTALE',
            pt: 'SATISFAÇÃO TOTAL'
        }
    }
}

export function useTranslate() {

    const context = useContext(Contexts)
    const { selectedLang } = context!

    const lang = selectedLang.title as Lang

    return (content: string) => {
        const sections = Object.values(Translations)

        const block = sections.find(section => content in section)

        return (block as any)?.[content]?.[lang]
    }
}