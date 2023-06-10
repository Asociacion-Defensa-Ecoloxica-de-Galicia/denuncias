import PdfBuilder from "../components/PdfBuilder"
import ComplaintForm from "../components/ComplaintForm"

function Main() {
    return(
        <>
        <h1>Tests</h1>
        <h2>ComplaintForm</h2>
        <ComplaintForm/>
        <h2>PdfBuilder</h2>
        <PdfBuilder/>
        </>
    )
}

export default Main