import { useRef } from "react"
import html2pdf from "html2pdf.js"
import style from "./PdfBuilder.module.css"


function PdfBuilder({formDataState}) {

    const [ formData, setFormData ] = formDataState
    const source = useRef()

    function renderHandler() {
        html2pdf(source.current)
    }

    return (
        <>
        <template>
            <div ref={source} className={style.source}>
                <h2>Cód. De ADEGA: DF{formData.adegaCode}</h2>
                <section>
                    <h2>Asunto relacionado</h2>
                    <p>{formData.issue}</p>
                </section>
                <section>
                    <h2>Expón:</h2>
                    <p>
                        Recentemente, membros de ADEGA detectaron {formData.complaintDetails}, no polígono {formData.zone} 
                        &#160;Parcela {formData.allotment} &#160;no Concello de {formData.municipality} 
                        &#160;na Provincia da {formData.provinceOfComplaint},
                    </p>
                </section>
                <section>
                    <p>incumprindo o establecido na Lei 7/2012, do 28 de xuño, de montes de Galicia, concretamente: </p>
                    <ul>
                        {
                            formData.legislationSection1?.map(
                                (legislationS1,idx)=><li key={idx}>{legislationS1}</li>
                            )
                        }
                    </ul>
                </section>
                <section>
                    <p>Ademais de:</p>
                    <ul>
                        {
                            formData.legislationSection2?.map (
                                (legislationS2,idx)=><li key={idx}>{legislationS2}</li>
                            )
                        }
                        {formData.isOtherLegislationChecked && <li>{formData.otherLegislation}</li>}
                    </ul>
                </section>
                <section>
                    <h2>Solicita:</h2>
                    <p>
                        Que se comproben os feitos denunciados e se aplique o réxime sancionador previsto nas citadas leis, esixindo en todo caso a obriga de reparación do dano para devolver o espazo afectado ao seu estado primitivo
                        Que se informe en tempo e forma a esta entidade das medidas ou actuacións derivadas da presente denuncia.
                        Que se investigue a situación de legalidade das parcelas estremeiras ou próximas ás denunciadas e, no seu caso, se realice a pertinente denuncia de oficio.
                    </p>
                </section>
                {formData.extraDocumentation && <p>Acompáñase outra documentación</p>}
            </div>
            

        </template>
        <button onClick={renderHandler}>Imprimir documento</button>
        </>
    )
}

export default PdfBuilder