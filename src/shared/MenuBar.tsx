import { FC } from "react"
import '../cssfolder/MenuBar.css'

export interface MenuBarProps {

}

export const MenuBar: FC<MenuBarProps> = (props: MenuBarProps) => {
    return (
        <>
            <div className="title-menu">Menu</div>
            <div className="content-menu">
                <button className="sort-by-highest-price-button">
                    Sort By highest price
                </button> <br /> <br />
                <button className="sort-by-highest-price-button">
                    Sort By lowest price
                </button>
                <div className="side-menu">
                    
      <h2>Filtry</h2>
      <label htmlFor="priceRange"> PLN</label>
      <input
        type="range"
        id="priceRange"
        min="0"
        max="5000"
        step="100"
        
      />
    </div>
            </div>
        </>
    )
}