import InputCheckbox from "./InputCheckbox";

import styles from "./ComplaintForm.module.css"
import { useEffect, useState } from "react";

function ComplaintForm() {

    const [legislation, setLegislation ] = useState(new Set())

    useEffect(
        ()=>{
            console.log(legislation);
            console.log(Array.from(legislation));
        },
        [legislation]
    );


    return(
        <>
            <form>
                <label>Codigo de ADEGA:
                        DF<input type="text"/>
                </label>

                <label>Asunto Relacionado
                    <textarea cols="60" rows="10"></textarea>
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
                    <label>
                        Provincia:
                        <input type="text"/>
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Marca leis incumpridas</legend>
                    <InputCheckbox
                        labelText="Artigo 60 regula os cambios de actividade forestal a agrícola."
                        name="legislacion" value="art60" legislation={legislation} setLegislation={setLegislation}
                    />
                    <InputCheckbox
                        labelText="Artigo 61 regula os cambios de actividade agrícola a forestal."
                        name="legislacion" value="art61" legislation={legislation} setLegislation={setLegislation}
                    />
                    <InputCheckbox
                        labelText="Artigo 67.4 establece a prohibición das reforestacións e novas plantacións con eucaliptos nas superficies poboadas por frondosas autóctonas. "
                        name="legislacion" value="art67_4" legislation={legislation} setLegislation={setLegislation}
                    />
                    <InputCheckbox
                        labelText="Artigo 67.5 establece a necesidade dunha autorización para novas plantacións de eucalipto superiores a 5ha."
                        name="legislacion" value="art67_5" legislation={legislation} setLegislation={setLegislation}
                    />
                    <InputCheckbox
                        labelText="Artigo 68 relativo ás distancias das repoboacións."
                        name="legislacion" value="art68" legislation={legislation} setLegislation={setLegislation}
                    />
                    <InputCheckbox
                        labelText="Artigo 92 establece as condicións para a realización de cortas e outros aproveitamentos madeireiros."
                        name="legislacion" value="art62" legislation={legislation} setLegislation={setLegislation}
                    />
                    <InputCheckbox
                        labelText="Artigo 93 relacionado co aproveitamento en masas consolidadas de frondosas autóctonas"
                        name="legislacion" value="art93" legislation={legislation} setLegislation={setLegislation}
                    />
                    <InputCheckbox
                        labelText="Artigo 104 establece o comercio responsable de produtos forestais e a loita contra a madeira ilegal."
                        name="legislacion" value="art104" legislation={legislation} setLegislation={setLegislation}
                    />
                </fieldset>
                <fieldset>
                    <InputCheckbox
                        labelText="Lei 11/2021, do 14 de maio, de recuperación da terra agraria de Galicia"
                        name="legislacion" value="lei11_2021" legislation={legislation} setLegislation={setLegislation}
                    />
                    <InputCheckbox
                        labelText="Lei 3/2007 de 9 de abril, de prevención e defensa contra os incendios forestais de Galicia. "
                        name="legislacion" value="Lei3_2007" legislation={legislation} setLegislation={setLegislation}
                    />
                    <InputCheckbox
                        labelText="Lei 5/2016 do 4 de maio do patrimonio cultural de Galicia."
                        name="legislacion" value="lei5_2016" legislation={legislation} setLegislation={setLegislation}
                    />
                    <InputCheckbox
                        labelText="Lei 5/2019, do 2 de agosto, do patrimonio natural e da Biodiversidade de Galicia."
                        name="legislacion" value="lei5_2019" legislation={legislation} setLegislation={setLegislation}
                    />
                    <InputCheckbox
                        labelText="Real Decreto 849/1986, de 11 de abril, por el que se aprueba el Reglamento del Dominio Público Hidráulico, que desarrolla los títulos preliminar I, IV, V, VI y VII de la Ley 29/1985, de 2 de agosto, de Aguas."
                        name="legislacion" value="rdec849_1986" legislation={legislation} setLegislation={setLegislation}
                    />
                    <InputCheckbox
                        labelText="Real Decreto 35/2023, de 24 de enero, por el que se aprueba la revisión de los planes hidrológicos de las demarcaciones hidrográficas del Cantábrico Occidental, Guadalquivir, Ceuta, Melilla, Segura y Júcar, y de la parte española de las demarcaciones hidrográficas del Cantábrico Oriental, Miño-Sil, Duero, Tajo, Guadiana y Ebro."
                        name="legislacion" value="rdec35_2023" legislation={legislation} setLegislation={setLegislation}
                    />
                    <InputCheckbox
                        labelText="Decreto 37/2014, do 27 de marzo, polo que se declaran zonas especiais de conservación os lugares de importancia comunitaria de Galicia e se aproba o Plan director da Rede Natura 2000 de Galicia."
                        name="legislacion" value="dec37_2014" legislation={legislation} setLegislation={setLegislation}
                    />
                    <InputCheckbox
                        labelText="Lei 33/2015, do 21 de setembro, pola que se modifica a Lei 42/2007, do 13 de decembro, do patrimonio natural e da biodiversidade."
                        name="legislacion" value="lei33_2015" legislation={legislation} setLegislation={setLegislation}
                    />
                    <InputCheckbox
                        labelText="Lei 45/2007 Desarrollo sostenible del medio rural"
                        name="legislacion" value="lei45_2007" legislation={legislation} setLegislation={setLegislation}
                    />
                    <InputCheckbox
                        labelText="Outros"
                        name="legislacion" value="outros" legislation={legislation} setLegislation={setLegislation}
                    />
                </fieldset>
                <fieldset>
                    <legend>Elixe a Entidade</legend>
                    <label>
                        <input type="radio" name="entidade"/>
                        SERVIZO DE PROTECCIÓN DA NATUREZA (SEPRONA)
                    </label>
                    <label>
                        <input type="radio" name="entidade"/>   
                        POLICÍA AUTONÓMICA
                    </label>
                    <label>
                        <input type="radio" name="entidade"/>
                        MINISTERIO PARA A TRANSICIÓN ECOLÓXICA E O RETO DEMOGRÁFICO, CONFEDERACIÓN HIDROGRÁFICA MIÑO SIL
                    </label>
                    <label>
                        <input type="radio" name="entidade"/>
                        CONSELLERÍA DE INFRAESTRUCTURAS E MOBILIDADE- AUGAS DE GALICIA                        
                    </label>
                    <label>
                        <input type="radio" name="entidade"/>
                        CONSELLARÍA DE MEDIO RURAL, XEFATURA TERRITORIAL DE LUGO                       
                    </label>
                    <label>
                        <input type="radio" name="entidade"/>
                        CONSELLARÍA DE MEDIO RURAL, XEFATURA TERRITORIAL DA CORUÑA
                    </label>
                    <label>
                        <input type="radio" name="entidade"/>
                        CONSELLARÍA DE MEDIO RURAL, XEFATURA TERRITORIAL DE PONTEVEDRA
                    </label>
                    <label>
                        <input type="radio" name="entidade"/>
                        CONSELLARÍA DE MEDIO RURAL, XEFATURA TERRITORIAL DE OURENSE   
                    </label>
                    <fieldset>
                        <legend>CONSELLARÍA DE MEDIO AMBIENTE TERRITORIO E VIVENDA - XEFATURA TERRITORIAL DE LUGO</legend>
                        <input type="radio" name="entidade"/> LUGO
                        <input type="radio" name="entidade"/> A CORUÑA
                        <input type="radio" name="entidade"/> OURENSE
                        <input type="radio" name="entidade"/> PONTEVEDRA
                    </fieldset>
                    <fieldset>
                        <legend>CONSELLARÍA DE CULTURA, EDUCACIÓN E UNIVERSIDADE - XEFATURA TERRITORIAL</legend>
                        <input type="radio" name="entidade"/> LUGO
                        <input type="radio" name="entidade"/> A CORUÑA
                        <input type="radio" name="entidade"/> OURENSE
                        <input type="radio" name="entidade"/> PONTEVEDRA
                    </fieldset>
                </fieldset>
                <label>
                    <input type="checkbox" value="extra_doc"/>
                    Acómpañase outra Documentación
                </label>
                

            </form>
        </>

        
    );

};

export default ComplaintForm