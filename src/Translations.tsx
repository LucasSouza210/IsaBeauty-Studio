import { useContext } from "react"
import { Contexts } from "./ContextsProvider"

type Lang = 'nl' | 'en' | 'fr' | 'pt'

const Translations = {
    header: {
        firstLink: {
            nl: `Over mij`,
            en: `About`,
            fr: `À propos`,
            pt: `Sobre`
        },
        secondLink: {
            nl: `Werkwijze`,
            en: `Process`,
            fr: `Processus`,
            pt: `Processo`
        },
        thirdLink: {
            nl: `Reviews`,
            en: `Reviews`,
            fr: `Avis`,
            pt: `Avaliações`
        },
        fourthLink: {
            nl: `Behandelingen`,
            en: `Treatments`,
            fr: `Soins`,
            pt: `Tratamentos`
        },
        fifthLink: {
            nl: 'Contact',
            en: 'Contact',
            fr: 'Contact',
            pt: 'Contato'
        }
    },
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
            nl: `JE HOEFT NIET TE LEVEN MET\\n ONZEKERHEID OVER JE HUID OF LICHAAM.`,
            en: `YOU DON’T HAVE TO LIVE WITH\\n SKIN OR BODY INSECURITIES.`,
            fr: `VOUS N’AVEZ PAS À VIVRE AVEC\\n DES INSÉCURITÉS CONCERNANT VOTRE PEAU OU VOTRE CORPS.`,
            pt: `VOCÊ NÃO PRECISA VIVER INSATISFEITO\\n COM SUA PELE OU CORPO.`
        },
        infoTitle: {
            nl: `Ik kan je helpen\\m dat te veranderen.`,
            en: `I can help you\\m change that.`,
            fr: `Je peux vous aider\\m à changer cela.`,
            pt: `Posso te ajudar\\m a mudar isso.`
        },
        infoContent: {
            nl: `Als je last hebt van acne, pigmentatie, een doffe huid, verslapping, plaatselijk vet of gebrek aan stevigheid. Ik creëer gerichte gezichts- en lichaamsbehandelingen die zijn ontworpen om te corrigeren, verbeteren en je zelfvertrouwen te herstellen. Jouw zorgen zijn specifiek. Jouw behandeling zou dat ook moeten zijn.`,
            en: `If you struggle with acne, pigmentation, dull skin, sagging, localized fat or lack of firmness. I create targeted facial and body treatments designed to correct, improve and restore your confidence. Your concerns are specific. Your treatment should be too.`,
            fr: `Si vous souffrez d’acné, de pigmentation, de peau terne, de relâchement, de graisse localisée ou d’un manque de fermeté. Je crée des traitements ciblés pour le visage et le corps conçus pour corriger, améliorer et restaurer votre confiance. Vos préoccupations sont spécifiques. Votre traitement devrait l’être aussi.`,
            pt: `Se você sofre com acne, pigmentação, pele opaca, flacidez, gordura localizada ou falta de firmeza. Eu crio tratamentos faciais e corporais direcionados para corrigir, melhorar e restaurar sua confiança. Suas preocupações são específicas. Seu tratamento também deve ser.`
        },
        firstCardTitle: {
            nl: `Persoonlijke Analyse`,
            en: `Personal Assessment`,
            fr: `Bilan Personnel`,
            pt: `Análise Pessoal`
        },
        secondCardTitle: {
            nl: `Gerichte Zorg`,
            en: `Targeted Treatments`,
            fr: `Soins Ciblés`,
            pt: `Tratamentos Focados`
        },
        thirdCardTitle: {
            nl: `Echte Resultaten`,
            en: `Real Results`,
            fr: `Résultats Réels`,
            pt: `Resultados Reais`
        },
        firstCardContent: {
            nl: `Ik analyseer uw huid en lichaam om precies te bepalen wat er behandeld moet worden.`,
            en: `I analyze your skin and body to identify exactly what needs to be treated.`,
            fr: `J'analyse votre peau et votre corps pour identifier exactement ce qui doit être traité.`,
            pt: `Eu analiso sua pele e corpo para identificar o que precisa ser tratado.`
        },
        secondCardContent: {
            nl: `Ik pas geavanceerde gezichts- en lichaamsbehandelingen toe met professionele technologie.`,
            en: `I apply advanced facial and body procedures using professional-grade technology and products.`,
            fr: `J'applique des soins visage et corps avancés avec une technologie de qualité professionnelle.`,
            pt: `Eu aplico procedimentos faciais e corporais avançados com tecnologia de nível profissional.`
        },
        thirdCardContent: {
            nl: `U ziet het verschil: een gezondere huid, betere textuur en een zelfverzekerd lichaam.`,
            en: `You see and feel the difference: healthier skin, improved texture, and a more sculpted, confident body.`,
            fr: `Vous voyez la différence : une peau saine, une texture améliorée et un corps sculpté.`,
            pt: `Você vê a diferença: uma pele saudável, textura melhorada e um corpo mais esculpido.`
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
        },
        firstReview: {
            nl: `Geweldig bezoek bij Isa Beauty! De eigenaresse straalt een jeugdige gloed uit. Uitstekende gezichtsbehandeling, ik kom zeker terug!`,
            en: `Superb visit at Isa Beauty! At 50 years old, the owner has a glowing youthfulness. Excellent facial treatment, I will definitely return!`,
            fr: `Superbe visite chez Isa Beauty ! La propriétaire rayonne de jeunesse. Excellent soin du visage, je reviendrai certainement !`,
            pt: `Visita incrível na Isa Beauty! A proprietária irradia uma jovialidade brilhante. Excelente tratamento facial, voltarei com certeza!`
        },
        secondReview: {
            nl: `Warm welkom gekregen. Ze legde uit welke behandelingen ze deed en liet de producten zien. Ik voelde me zeer goed verzorgd.`,
            en: `I was warmly welcomed. She explained which treatments she was doing for me and showed me the products. I left feeling very well taken care of. I will definitely come back.`,
            fr: `J'ai été chaleureusement accueillie. Elle m'a expliqué les soins et présenté les produits. Je suis repartie ravie et bien chouchoutée.`,
            pt: `Fui muito bem recebida. Ela explicou cada tratamento e mostrou os produtos utilizados. Saí sentindo-me muito bem cuidada e voltarei.`
        },
        thirdReview: {
            nl: `Het was een geweldige ervaring!`,
            en: `It was a great experience!`,
            fr: `C'était une excellente expérience !`,
            pt: `Foi uma experiência fantástica!`
        }
    },
    treatments: {
        treatmentsTitle: {
            nl: `Behandelingen`,
            en: `Treatments`,
            fr: `Traitements`,
            pt: `Tratamentos`
        },
        firstTreatmentTitle: {
            nl: `Gewichtsverlies en Body Contouring (Iximia HR777)`,
            en: `Weight Loss and Body Contouring (Iximia HR777)`,
            fr: `Perte de Poids et Remodelage Corporel (Iximia HR777)`,
            pt: `Emagrecimento e Contorno Corporal (Iximia HR777)`
        },
        secondTreatmentTitle: {
            nl: `Cellulite en Huidverstrakking (Radiofrequentie + Lipolaser)`,
            en: `Cellulite and Skin Tightening Treatments (Radiofrequency + Lipolaser)`,
            fr: `Traitements Cellulite et Raffermissement (Radiofréquence + Lipolaser)`,
            pt: `Tratamentos de Celulite e Firmeza (Radiofrequência + Lipolaser)`
        },
        thirdTreatmentTitle: {
            nl: `Lymfedrainage / Lichaamsdetox`,
            en: `Lymphatic Drainage / Body Detox`,
            fr: `Drainage Lymphatique / Détox Corporelle`,
            pt: `Drenagem Linfática / Detox Corporal`
        },
        fourthTreatmentTitle: {
            nl: `Laserontharing`,
            en: `Laser Hair Removal`,
            fr: `Épilation au Laser`,
            pt: `Depilação a Laser`
        },
        fifthTreatmentTitle: {
            nl: `Geavanceerde Gezichtsbehandelingen (Reiniging + Peeling)`,
            en: `Advanced Facial Treatments (Deep Cleansing + Peels)`,
            fr: `Soins Visage Avancés (Nettoyage Profond + Peeling)`,
            pt: `Tratamentos Faciais Avançados (Limpeza + Peeling)`
        },
        sixthTreatmentTitle: {
            nl: `Anti-Aging / Huidverjonging (HIFU)`,
            en: `Anti-Aging / Facial Rejuvenation Treatments (HIFU)`,
            fr: `Anti-Âge / Rajeunissement Facial (HIFU)`,
            pt: `Anti-Aging / Rejuvenescimento Facial (HIFU)`
        },
        firstTreatmentDesc: {
            nl: `Een niet-invasieve body contouring behandeling ontworpen om plaatselijk vet te verminderen, de lichaamsvorm te verbeteren en definitie te versterken. De Iximia HR777 technologie stimuleert vetvermindering en helpt bij het verstevigen en contouren van specifieke zones voor zichtbare resultaten.`,
            en: `A non-invasive body contouring treatment designed to reduce localized fat, improve body shape, and enhance definition. The Iximia HR777 technology stimulates fat reduction while helping to firm and sculpt targeted areas for visible, measurable results.`,
            fr: `Un traitement de remodelage corporel non invasif conçu pour réduire la graisse localisée, améliorer la silhouette et renforcer la définition. La technologie Iximia HR777 stimule la réduction des graisses tout en aidant à raffermir et sculpter les zones ciblées pour des résultats visibles.`,
            pt: `Um tratamento de contorno corporal não invasivo projetado para reduzir a gordura localizada, melhorar a forma do corpo e realçar a definição. A tecnologia Iximia HR777 estimula a redução de gordura, ajudando a firmar e esculpir áreas específicas para resultados visíveis e mensuráveis.`
        },
        secondTreatmentDesc: {
            nl: `Geavanceerde combinatietherapie die cellulite aanpakt, de huidtextuur verbetert en de stevigheid verhoogt. Radiofrequentie stimuleert de collageenproductie, terwijl lipolaser helpt bij het verminderen van vetophopingen, waardoor de huid gladder en strakker wordt.`,
            en: `Advanced combination therapy that targets cellulite, improves skin texture, and boosts firmness. Radiofrequency stimulates collagen production while lipolaser helps reduce fat deposits, leaving the skin smoother and tighter.`,
            fr: `Thérapie combinée avancée qui cible la cellulite, améliore la texture de la peau et renforce la fermeté. La radiofréquence stimule la production de collagène tandis que le lipolaser aide à réduire les dépôts graisseux, laissant la peau plus lisse et plus ferme.`,
            pt: `Terapia combinada avançada que combate a celulite, melhora a textura da pele e aumenta a firmeza. A radiofrequência estimula a produção de colágeno, enquanto o lipolaser ajuda a reduzir os depósitos de gordura, deixando a pele mais lisa e firme.`
        },
        thirdTreatmentDesc: {
            nl: `Een gespecialiseerde techniek die het lymfestelsel stimuleert en het vasthouden van vocht, zwellingen en gifstoffen vermindert. Ideaal voor het verbeteren van de circulatie, het versterken van de lichaamscontouren en het bevorderen van een lichtere, meer gedefinieerde uitstraling.`,
            en: `A specialized technique that stimulates the lymphatic system, reducing water retention, swelling, and toxins. Ideal for improving circulation, enhancing body contour, and promoting a lighter, more defined appearance.`,
            fr: `Une technique spécialisée qui stimule le système lymphatique, réduisant la rétention d'eau, les gonflements et les toxines. Idéal pour améliorer la circulation, renforcer le contour du corps et favoriser une apparence plus légère et plus définie.`,
            pt: `Uma técnica especializada que estimula o sistema linfático, reduzindo a retenção de líquidos, inchaços e toxinas. Ideal para melhorar a circulação, realçar o contorno corporal e promover uma aparência mais leve e definida.`
        },
        fourthTreatmentDesc: {
            nl: `Veilige en effectieve ontharing op lange termijn met behulp van geavanceerde lasertechnologie. Richt zich nauwkeurig op de haarzakjes, vermindert hergroei en houdt de omringende huid beschermd en glad.`,
            en: `Safe and effective long-term hair reduction using advanced laser technology. Targets hair follicles precisely, reducing regrowth while keeping the surrounding skin protected and smooth.`,
            fr: `Réduction durable des poils, sûre et efficace, utilisant une technologie laser avancée. Cible précisément les follicules pileux, réduisant a repousse tout en protégeant la peau environnante pour un résultat lisse.`,
            pt: `Redução de pelos segura e eficaz a longo prazo, utilizando tecnologia laser avançada. Atinge os folículos capilares com precisão, reduzindo o crescimento e mantendo a pele circundante protegida e suave.`
        },
        fifthTreatmentDesc: {
            nl: `Professionele gezichtsbehandelingen ontworpen om de gezondheid van de huid diep te reinigen, te vernieuwen en te herstellen. Bevat aangepaste reinigingsprotocollen en chemische peelings om textuur, helderheid, acne en pigmentatie te verbeteren.`,
            en: `Professional facial treatments designed to deeply cleanse, renew, and restore skin health. Includes customized cleansing protocols and chemical peels to improve texture, brightness, acne, and pigmentation.`,
            fr: `Soins du visage professionnels conçus pour nettoyer en profondeur, renouveler et restaurer la santé de la peau. Comprend des protocoles de nettoyage personnalisés et des peelings chimiques pour améliorer la texture, l'éclat, l'acné et la pigmentation.`,
            pt: `Tratamentos faciais profissionais projetados para limpar profundamente, renovar e restaurar a saúde da pele. Inclui protocolos de limpeza personalizados e peelings químicos para melhorar a textura, brilho, acne e pigmentação.`
        },
        sixthTreatmentDesc: {
            nl: `Niet-invasieve facelift en verjongingsbehandeling met High-Intensity Focused Ultrasound (HIFU). Stimuleert diepe collageenproductie, verbetert de stevigheid van de huid, vermindert verslapping en fijne lijntjes, en bevordert een natuurlijk liftend effect zonder hersteltijd.`,
            en: `Non-invasive facial lifting and rejuvenation treatment using High-Intensity Focused Ultrasound (HIFU). Stimulates deep collagen production, improves skin firmness, reduces sagging and fine lines, and promotes a natural lifting and tightening effect with no downtime.`,
            fr: `Traitement de lifting et de rajeunissement facial non invasif utilisant les ultrasons focalisés de haute intensité (HIFU). Stimule la production profonde de collagène, améliore la fermeté, réduit le relâchement e les ridules, pour un effet liftant naturel sans éviction sociale.`,
            pt: `Tratamento de lifting e rejuvenescimento facial não invasivo utilizando Ultrassom Focalizado de Alta Intensidade (HIFU). Estimula a produção profunda de colágeno, melhora a firmeza da pele, reduz a flacidez e linhas finas, promovendo um efeito de lifting natural sem tempo de recuperação.`
        },
        buttonText: {
            nl: `AFSPRAAK MAAKEN`,
            en: `MAKE AN APPOINTMENT`,
            fr: `PRENDRE RENDEZ-VOUS`,
            pt: `MARCAR UM HORÁRIO`
        }
    },
    contact: {
        contactTitle: {
            nl: `Maak een afspraak`,
            en: `Make an Appointment`,
            fr: `Prendre un rendez-vous`,
            pt: `Agendar um atendimento`
        },
        contactSubtitle: {
            nl: `Binnen 1 minuut\\d geregeld, boek nu je afspraak.`,
            en: `Booked in 1 minute,\\d schedule your appointment now.`,
            fr: `Réservez en 1 minute,\\d prenez votre rendez-vous maintenant.`,
            pt: `Em 1 minuto você\\d resolve, agende agora mesmo.`
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
                        if (part === "\\m") return <br key={i} className="lg:hidden" />
                        if (part === "\\d") return <br key={i} className="hidden lg:block" />

                        return <span key={i}>{part}</span>
                    })
        }
    }
}