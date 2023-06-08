function InputCheckbox({labelText, name, value, legislation, setLegislation}){

    function handlerCheckLegislation(event){
        if (event.target.checked === true) {
            const newLegislation = new Set(legislation)
            newLegislation.add(event.target.value)
            setLegislation(newLegislation)
        } else if (event.target.checked === false){
            const newLegislation = new Set(legislation)
            newLegislation.delete(event.target.value)
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
            {labelText}  
        </label>
    );
};

export default InputCheckbox;