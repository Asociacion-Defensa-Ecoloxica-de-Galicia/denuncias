import { useRef } from "react"
import { jsPDF } from "jspdf"

function PdfBuilder(params) {

    const source = useRef()
    const jspdf = new jsPDF()

    function renderHandler() {
        jspdf.html(source.current, { callback: doc => doc.save() })
    }

    return (
        <>
            <div ref={source}>
                <h1>Cosas...</h1>
                <p>Más cosas...</p>
            </div>
            <button onClick={renderHandler}>Render</button>
        </>
    )
}

export default PdfBuilder