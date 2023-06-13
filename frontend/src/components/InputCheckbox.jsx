function InputCheckbox({labelText, name, value, legislation, setLegislation}){

    const shownText = labelText

    function handlerCheckLegislation(event){
        if (event.target.checked === true) {
            const newLegislation = new Set(legislation)
            newLegislation.add(labelText)
            setLegislation(newLegislation)
        } else if (event.target.checked === false){
            const newLegislation = new Set(legislation)
            newLegislation.delete(labelText)
            setLegislation(newLegislation)
        }
    };

    return(
        <label>     
            <input type="checkbox" 
                onClick={handlerCheckLegislation} 
                name={name} 
                value={value} 
            />
            {shownText}  
        </label>
    );
};

export default InputCheckbox;