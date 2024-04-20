import { useState } from "react";

export default function Converter(){
    const [selectedUnits, setSelectedUnits] = useState('kmToMiles');
    const [unitsToConvert, setUnitsToConvert] = useState('0');
    return (
    <div>
        <select 
        value = {selectedUnits}
        onChange={e => setSelectedUnits(e.target.value)}
        >
            <option value="kmToMiles">km - miles</option>
            <option value="milesToKm">miles - km</option>
            <option value="metresToFeet">metres - feet</option>
            <option value="feetToMetres">feet - metres</option>
            <option value="cmToInches">cm - inches</option>
            <option value="inchesToCm">inches - cm</option>
        </select>

        <input name ="units"
        type="number"
        value = {unitsToConvert}
        onChange={e => setUnitsToConvert(e.target.value)} />

        <h1>{Conversor(selectedUnits,unitsToConvert)}</h1>
        <button onClick={() => {
            SaveConversion(selectedUnits,unitsToConvert)}}>Save</button>
        <button onClick={() => {
            setSelectedUnits(InvertConversion(selectedUnits));
            setUnitsToConvert(Conversor(selectedUnits,unitsToConvert))
            }}>Invert</button>
    </div>
    );
}

function Conversor(selectedUnits, unitsToConvert){
    const kmToMilesRate = 0.621371;
    const metersToFeet = 3.28084;
    const cmToInches = 0.393701;

    switch(selectedUnits){
        case "kmToMiles": return (unitsToConvert*kmToMilesRate).toFixed(2);
        case "milesToKm": return (unitsToConvert/kmToMilesRate).toFixed(2);
        case "metresToFeet": return (unitsToConvert*metersToFeet).toFixed(2);
        case "feetToMetres": return (unitsToConvert/metersToFeet).toFixed(2);
        case "cmToInches": return (unitsToConvert*cmToInches).toFixed(2);
        case "inchesToCm": return (unitsToConvert/cmToInches).toFixed(2);
    }

}
function SaveConversion(selectedUnits,unitsToConvert){
    let number = Math.random();
    switch(selectedUnits){
        case "kmToMiles": localStorage.setItem(number, unitsToConvert + " km -> "+ Conversor(selectedUnits, unitsToConvert) + " miles");
        case "milesToKm": return localStorage.setItem(number, unitsToConvert + " miles -> "+ Conversor(selectedUnits, unitsToConvert) + " km");
        case "metresToFeet": return localStorage.setItem(number, unitsToConvert + " metres -> "+ Conversor(selectedUnits, unitsToConvert) + " feet");
        case "feetToMetres": return localStorage.setItem(number, unitsToConvert + " feet -> "+ Conversor(selectedUnits, unitsToConvert) + " metres");
        case "cmToInches": return localStorage.setItem(number, unitsToConvert + " cm -> "+  Conversor(selectedUnits, unitsToConvert) + " inches");
        case "inchesToCm": return localStorage.setItem(number, unitsToConvert + " inches -> "+ Conversor(selectedUnits, unitsToConvert)+ " cm");
    }

}
function InvertConversion(selectedUnits){
    switch(selectedUnits){
        case "kmToMiles": return "milesToKm";
        case "milesToKm": return "kmToMiles";
        case "metresToFeet": return "feetToMetres";
        case "feetToMetres": return "metresToFeet";
        case "cmToInches": return "inchesToCm";
        case "inchesToCm": return "cmToInches";
    }
}