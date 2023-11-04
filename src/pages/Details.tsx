import { FC, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import '../cssfolder/Details.css'
import { ScheduleView } from "../shared/Schedule copy";
import { DetailsView } from "./Details copy";

export interface DetailsProps {

}

export const Details: FC<DetailsProps> = (props: DetailsProps) => {
    const[details, setDetails] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:8080/details/getAll", {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Access-Control-Allow-Origin': 'http://localhost:8080/details/getAll',
    //             'Access-Control-Request-Method': 'GET',
    //             'Access-Control-Allow-Headers': 'Content-Type'
    //         },
    //         method: "GET"
    //     }).then(response => {
    //         return response.json;
    //     }).then(data => {
    //         setDetails(data as any);
    //     });
    // })

    return (
        <>
            <div className="top-title">{"Szczegóły wycieczki"}
                <div className="internal-code">Internal code</div>
            </div>
            
            <div className="space-for-details">
                
                <div id="go-to-main">
                <Link to ="/">Wróć do menu</Link>
                </div>
                <div className="album">
                    <div className="photography">photo</div>
                    <div className="photography">photo</div>
                    <div className="photography">photo</div>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <div className="country">country</div>
                            </td>
                            <td>Spain</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="price">price</div>
                            </td>
                            <td>5000 szekli</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="currency-per-person">currency per person</div>
                            </td>
                            <td>1200</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="start-journey">start journey</div>
                            </td>
                            <td>09.09.23</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="end-jouney">end jouney</div>
                            </td>
                            <td>23.09.23</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="limit-person"> limit person</div>
                            </td>
                            <td>2</td>
                        </tr>
                    </tbody>
                </table>
                <div className="space-for-schedule">
                    <h1>Plan Wycieczki</h1>
                    {/* {details.map(detail => (
                        // <DetailsView deatil={detail}/>
                    ))} */}
                </div>

            </div>
        </>
    )
}
