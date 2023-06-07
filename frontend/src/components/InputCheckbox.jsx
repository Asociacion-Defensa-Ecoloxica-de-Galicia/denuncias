function InputCheckbox({labelText, name, value, legislation}){

    function handlerCheckLegislation(event){
        if (event.target.checked === true) {
            legislation.add(event.target.value)
        } else if (event.target.checked === false){
            legislation.delete(event.target.value)
        }
        console.log(legislation);
        
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