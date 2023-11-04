import { FC } from "react";
import '../cssfolder/Background.css'

export interface BackgroundProps {
    title: string,
    description: string
}

export const Background: FC<BackgroundProps> = (props: BackgroundProps) => {

    return (
        <>
            <div>
                {props.title}
            </div>
        </>
    )
}