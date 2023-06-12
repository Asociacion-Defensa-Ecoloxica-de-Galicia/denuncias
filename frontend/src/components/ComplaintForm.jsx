import InputCheckbox from "./InputCheckbox";

import styles from "./ComplaintForm.module.css"
import { useEffect, useState } from "react";

function ComplaintForm() {

    const [ legislation, setLegislation ] = useState(new Set())
    const [ institution, setInstitution ] = useState("")
    const [ isTerritorial , setIsTerritorial ] = useState(false)
    const [ province, setProvince ] = useState("")
    const [ formData, setFormData ] = useState({})
    const [isOtherChecked, setIsOtherChecked] = useState(false)

    useEffect(
        ()=>{
            formData.legislation = Array.from(legislation)
            setIsOtherChecked(formData?.legislation?.includes("outros"))
            console.log (formData.legislation)
        },
        [legislation]
    );

    function formInputHandler(event){
        const territorial = event.target.classList.contains("territorial")
        if ( event.target.name === "institution" ) {
            setInstitution(event.target.labels[0].innerText)
            setIsTerritorial( territorial )
            if ( ! territorial ) setProvince("")
        }
        if ( event.target.name === "province" ) setProvince(event.target.labels[0].innerText)
    }

    return(
        <>
            <form onInput={formInputHandler}>
                <label>Codigo de ADEGA:
                        DF<input type="text"/>
                </label>

                <label>Asunto Relacionado
                    <input type="text" name="issue"/>
                </label>

                <label>Recentemente, membros de ADEGA detectaron:
                    <textarea 
                        cols="60" 
                        rows="10" 
                        placeholder="Incluír a data aproximada, unha descrición dos feitos denunciados, e indicar a referencia catastral e/ou cordeadas X/Y se as houbese"
                    />
                </label>
                    
                <fieldset>
                    <legend>Datos da ubicación</legend>
                    <label>
                        Polígono: 
                        <input type="text"/>
                    </label>
                    <label>
                        Parcela: 
                        <input type="text"/>
                    </label>
                    <label>
                        Concello:
                        <input type="text"/>
                    </label>
                    <fieldset>
                            <legend>Provincia</legend>
                            <label>
                                <input type="radio" name="province"/> LUGO
                            </label>
                            <label>
                                <input type="radio" name="province"/> A CORUÑA
                            </label>
                            <label>
                                <input type="radio" name="province"/> OURENSE
                            </label>
                            <label>
                                <input type="radio" name="province"/> PONTEVEDRA
                            </label>
                        </fieldset>
                </fieldset>

                <fieldset>
                    <legend>Marca leis incumpridas</legend>
                    <InputCheckbox
                        labelText="Artigo 60 regula os cambios de actividade forestal a agrícola."
                        name="legislation" value="art60" legislation={legislation} setLegislation={setLegislation}
                    />
                    <InputCheckbox
                        labelText="Artigo 61 regula os cambios de actividade agrícola a forestal."
                        name="legislation" value="art61" legislation={legislation} setLegislation={setLegislation}
                    />
                    <InputCheckbox
                        labelText="Artigo 67.4 establece a prohibición das reforestacións e novas plantacións con eucaliptos nas superficies poboadas por frondosas autóctonas. "
                        name="legislation" value="art67_4" legislation={legislation} setLegislation={setLegislation}
                    />
                    <InputCheckbox
                        labelText="Artigo 67.5 establece a necesidade dunha autorización para novas plantacións de eucalipto superiores a 5ha."
                        name="legislation" value="art67_5" legislation={legislation} setLegislation={setLegislation}
                    />
                    <InputCheckbox
                        labelText="Artigo 68 relativo ás distancias das repoboacións."
                        name="legislation" value="art68" legislation={legislation} setLegislation={setLegislation}
                    />
                    <InputCheckbox
                        labelText="Artigo 92 establece as condicións para a realización de cortas e outros aproveitamentos madeireiros."
                        name="legislation" value="art62" legislation={legislation} setLegislation={setLegislation}
                    />
                    <InputCheckbox
                        labelText="Artigo 93 relacionado co aproveitamento en masas consolidadas de frondosas autóctonas"
                        name="legislation" value="art93" legislation={legislation} setLegislation={setLegislation}
                    />
                    <InputCheckbox
                        labelText="Artigo 104 establece o comercio responsable de produtos forestais e a loita contra a madeira ilegal."
                        name="legislation" value="art104" legislation={legislation} setLegislation={setLegislation}
                    />
                </fieldset>
                <fieldset>
                    <InputCheckbox
                        labelText="Lei 11/2021, do 14 de maio, de recuperación da terra agraria de Galicia"
                        name="legislation" value="lei11_2021" legislation={legislation} setLegislation={setLegislation}
                    />
                    <InputCheckbox
                        labelText="Lei 3/2007 de 9 de abril, de prevención e defensa contra os incendios forestais de Galicia. "
                        name="legislation" value="Lei3_2007" legislation={legislation} setLegislation={setLegislation}
                    />
                    <InputCheckbox
                        labelText="Lei 5/2016 do 4 de maio do patrimonio cultural de Galicia."
                        name="legislation" value="lei5_2016" legislation={legislation} setLegislation={setLegislation}
                    />
                    <InputCheckbox
                        labelText="Lei 5/2019, do 2 de agosto, do patrimonio natural e da Biodiversidade de Galicia."
                        name="legislation" value="lei5_2019" legislation={legislation} setLegislation={setLegislation}
                    />
                    <InputCheckbox
                        labelText="Real Decreto 849/1986, de 11 de abril, por el que se aprueba el Reglamento del Dominio Público Hidráulico, que desarrolla los títulos preliminar I, IV, V, VI y VII de la Ley 29/1985, de 2 de agosto, de Aguas."
                        name="legislation" value="rdec849_1986" legislation={legislation} setLegislation={setLegislation}
                    />
                    <InputCheckbox
                        labelText="Real Decreto 35/2023, de 24 de enero, por el que se aprueba la revisión de los planes hidrológicos de las demarcaciones hidrográficas del Cantábrico Occidental, Guadalquivir, Ceuta, Melilla, Segura y Júcar, y de la parte española de las demarcaciones hidrográficas del Cantábrico Oriental, Miño-Sil, Duero, Tajo, Guadiana y Ebro."
                        name="legislation" value="rdec35_2023" legislation={legislation} setLegislation={setLegislation}
                    />
                    <InputCheckbox
                        labelText="Decreto 37/2014, do 27 de marzo, polo que se declaran zonas especiais de conservación os lugares de importancia comunitaria de Galicia e se aproba o Plan director da Rede Natura 2000 de Galicia."
                        name="legislation" value="dec37_2014" legislation={legislation} setLegislation={setLegislation}
                    />
                    <InputCheckbox
                        labelText="Lei 33/2015, do 21 de setembro, pola que se modifica a Lei 42/2007, do 13 de decembro, do patrimonio natural e da biodiversidade."
                        name="legislation" value="lei33_2015" legislation={legislation} setLegislation={setLegislation}
                    />
                    <InputCheckbox
                        labelText="Lei 45/2007 Desarrollo sostenible del medio rural"
                        name="legislation" value="lei45_2007" legislation={legislation} setLegislation={setLegislation}
                    />
                    <InputCheckbox
                        labelText="Outros"
                        name="legislation" value="outros" legislation={legislation} setLegislation={setLegislation}
                    />
                    {isOtherChecked && 
                        <textarea 
                            cols="60" 
                            rows="5" 
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
                                <input type="radio" name="province"/> LUGO
                            </label>
                            <label>
                                <input type="radio" name="province"/> A CORUÑA
                            </label>
                            <label>
                                <input type="radio" name="province"/> OURENSE
                            </label>
                            <label>
                                <input type="radio" name="province"/> PONTEVEDRA
                            </label>
                        </fieldset>
                        }
                    </fieldset>                    
                </fieldset>
                <label>
                    <input type="checkbox" value="extra_doc"/>
                    Acómpañase outra Documentación
                </label>
                

            </form>
            <template>
                <p>Non estou</p>
            </template>
        </>

        
    );

};

export default ComplaintForm