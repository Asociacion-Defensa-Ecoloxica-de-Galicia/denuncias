import InputCheckbox from "./InputCheckbox";

function ComplaintForm() {

    const legislation = new Set()


    return(
        <>
            <form>
                <h2>Codigo de ADEGA:</h2>
                    <label>
                        DF<input type="text"/>
                    </label>
                <h2>Asunto Relacionado</h2>
                <textarea cols="30" rows="10"></textarea>
                <h2>Expón (máx. 1995 caracteres, senón a denuncia ten que ir apegada)</h2>
                <div>
                    <div>
                        <div>Recentemente, membros de ADEGA detectaron</div>
                        <textarea 
                            cols="30" 
                            rows="10" 
                            placeholder="Incluír a data aproximada, unha descrición 
                                        dos feitos denunciados, e indicar a referencia 
                                        catastral e/ou cordeadas X/Y se as houbese"
                        />
                        <span>, no </span>
                        <label>
                            polígono 
                            <input type="text"/>
                        </label>
                        <label>
                            Parcela 
                            <input type="text"/>
                        </label>
                        <label>
                            no Concello de 
                            <input type="text"/>
                        </label>
                        <label>
                            Provincia de 
                            <input type="text"/>
                        </label>
                        <p>
                            incumprindo o establecido na Lei 7/2012, do 28 de xuño, de montes de Galicia, concretamente: 
                        </p>
                    </div>
                    <fieldset>
                        <InputCheckbox
                            labelText="Artigo 60 regula os cambios de actividade forestal a agrícola."
                            name="legislacion"
                            value="Art60"
                            legislation={legislation}
                        />
                    </fieldset>
                </div>
            </form>
        </>

        
    );

};

export default ComplaintForm