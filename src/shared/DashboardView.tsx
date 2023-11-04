import { FC } from "react"
import { MenuBar } from "./MenuBar"
import '../cssfolder/Dashboard.css'
import { Offer } from "./Offer"
import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"

export interface DashboardViewProps {
    dashboard: any

}

export const DashboardView: FC<DashboardViewProps> = (props: DashboardViewProps) => {

    return(
        <>
            <div className="tile">
            
                <header className="trip-title">
                    {props.dashboard.title} </header> 
                    <nav>
                        <img src="../images/test-image-tropical.jpg" alt="#" /></nav>
                <article>
                    <div className="article-grid">
                    <div id="tile-country">Kraj: {props.dashboard.country}</div>
                        <div id="tile-subtitle">{props.dashboard.subtitle}</div>
                        <div id="tile-price">Cena: {props.dashboard.price} PLN</div>
                        <div id="tile-currency"> Cena za osobę: {props.dashboard.currencyPerPerson}</div>
                       
                        <div id="tile-start-jour">Start wycieczki: {props.dashboard.startJourney}</div>
                        <div id="tile-end-jour">Koniec wycieczki: {props.dashboard.endJourney}</div>
                        
                        <div id="more-info"><Link to="/details">Więcej informacji </Link>
                        </div>
                    </div>
                </article>
            </div>
            
        </>

    )
}