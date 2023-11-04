import { FC } from "react"
import '../cssfolder/Offer.css'

export interface OfferProps {
    dashboard: any
}

export const Offer: FC<OfferProps> = (props: OfferProps) => {
    return(
        <> 
            <div className="offer-space-content">
                <div className="offer-tile">Offer 1</div>
                <div className="details-space-content">
                    <div className="description-offer-price">5000</div>
                    <div className="description-offer-limit-operson">20</div>
                    <div className="description-offer-subtitle">{props.dashboard.subtitle}</div>
                    <div className="description-offer-start-journey">413876548</div>

                    
                </div>
                <div className="photo"></div>
                
            </div>
            
        </>
    )
}