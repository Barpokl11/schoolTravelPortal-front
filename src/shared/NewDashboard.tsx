import { FC } from "react"
import { Link } from "react-router-dom"
import '../cssfolder/NewDashboard.css'

export interface NewDashboardProps {

}

export const NewDashboard: FC<NewDashboardProps> = (props: NewDashboardProps) => {
    return (
      <>
      <button className="button">
        <Link to="/create">Dodaj nową ofertę </Link>
      </button>
        </>
    )
}