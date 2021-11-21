import axios from 'axios';
import React, {Component} from 'react';
import Navbar from './Navbar/Navbar';
import './Vaccine.scss';
import WorldStats from './WorldStats/WorldStats';
import Countries from './Countries/Countries';
import NumberFormat from 'react-number-format';



class Vaccine extends Component {

      state = {
          result: {
            "TotalConfirmed": 702220,
            "TotalVaccine": 680432,
            "TotalRecovered": 680432,
            "ActiveCase": 456327
          }
      }

      async componentDidMount() {
          var globalData = await axios.get("https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json");

          let vaccine = globalData.data.Global

          this.setState({
              result: {
                "TotalConfirmed": vaccine.TotalConfirmed,
                "TotalVaccine": vaccine.TotalVaccine,
                "TotalRecovered": vaccine.TotalRecovered,
                "ActiveCase": vaccine.TotalConfirmed - (vaccine.TotalRecovered + vaccine.TotalVaccine)  
              }
          })
      }

   render() {

    var Stats = Object.keys(this.state.result).map((key, index) => {
        return <WorldStats
                   key={index}
                   about={key}
                   total={<NumberFormat value={this.state.result[key]} thousandSeparator={true} displayType="text"/>} />
    })


    return (
        <div className="vac">
            <Navbar />
            <h2 className="heading">COVID-19 Vaccination Tracker</h2>
            <br />
           <div className="Vacc">
               <h4 className="head-top">Vaccination cases</h4>
               <p className="description">Let us check information about vaccination</p>

               <div className="world-stats">
                  {Stats}
               </div>
           </div>
           <Countries />
        </div>
    )
}
}

export default Vaccine
