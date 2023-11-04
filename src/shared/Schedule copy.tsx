
import { FC } from "react"
import '../cssfolder/Schedule.css'

export interface ScheduleViewProps {
    schedulesList: []
}

export const ScheduleView: FC<ScheduleViewProps> = (props: ScheduleViewProps) => {
    return(
        <>
            {props.schedulesList.map(st => (
                console.log(st)
            ))}
        </>
    )
}