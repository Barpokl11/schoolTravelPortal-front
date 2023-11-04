
import { FC,  useEffect, useState } from "react"
import '../cssfolder/Schedule.css'

export interface ScheduleProps {
    
}

export const Schedule: FC<ScheduleProps> = (props: ScheduleProps) => {
    return(
        <>
            <div className="schedule-container">
                <div className="schedule-title">
                    <h4>Title</h4>
                </div>
                <div className="schedule-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, officia illum assumenda non quidem cumque! Autem commodi fugiat labore, consequuntur minima eius exercitationem voluptatum sunt explicabo, libero nemo non doloribus.
                </div>


                <div className="schedule-view">
                <h4>Title</h4>
                </div>
                <div className="schedule-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, officia illum assumenda non quidem cumque! Autem commodi fugiat labore, consequuntur minima eius exercitationem voluptatum sunt explicabo, libero nemo non doloribus.
                </div>

            </div>
        </>
    )
}