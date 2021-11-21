import React from 'react'

import './HeadingNames.scss';

export default function Header() {
    return (
        <div>
           <div className="Header">
               <p className="information">Country</p>
               <p className="information">Cases</p>
               <p className="information">Vaccine</p>
               <p className="information">Recovered</p>
               </div> 
        </div>
    )
}
