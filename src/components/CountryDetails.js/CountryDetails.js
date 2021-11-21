import { width } from 'dom-helpers';
import React from 'react';
import ReactCountryFlag from 'react-country-flag'

import './CountryDetail.scss';


export default function CountryDetails(props) {
    return (
        <div className="countryDetails">

           <div className="country-icon">
               
               <ReactCountryFlag
               className="country-flag"
               countryCode={props.countryCode}
               svg
               style={{
                   width: "3.5em",
                   height: "1.5em"
               }} 
               title={props.countryCode} />
               
           </div> 

           <div className="cases-details">

               <div className="case-box cases">
                <a href="#">{props.totalCase}</a>
                <p className="yesterday">Last 24 hours: <strong>{props.newCases}</strong></p>
               </div>

               
               <div className="case-box Vaccine">
                <a href="#">{props.totalVaccine}</a>
                <p className="yesterday">Last 24 hours: <strong>{props.newVaccine}</strong></p>
               </div>

               
               <div className="case-box Recovered">
                <a href="#">{props.totalRecovered}</a>
                <p className="yesterday">Last 24 hours: <strong>{props.newRecovered}</strong></p>
               </div>

           </div>
        </div>
    )
}
