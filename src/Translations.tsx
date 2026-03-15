import { useContext } from "react"
import { Contexts } from "./ContextsProvider"

type Lang = 'nl' | 'en' | 'fr' | 'pt'

const Translations = {
    hero: {
        heroMain: {
            nl: `Ontwaak de beste versie\\d van\\m jezelf, zorg goed voor je\\d huid,\\m zorg goed voor jezelf.`,
            en: `Awaken the best version\\d of\\m you, take care of your\\d skin,\\m take care of yourself.`,
            fr: `Réveillez votre\\m meilleure\\d version, prenez\\m soin de\\d votre peau et de vous.`,
            pt: `Desperte a melhor versão\\n de si mesmo, cuide da sua\\n pele, cuide de si mesmo.`
        },
        desc: {
            nl: `Met mijn ervaring ben ik ervan overtuigd dat ik u\\m kan helpen de huid\\d van uw dromen te bereiken.\\m Ik kijk ernaar uit u te verwelkomen!`,
            en: `With my experience, I’m confident I can help you\\m achieve the skin\\d of your dreams. I can’t wait\\m to welcome you to my treatment room!`,
            fr: `Forte de mon expérience, je peux vous\\m aider à obtenir la peau de\\d vos rêves. J’ai hâte\\m de vous accueillir dans mon espace de soins!`,
            pt: `Com minha experiência, posso te ajudar a\\m conquistar sua pele\\d dos sonhos. Espero te\\m receber no meu espaço de atendimento!`
        },
        dataTitle: {
            nl: `Enkele merken die we hebben bereikt`,
            en: `Some brands we reached`,
            fr: `Quelques marques que nous avons atteintes`,
            pt: `Algumas marcas que alcançamos`
        },
        firstBlock: {
            nl: `ESTHETISCHE BEHANDELINGEN`,
            en: `AESTHETIC TREATMENTS`,
            fr: `TRAITEMENTS ESTHÉTIQUES`,
            pt: `TRATAMENTOS ESTÉTICOS`
        },
        secondBlock: {
            nl: `KLANTEN GEHOLPEN`,
            en: `CUSTOMERS SERVED`,
            fr: `CLIENTS SERVIS`,
            pt: `CLIENTES ATENDIDOS`
        },
        thirdBlock: {
            nl: `VOLLEDIGE TEVREDENHEID`,
            en: `TOTAL SATISFACTION`,
            fr: `SATISFACTION TOTALE`,
            pt: `SATISFAÇÃO TOTAL`
        }
    },
    about: {
        aboutSubtitle: {
            nl: `PERSOONLIJKE VERKLARING`,
            en: `PERSONAL STATEMENT`,
            fr: `DÉCLARATION PERSONNELLE`,
            pt: `DECLARAÇÃO PESSOAL`
        },
        aboutTitle: {
            nl: `Mijn naam is Isabel en ik ben uw huidspecialist.`,
            en: `My name is Isabel and I am your Skin Specialist.`,
            fr: `Je m’appelle Isabel, spécialiste de la peau.`,
            pt: `Meu nome é Isabel e sou sua especialista em pele.`
        },
        aboutCardTitle: {
            nl: `Met ruim 10 jaar ervaring in de schoonheidssector\\d verenig ik professionele expertise met een\\d oprechte passie voor huidverbetering en zelfzorg.`,
            en: `With over 10 years of experience in the beauty\\d industry, I combine professional expertise with\\d a true passion for skin improvement and self-care.`,
            fr: `Avec plus de 10 ans d’expérience, je\\d combine expertise professionnelle et passion\\d pour l’amélioration de la peau et le soin de soi.`,
            pt: `Com mais de 10 anos de experiência na indústria\\d da beleza, uno expertise profissional a uma real\\d paixão pela melhoria da pele e pelo autocuidado.`
        },
        aboutCardContent: {
            nl: `In de loop der jaren heb ik diverse cursussen gevolgd en certificaten behaald in\\d verschillende landen, waardoor ik een internationaal perspectief heb op de\\d nieuwste beautytechnieken. Bij IsaBeauty is kwaliteit essentieel. Ik werk met\\d zorgvuldig geselecteerde producten die echte resultaten leveren, afgestemd\\d op jouw huid en behoeften.`,
            en: `Over the years, I have completed multiple courses and earned certifications in\\d different countries, gaining an international perspective on the latest beauty\\d techniques and trends. At IsaBeauty, quality is essential. I work with carefully\\d selected products and treatments that deliver real results, always tailored to\\d your skin and individual needs.`,
            fr: `Au fil des années, j'ai suivi de nombreuses formations et obtenu des certificats\\d dans différents pays, acquérant une perspective internationale sur les dernières\\d tendances de beauté. Chez IsaBeauty, la qualité est essentielle. J'utilise des\\d produits sélectionnés pour des résultats réels, adaptés à votre peau et\\d vos besoins.`,
            pt: `Ao longo dos anos, concluí diversos cursos e obtive certificações internacionais,\\d adquirindo uma perspectiva internacional sobre as últimas técnicas e tendências\\d de beleza. Na IsaBeauty, a qualidade é essencial. Trabalho com produtos e\\d tratamentos criteriosamente selecionados que entregam resultados reais,\\d sempre adaptados à sua pele e às suas necessidades individuais.`
        }
    },
    info: {
        infoSubtitle: {
            nl: `JE HOEFT NIET TE LEVEN MET ONZEKERHEID OVER JE HUID OF LICHAAM.`,
            en: `YOU DON’T HAVE TO LIVE WITH SKIN OR BODY INSECURITIES.`,
            fr: `VOUS N’AVEZ PAS À VIVRE AVEC DES INSÉCURITÉS CONCERNANT VOTRE PEAU OU VOTRE CORPS.`,
            pt: `VOCÊ NÃO PRECISA VIVER COM INSEGURANÇAS SOBRE SUA PELE OU SEU CORPO.`
        },
        infoTitle: {
            nl: `Ik kan je helpen dat te veranderen.`,
            en: `I can help you change that.`,
            fr: `Je peux vous aider à changer cela.`,
            pt: `Eu posso ajudar você a mudar isso.`
        },
        infoContent: {
            nl: `Als je last hebt van acne, pigmentatie, een doffe huid, verslapping, plaatselijk vet of gebrek aan stevigheid. Ik creëer gerichte gezichts- en lichaamsbehandelingen die zijn ontworpen om te corrigeren, verbeteren en je zelfvertrouwen te herstellen. Jouw zorgen zijn specifiek. Jouw behandeling zou dat ook moeten zijn.`,
            en: `If you struggle with acne, pigmentation, dull skin, sagging, localized fat or lack of firmness. I create targeted facial and body treatments designed to correct, improve and restore your confidence. Your concerns are specific. Your treatment should be too.`,
            fr: `Si vous souffrez d’acné, de pigmentation, de peau terne, de relâchement, de graisse localisée ou d’un manque de fermeté. Je crée des traitements ciblés pour le visage et le corps conçus pour corriger, améliorer et restaurer votre confiance. Vos préoccupations sont spécifiques. Votre traitement devrait l’être aussi.`,
            pt: `Se você sofre com acne, pigmentação, pele opaca, flacidez, gordura localizada ou falta de firmeza. Eu crio tratamentos faciais e corporais direcionados para corrigir, melhorar e restaurar sua confiança. Suas preocupações são específicas. Seu tratamento também deve ser.`
        }
    },
    interval: {
        intervalTitle: {
            nl: `Nu kan ik met trots zeggen`,
            en: `Now I can proudly say`,
            fr: `Aujourd’hui je peux dire avec fierté`,
            pt: `Agora posso dizer com orgulho`
        },
        intervalContent: {
            nl: `Ik heb honderden mensen geholpen hun leven te\\n transformeren en ik kan niet wachten om er nog duizenden meer te helpen.`,
            en: `I have helped hundreds of people transform their\\n lives, and I can’t wait to help thousands more.`,
            fr: `J’ai aidé des centaines de personnes à transformer\\n leur vie et j’ai hâte d’en aider des milliers d’autres.`,
            pt: `Já ajudei centenas de pessoas a transformarem suas\\n vidas e mal posso esperar para ajudar outras milhares.`
        }
    },
    goal: {
        goalSubtitle: {
            nl: `ONS DOEL`,
            en: `OUR GOAL`,
            fr: `NOTRE OBJECTIF`,
            pt: `NOSSO OBJETIVO`
        },
        goalTitle: {
            nl: `Bij onze kliniek voelt iedereen zich\\d  thuis en wordt u als familie behandeld.`,
            en: `Is to ensure everyone feels and\\d is treated like family at our clinic.`,
            fr: `Ici, chaque client est accueilli et\\d soigné comme un membre de la famille.`,
            pt: `É garantir que todos se sintam e sejam\\d tratados como família em nossa clínica.`
        },
        goalFirstText: {
            nl: `Iemand uit je familie met je huid vertrouwen geeft je een comfortabeler\\d en veiliger gevoel.`,
            en: `Trusting someone from your family with your skin makes you feel more\\d comfortable and safe.`,
            fr: `Confier votre peau à quelqu’un de votre famille vous fait vous sentir\\d plus à l’aise et en sécurité.`,
            pt: `Confiar sua pele a alguém da sua família faz você se sentir mais\\d confortável e seguro.`
        },
        goalSecondText: {
            nl: `We werken nauw samen met onze klanten als een team om de beste\\d resultaten te bereiken.`,
            en: `We work closely with our clients as a team to achieve the best results.`,
            fr: `Nous travaillons en étroite collaboration avec nos clients comme une\\d équipe pour obtenir les meilleurs résultats.`,
            pt: `Trabalhamos de perto com nossos clientes como uma equipe para\\d alcançar os melhores resultados.`
        }
    },
    reviews: {
        reviewsTitle: {
            nl: `Beoordelingen van klanten`,
            en: `Customer reviews`,
            fr: `Avis des clients`,
            pt: `Avaliações dos clientes`
        }
    },
    treatments: {
        treatmentsTitle: {
            nl: `Behandelingen`,
            en: `Treatments`,
            fr: `Traitements`,
            pt: `Tratamentos`
        }
    },
    footer: {
        rights: {
            nl: `Copyright Isabeauty\\d Alle rechten voorbehouden 2026`,
            en: `Copyrigth Isabeauty\\d All rights reserved 2026`,
            fr: `Copyright Isabeauty\\d Tous droits réservés 2026`,
            pt: `Copyright Isabeauty\\d Todos os direitos reservados 2026`
        },
        credits: {
            nl: `Ontwikkeld door:`,
            en: `Developed by:`,
            fr: `Développé par :`,
            pt: `Desenvolvido por:`
        }
    },
    bookMyTreatment: {
        buttonContent: {
            nl: 'BOEK MIJN BEHANDELING',
            en: 'BOOK MY TREATMENT',
            fr: 'RÉSERVER MON SOIN',
            pt: 'AGENDAR MEU TRATAMENTO'
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

        const text = (block as any)?.[content]?.[lang] ?? ''

        return {
            line: () => text,
            break: () =>
                text.split(/(\\n|\\m|\\d)/)
                    .map((part: string, i: number) => {
                        if (part === "\\n") return <br key={i} />
                        if (part === "\\m") return <br key={i} className="md:hidden" />
                        if (part === "\\d") return <br key={i} className="hidden md:block" />

                        return <span key={i}>{part}</span>
                    })
        }
    }
}