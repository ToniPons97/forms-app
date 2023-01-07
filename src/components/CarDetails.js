import { useEffect, useRef } from "react";

export const CarDetails = ({ initialData }) => {
    const { model, year, color } = initialData;

    const modelInputRef = useRef(null);
    const yearInputRef = useRef(null);   
    const  colorInputRef = useRef(null);



    const onFormSubmit = (event) => {
        event.preventDefault();
        const model = modelInputRef.current.value;
        const year = yearInputRef.current.value;
        const color = colorInputRef.current.value;
        
        console.log({
            model,
            year,
            color
        });
    }

    useEffect(() => {
        modelInputRef.current.focus();
        
        modelInputRef.current.value = model;
        yearInputRef.current.value = year;
        colorInputRef.current.value = color;
    }, [model, year, color]);
    
    return (
        <form>
            <label htmlFor="model">Car model:</label>
            <input name="model" id="model" ref={modelInputRef}  autoComplete="off"/>
            <br />
            <label htmlFor="year">Year:</label>
            <input name="year" id="year" ref={yearInputRef}  autoComplete="off"/>
            <br />
            <label htmlFor="color">Color:</label>
            <input name="color" id="color" ref={colorInputRef} autoComplete="off"/>
            <br />
            <button onClick={onFormSubmit}>Buy car!</button>
        </form>
    );
}