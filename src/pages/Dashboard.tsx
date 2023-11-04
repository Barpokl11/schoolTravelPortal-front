import { FC } from "react"
import { MenuBar } from "../shared/MenuBar"
import '../cssfolder/Dashboard.css'
import { Offer } from "../shared/Offer"
import { useState } from "react"
import { useEffect } from "react"
import { DashboardView } from "../shared/DashboardView"
import { NewDashboard} from "../shared/NewDashboard"

export interface DashboardProps {


}

export const Dashboard: FC<DashboardProps> = (props: DashboardProps) => {
    const[dashboards, setDashboards] = useState([] as any);

    useEffect(() => {
        fetch("http://localhost:8080/dashboard/getAll", {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:8080/dashboard/getAll',
                'Access-Control-Request-Method': 'GET',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            method: "GET"
        }).then(response => {
            return response.json();
        }).then(data => {
            setDashboards(data);
        });
    }, [])

    return(
        <>
            <div className="title"> 
                School Travel Portal
            </div>
            <div className="spaces">
            <button className="newOffer">
                <NewDashboard/> 
            </button>
                <div className="space-for-offer">
                    {dashboards.map(dashboard=> (
                        <DashboardView dashboard={dashboard}/>
                    ))}
                </div>
                <div className="space-for-menu">
                    <MenuBar/>
                </div>
            </div>
        
        </>

    )
}