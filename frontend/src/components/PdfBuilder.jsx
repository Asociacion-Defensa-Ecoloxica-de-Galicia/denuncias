import { useRef } from "react"
import { jsPDF } from "jspdf"
import style from "./PdfBuilder.module.css"


function PdfBuilder(params) {

    const source = useRef()
    const jspdf = new jsPDF()

    function renderHandler() {
        console.log(source.current);
        jspdf.html(source.current, { callback: doc => doc.save() })
    }

    return (
        <>
    {/*
            <div ref={source} className={style.source}>
                <h1>Documento a imprimir</h1>
                <p>Contenido del documento.</p>
            </div>
    */}
            <button onClick={renderHandler}>Imprimir documento</button>
        </>
    )
}

export default PdfBuilder