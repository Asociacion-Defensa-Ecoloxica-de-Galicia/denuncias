import InputCheckbox from "./InputCheckbox";

import styles from "./ComplaintForm.module.css"

function ComplaintForm() {

    const legislation = new Set()


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
                        placeholder="Incluír a data aproximada, unha descrición 
                                    dos feitos denunciados, e indicar a referencia 
                                    catastral e/ou cordeadas X/Y se as houbese"
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
                    <InputCheckbox
                        labelText="Artigo 60 regula os cambios de actividade forestal a agrícola."
                        name="legislacion"
                        value="Art60"
                        legislation={legislation}
                    />
                    <InputCheckbox
                        labelText="Artigo 61 regula os cambios de actividade agrícola a forestal."
                        name="legislacion"
                        value="Art61"
                        legislation={legislation}
                    />
                    <InputCheckbox
                        labelText="Artigo 67.4 establece a prohibición das reforestacións e novas plantacións con eucaliptos nas superficies poboadas por frondosas autóctonas. "
                        name="legislacion"
                        value="Art67_4"
                        legislation={legislation}
                    />
                    <InputCheckbox
                        labelText="Artigo 67.5 establece a necesidade dunha autorización para novas plantacións de eucalipto superiores a 5ha."
                        name="legislacion"
                        value="Art67_5"
                        legislation={legislation}
                    />
                    <InputCheckbox
                        labelText="Artigo 68 relativo ás distancias das repoboacións."
                        name="legislacion"
                        value="Art68"
                        legislation={legislation}
                    />
                    <InputCheckbox
                        labelText="Artigo 92 establece as condicións para a realización de cortas e outros aproveitamentos madeireiros."
                        name="legislacion"
                        value="Art62"
                        legislation={legislation}
                    />
                    <InputCheckbox
                        labelText="Artigo 93 relacionado co aproveitamento en masas consolidadas de frondosas autóctonas"
                        name="legislacion"
                        value="Art93"
                        legislation={legislation}
                    />
                    <InputCheckbox
                        labelText="Artigo 104 establece o comercio responsable de produtos forestais e a loita contra a madeira ilegal."
                        name="legislacion"
                        value="Art104"
                        legislation={legislation}
                    />
                </fieldset>

            </form>
        </>

        
    );

};

export default ComplaintForm