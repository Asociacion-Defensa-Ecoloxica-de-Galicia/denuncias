import { useRef } from "react"
import html2pdf from "html2pdf.js"
import style from "./PdfBuilder.module.css"


function PdfBuilder({formDataState, isOtherChecked}) {

    const [ formData, setFormData ] = formDataState
    console.log(formData?.legislationSection1, formData?.legislationSection2);

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
                    <h2>Expón (máx. 1995 caracteres, senón a denuncia ten que ir apegada)</h2>
                    <p>
                        Recentemente, membros de ADEGA detectaron {formData.complaintDetails}, no polígono {formData.zone} 
                        Parcela {formData.allotment} no Concello de {formData.municipality} 
                        na Provincia da {formData.provinceOfComplaint},
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
                        {isOtherChecked && <li>{formData.otherLegislation}</li>}
                    </ul>
                </section>
            </div>
            

        </template>
        <button onClick={renderHandler}>Imprimir documento</button>
        </>
    )
}

export default PdfBuilder