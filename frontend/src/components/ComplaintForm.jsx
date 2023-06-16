import { useEffect, useState } from "react";
import InputCheckbox from "./InputCheckbox";
import PdfBuilder from "./PdfBuilder";
import styles from "./ComplaintForm.module.css"


function ComplaintForm() {


    const [ legislationSection1, setLegislationSection1 ] = useState(new Set())
    const [ legislationSection2, setLegislationSection2 ] = useState(new Set())
    const [ isTerritorial , setIsTerritorial ] = useState(false)
    const formDataState = useState({})
    const [ formData, setFormData ] = formDataState
    const [ isOtherChecked, setIsOtherChecked ] = useState(false)

    useEffect(
        ()=>{
            saveDataInObject("legislationSection1", Array.from(legislationSection1)) 
        },
        [legislationSection1]
    );

    useEffect(
        ()=>{
            saveDataInObject("legislationSection2", Array.from(legislationSection2)) 
        },
        [legislationSection2]
    );

    useEffect(
        ()=>{
            if ( ! isTerritorial) saveDataInObject("institutionProvince", "")
        },
        [isTerritorial]
    )

    function saveToStatePropertyFactory(objectState){
        return function (attribute, formValue) {
            const [object, objectSetter] = objectState
            const newObject = {...object}
            newObject[attribute] = formValue
            objectSetter(newObject)
        }
    }



    const saveDataInObject = saveToStatePropertyFactory(formDataState)

    function formInputHandler(event){
        if ( event.target.name === "institution" ) {
            const territorial = event.target.classList.contains("territorial")
            saveDataInObject("institution", event.target.labels[0].innerText)
            setIsTerritorial( territorial )
        }
        if ( event.target.name === "check-other-legislation" ) {
            if (event.target.checked === true) {
                setIsOtherChecked(true)
                saveDataInObject("isOtherLegislationChecked", true)
            } else if (event.target.checked === false){
                setIsOtherChecked(false)
                saveDataInObject("isOtherLegislationChecked", false)
            }
        }
        if ( event.target.name === "extra-documentation"){
            if (event.target.checked === true) {
                saveDataInObject("extraDocumentation", true)
            } else if (event.target.checked === false){
                saveDataInObject("extraDocumentation", false)
            }
        }
        if ( event.target.name === "institution-province" ) saveDataInObject("institutionProvince", event.target.labels[0].innerText)
        if ( event.target.name === "adega-code" ) saveDataInObject("adegaCode", event.target.value)
        if ( event.target.name === "issue" ) saveDataInObject("issue", event.target.value)
        if ( event.target.name === "complaint-details" ) saveDataInObject("complaintDetails", event.target.value)
        if ( event.target.name === "zone" ) saveDataInObject("zone", event.target.value)
        if ( event.target.name === "allotment" ) saveDataInObject("allotment", event.target.value)
        if ( event.target.name === "municipality" ) saveDataInObject("municipality", event.target.value)
        if ( event.target.name === "other-legislation" ) saveDataInObject("otherLegislation", event.target.value)
        if ( event.target.name === "province-of-complaint" ) saveDataInObject("provinceOfComplaint", event.target.labels[0].innerText)
    }

    return(
        <>
            <form onInput={formInputHandler}>
                <label>Codigo de ADEGA:
                        DF<input type="text" name="adega-code"/>
                </label>

                <label>Asunto Relacionado
                    <input type="text" name="issue"/>
                </label>

                <label>Recentemente, membros de ADEGA detectaron:
                    <textarea 
                        cols="60" 
                        rows="10"
                        name="complaint-details" 
                        placeholder="Incluír a data aproximada, unha descrición dos feitos denunciados, e indicar a referencia catastral e/ou cordeadas X/Y se as houbese"
                        maxLength={1995}
                    />
                </label>
                    
                <fieldset>
                    <legend>Datos da ubicación</legend>
                    <label>
                        Polígono: 
                        <input type="text" name="zone"/>
                    </label>
                    <label>
                        Parcela: 
                        <input type="text" name="allotment"/>
                    </label>
                    <label>
                        Concello:
                        <input type="text" name="municipality"/>
                    </label>
                    <fieldset>
                            <legend>Provincia</legend>
                            <label>
                                <input type="radio" name="province-of-complaint"/> LUGO
                            </label>
                            <label>
                                <input type="radio" name="province-of-complaint"/> A CORUÑA
                            </label>
                            <label>
                                <input type="radio" name="province-of-complaint"/> OURENSE
                            </label>
                            <label>
                                <input type="radio" name="province-of-complaint"/> PONTEVEDRA
                            </label>
                        </fieldset>
                </fieldset>

                <fieldset>
                    <legend>Marca leis incumpridas</legend>
                    <InputCheckbox
                        labelText="Artigo 60 regula os cambios de actividade forestal a agrícola."
                        name="legislation" value="art60" legislation={legislationSection1} setLegislation={setLegislationSection1}
                    />
                    <InputCheckbox
                        labelText="Artigo 61 regula os cambios de actividade agrícola a forestal."
                        name="legislation" value="art61" legislation={legislationSection1} setLegislation={setLegislationSection1}
                    />
                    <InputCheckbox
                        labelText="Artigo 67.4 establece a prohibición das reforestacións e novas plantacións con eucaliptos nas superficies poboadas por frondosas autóctonas. "
                        name="legislation" value="art67_4" legislation={legislationSection1} setLegislation={setLegislationSection1}
                    />
                    <InputCheckbox
                        labelText="Artigo 67.5 establece a necesidade dunha autorización para novas plantacións de eucalipto superiores a 5ha."
                        name="legislation" value="art67_5" legislation={legislationSection1} setLegislation={setLegislationSection1}
                    />
                    <InputCheckbox
                        labelText="Artigo 68 relativo ás distancias das repoboacións."
                        name="legislation" value="art68" legislation={legislationSection1} setLegislation={setLegislationSection1}
                    />
                    <InputCheckbox
                        labelText="Artigo 92 establece as condicións para a realización de cortas e outros aproveitamentos madeireiros."
                        name="legislation" value="art62" legislation={legislationSection1} setLegislation={setLegislationSection1}
                    />
                    <InputCheckbox
                        labelText="Artigo 93 relacionado co aproveitamento en masas consolidadas de frondosas autóctonas"
                        name="legislation" value="art93" legislation={legislationSection1} setLegislation={setLegislationSection1}
                    />
                    <InputCheckbox
                        labelText="Artigo 104 establece o comercio responsable de produtos forestais e a loita contra a madeira ilegal."
                        name="legislation" value="art104" legislation={legislationSection1} setLegislation={setLegislationSection1}
                    />
                </fieldset>
                <fieldset>
                    <InputCheckbox
                        labelText="Lei 11/2021, do 14 de maio, de recuperación da terra agraria de Galicia"
                        name="legislation" value="lei11_2021" legislation={legislationSection2} setLegislation={setLegislationSection2}
                    />
                    <InputCheckbox
                        labelText="Lei 3/2007 de 9 de abril, de prevención e defensa contra os incendios forestais de Galicia. "
                        name="legislation" value="Lei3_2007" legislation={legislationSection2} setLegislation={setLegislationSection2}
                    />
                    <InputCheckbox
                        labelText="Lei 5/2016 do 4 de maio do patrimonio cultural de Galicia."
                        name="legislation" value="lei5_2016" legislation={legislationSection2} setLegislation={setLegislationSection2}
                    />
                    <InputCheckbox
                        labelText="Lei 5/2019, do 2 de agosto, do patrimonio natural e da Biodiversidade de Galicia."
                        name="legislation" value="lei5_2019" legislation={legislationSection2} setLegislation={setLegislationSection2}
                    />
                    <InputCheckbox
                        labelText="Real Decreto 849/1986, de 11 de abril, por el que se aprueba el Reglamento del Dominio Público Hidráulico, que desarrolla los títulos preliminar I, IV, V, VI y VII de la Ley 29/1985, de 2 de agosto, de Aguas."
                        name="legislation" value="rdec849_1986" legislation={legislationSection1} setLegislation={setLegislationSection1}
                    />
                    <InputCheckbox
                        labelText="Real Decreto 35/2023, de 24 de enero, por el que se aprueba la revisión de los planes hidrológicos de las demarcaciones hidrográficas del Cantábrico Occidental, Guadalquivir, Ceuta, Melilla, Segura y Júcar, y de la parte española de las demarcaciones hidrográficas del Cantábrico Oriental, Miño-Sil, Duero, Tajo, Guadiana y Ebro."
                        name="legislation" value="rdec35_2023" legislation={legislationSection2} setLegislation={setLegislationSection2}
                    />
                    <InputCheckbox
                        labelText="Decreto 37/2014, do 27 de marzo, polo que se declaran zonas especiais de conservación os lugares de importancia comunitaria de Galicia e se aproba o Plan director da Rede Natura 2000 de Galicia."
                        name="legislation" value="dec37_2014" legislation={legislationSection2} setLegislation={setLegislationSection2}
                    />
                    <InputCheckbox
                        labelText="Lei 33/2015, do 21 de setembro, pola que se modifica a Lei 42/2007, do 13 de decembro, do patrimonio natural e da biodiversidade."
                        name="legislation" value="lei33_2015" legislation={legislationSection2} setLegislation={setLegislationSection2}
                    />
                    <InputCheckbox
                        labelText="Lei 45/2007 Desarrollo sostenible del medio rural"
                        name="legislation" value="lei45_2007" legislation={legislationSection2} setLegislation={setLegislationSection2}
                    />
                    <label>
                        <input type="checkbox" name="check-other-legislation"/>
                        Outros
                    </label>
                    {isOtherChecked && 
                        <textarea
                            cols="60" 
                            rows="5"
                            name="other-legislation"
                            placeholder="Escriba aquí a lexislación"
                        />
                    }

                </fieldset>
                <fieldset>
                    <legend>Elixe o destinatario</legend>
                    <label>
                        <input type="radio" name="institution"/>
                        SERVIZO DE PROTECCIÓN DA NATUREZA (SEPRONA)
                    </label>
                    <label>
                        <input type="radio" name="institution"/>   
                        POLICÍA AUTONÓMICA
                    </label>
                    <label>
                        <input type="radio" name="institution"/>
                        MINISTERIO PARA A TRANSICIÓN ECOLÓXICA E O RETO DEMOGRÁFICO, CONFEDERACIÓN HIDROGRÁFICA MIÑO SIL
                    </label>
                    <label>
                        <input type="radio" name="institution"/>
                        CONSELLERÍA DE INFRAESTRUCTURAS E MOBILIDADE- AUGAS DE GALICIA                        
                    </label>

                    <fieldset>
                        <legend>Xefaturas territoriais</legend>
                        <label>
                            <input className="territorial" type="radio" name="institution"/>
                            CONSELLARÍA DE MEDIO RURAL
                        </label>
                        <label>
                            <input className="territorial"  type="radio" name="institution"/>
                            CONSELLARÍA DE MEDIO AMBIENTE TERRITORIO E VIVENDA
                        </label>
                        <label>
                            <input className="territorial"  type="radio" name="institution"/>
                            CONSELLARÍA DE CULTURA, EDUCACIÓN E UNIVERSIDADE
                        </label>
                        { isTerritorial && 
                        <fieldset>
                            <legend>Provincia</legend>
                            <label>
                                <input type="radio" name="institution-province"/> LUGO
                            </label>
                            <label>
                                <input type="radio" name="institution-province"/> A CORUÑA
                            </label>
                            <label>
                                <input type="radio" name="institution-province"/> OURENSE
                            </label>
                            <label>
                                <input type="radio" name="institution-province"/> PONTEVEDRA
                            </label>
                        </fieldset>
                        }
                    </fieldset>                    
                </fieldset>
                <label>
                    <input type="checkbox" name="extra-documentation"/>
                    Acómpañase outra Documentación
                </label>
                

            </form>
            <PdfBuilder formDataState={formDataState}/>
        </>

        
    );

};

export default ComplaintForm