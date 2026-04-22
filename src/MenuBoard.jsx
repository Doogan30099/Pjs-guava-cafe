import Bagels from "./Bagels";
import Coffees from "./Coffees";
import Pastries from "./Pastries";
import Teas from "./Teas";
import Espressos from "./Esspressos";
import Croissants from "./Crossaints";
import { useState } from "react";


const MenuBoard = () => {
    const [showCoffees, setShowCoffees] = useState(true);
        const [showTeas, setShowTeas] = useState(true);
        const [showEspressos, setShowEspressos] = useState(true);
        const [showBagels, setShowBagels] = useState(true);
        const [showPastries, setShowPastries] = useState(true);
        const [showCroissants, setShowCroissants] = useState(true);
    
        return (
            <div className='menu-board'>
                <h1>Guava Cafe Menu</h1>
                <h2>The best coffee and pastries in town</h2>
                <div className='menu-sections'>
                    <button onClick={() => setShowCoffees(!showCoffees)}>
                        {showCoffees ? 'Hide Coffees' : 'Show Coffees'}
                    </button>
                    {showCoffees && <Coffees />}
                    <button onClick={() => setShowTeas(!showTeas)}>
                        {showTeas ? 'Hide Teas' : 'Show Teas'}
                    </button>
                    {showTeas && <Teas />}
                    <button onClick={() => setShowEspressos(!showEspressos)}>
                        {showEspressos ? 'Hide Espressos' : 'Show Espressos'}
                    </button>
                    {showEspressos && <Espressos />}
                    <button onClick={() => setShowBagels(!showBagels)}>
                        {showBagels ? 'Hide Bagels' : 'Show Bagels'}
                    </button>
                    {showBagels && <Bagels />}
                    <button onClick={() => setShowPastries(!showPastries)}>
                        {showPastries ? 'Hide Pastries' : 'Show Pastries'}
                    </button>
                    {showPastries && <Pastries />}
                    <button onClick={() => setShowCroissants(!showCroissants)}>
                        {showCroissants ? 'Hide Croissants' : 'Show Croissants'}
                    </button>
                    {showCroissants && <Croissants />}
                </div>
            </div>
        );
    }

export default MenuBoard;