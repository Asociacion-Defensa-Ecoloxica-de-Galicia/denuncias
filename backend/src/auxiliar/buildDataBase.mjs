import { db, Denuncia, LeyDeMontes, OutrasNormativas } from "../db.mjs"

const ARTIGOS_LEI_MONTES = [
    { descripcion: "Artigo 60 regula os cambios de actividade forestal a agrícola.", },
    { descripcion: "Artigo 61 regula os cambios de actividade agrícola a forestal.", },
    { descripcion: "Artigo 67.4 establece a prohibición das reforestacións e novas plantacións con eucaliptos nas superficies poboadas por frondosas autóctonas.", },
    { descripcion: "Artigo 67.5 establece a necesidade dunha autorización para novas plantacións de eucalipto superiores a 5ha.", },
    { descripcion: "Artigo 68 relativo ás distancias das repoboacións.", },
    { descripcion: "Artigo 92 establece as condicións para a realización de cortas e outros aproveitamentos madeireiros.", },
    { descripcion: "Artigo 93 relacionado co aproveitamento en masas consolidadas de frondosas autóctonas", },
    { descripcion: "Artigo 104 establece o comercio responsable de produtos forestais e a loita contra a madeira ilegal.", },
]

const OUTRAS_NORMATIVAS = [
    { descripcion: "Lei 11/2021, do 14 de maio, de recuperación da terra agraria de Galicia", },
    { descripcion: "Lei 3/2007 de 9 de abril, de prevención e defensa contra os incendios forestais de Galicia.", },
    { descripcion: "Lei 5/2016 do 4 de maio do patrimonio cultural de Galicia.", },
    { descripcion: "Lei 5/2019, do 2 de agosto, do patrimonio natural e da Biodiversidade de Galicia.", },
    { descripcion: "Real Decreto 849/1986, de 11 de abril, por el que se aprueba el Reglamento del Dominio Público Hidráulico, que desarrolla los títulos preliminar I, IV, V, VI y VII de la Ley 29/1985, de 2 de agosto, de Aguas.", },
    { descripcion: "Real Decreto 35/2023, de 24 de enero, por el que se aprueba la revisión de los planes hidrológicos de las demarcaciones hidrográficas del Cantábrico Occidental, Guadalquivir, Ceuta, Melilla, Segura y Júcar, y de la parte española de las demarcaciones hidrográficas del Cantábrico Oriental, Miño-Sil, Duero, Tajo, Guadiana y Ebro.", },
    { descripcion: "Decreto 37/2014, do 27 de marzo, polo que se declaran zonas especiais de conservación os lugares de importancia comunitaria de Galicia e se aproba o Plan director da Rede Natura 2000 de Galicia.", },
    { descripcion: "Lei 33/2015, do 21 de setembro, pola que se modifica a Lei 42/2007, do 13 de decembro, do patrimonio natural e da biodiversidade.", },
    { descripcion: "Lei 45/2007 Desarrollo sostenible del medio rural" },
]

if ( ! process.env.NODE_ENV ) {
     await db.sync({alter: true, force: true})
     await LeyDeMontes.bulkCreate(ARTIGOS_LEI_MONTES)
     await OutrasNormativas.bulkCreate(OUTRAS_NORMATIVAS)
     const denuncia = await Denuncia.create({
        provinceOfComplaint: "Lugo",
        adegaCode: "00001",
        issue: "Primeira denuncia de proba",
        complaintDetails: "Detalles da primeira denuncia de proba",
        zone: "33A",
        allotment: "2B",
        municipality: "Becerrea",
        extraDocumentation: false,
        institution: "Consellería de cousas varias",
        institutionProvince: "Lugo",
        isOtherLegislationChecked: true
    })
    denuncia.setLeyDeMontes(await LeyDeMontes.findAll({limit: 2}))
    denuncia.setOutrasNormativas(await OutrasNormativas.findAll({limit: 2}))
}
