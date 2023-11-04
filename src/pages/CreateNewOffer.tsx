import { FC, useState } from "react"
import { Link } from "react-router-dom";
import '../cssfolder/CreateNewOffer.css'

export interface CreateNewOfferProps {

}

export const CreateNewOffer: FC<CreateNewOfferProps> = (props: CreateNewOfferProps) => {
    const[title, setTitle] = useState('');
    const[subtitle, setSubtitle] = useState('');
    const[country, setCountry] = useState('');
    const[startJourney, setStartJourney] = useState('');
    const[endJourney, setEndJourney] = useState('');
    const[price, setPrice] = useState('');
    const[currencyPerPerson, setCurrencyPerPerson] = useState('');

    const onSave = (e) => {
        e.preventDefault();
        const createdDashboard = {title, subtitle, country, startJourney, endJourney, price, currencyPerPerson}
        console.log(createdDashboard)
        fetch("http://localhost:8080/dashboard/create", {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:8080/dashboard/create',
                'Access-Control-Request-Method': 'POST',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            method: "POST",
            body: JSON.stringify(createdDashboard)
        }).then(() => {
            console.log("Added")
        })
    }

    return(
        <>
            <h1>Formularz Wycieczki</h1>
            <form>
                <label>Tytuł wycieczki:</label>
                <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required/><br/>
                
                <label>Podtytuł:</label>
                <input type="text" id="subtitle" name="subtitle" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} required/><br/>
                
                <label>Kraj:</label>
                <input type="text" id="country" name="country"  value={country} onChange={(e) => setCountry(e.target.value)} required/><br/>
                
                <label>Data początkowa:</label>
                <input type="date" id="startJourney" name="startJourney" value={startJourney} onChange={(e) => setStartJourney(e.target.value)} required/><br/>
                
                <label>Data końcowa:</label>
                <input type="date" id="endJourney" name="endJourney" value={endJourney} onChange={(e) => setEndJourney(e.target.value)} required/><br/>
                
                <label>Cena:</label>
                <input type="number" id="price" name="price"  value={price} onChange={(e) => setPrice(e.target.value)}required/><br/>
                
                <label>Cena za osobę:</label>
                <input type="number" id="currencyPerPerson" name="currencyPerPerson" value={currencyPerPerson} onChange={(e) => setCurrencyPerPerson(e.target.value)} required/><br/>
                <button type="submit" onClick={onSave}>Wyślij</button>
            </form>
        </>
    )
}
