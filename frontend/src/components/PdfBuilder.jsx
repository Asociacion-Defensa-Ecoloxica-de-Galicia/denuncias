import { useRef } from "react"
import html2pdf from "html2pdf.js"
import style from "./PdfBuilder.module.css"


function PdfBuilder(params) {

    const source = useRef()

    

    function renderHandler() {
        html2pdf(source.current)
    }

    return (
        <>
        <template>
            <div ref={source} className={style.source}>
                <h1>Documento a imprimir</h1>
                <p>Contenido del documento.</p>
            </div>
        </template>
        <button onClick={renderHandler}>Imprimir documento</button>
        </>
    )
}

export default PdfBuilder