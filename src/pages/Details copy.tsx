import { FC, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import '../cssfolder/Details.css'
import { ScheduleView } from "../shared/Schedule copy";

export interface DetailsPropsView {
    deatil: [any]
}

export const DetailsView: FC<DetailsPropsView> = (props: DetailsPropsView) => {

    return(
        <>
          {props.deatil.map(dt => (
              <ScheduleView schedulesList={dt.scheduleList}/>
           ))}
        </>
    )
}
