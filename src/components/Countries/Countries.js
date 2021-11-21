import React, {Component} from 'react'
import './Countries.scss';
import NumberFormat from 'react-number-format';
import HeadingNames from '../../components/HeadingNames/HeadingNames'
import CountryDetails from '../CountryDetails.js/CountryDetails';
import Spinner from '../../components/Spinner/Spinner'
import axios from 'axios';
import ArraySort from 'array-sort';

export default class Countries extends Component {

    state = {
        countryDetails: [],
        searchedCountries: []
    }

    async componentDidMount() {


        var data = await axios.get("https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.csv")

        var countryDetails = data.data.Countries
        countryDetails = ArraySort(countryDetails, "TotalConfirmed", {reverse: true})

        this.setState({countryDetails: countryDetails, status: true, selectedData: countryDetails})
    }
    

    ChangeSortValue = e => {
        const value = e.target.value
        let sortByReverse = true;

        if(value == "Highest"){
            sortByReverse = true
        } else {
            sortByReverse = false;
        }

        let countryDetails = ArraySort(this.state.countryDetails, "TotalConfirmed", {reverse: sortByReverse})

        this.setState({countryDetails: countryDetails, status: true})
    }

    searchedCountries = e => {
        const value = e.target.value
        const countryDetails = this.state.countryDetails

        var FindSpecificCountry = []

        if(value) {
            countryDetails.map(function(cur, index){
                const finder = cur.Country.tolowerCase().search(value.tolowerCase())

                if(finder !== -1){
                    FindSpecificCountry.push(countryDetails[index])
                }
            })

            FindSpecificCountry = ArraySort(FindSpecificCountry, "TotalConfirmed", {reverse: true})
            this.setState({searchedCountries: FindSpecificCountry})
        } else {
            this.setState({countryDetails: countryDetails})
        }

        if(value.length === 0) {
            this.setState({selectedData: this.state.countryDetails})
        } else {
            this.setState({selectedData: this.state.searchedCountries})
        }
    }

    render() {
              
              const ChangeNumbertoformat = function(val){
                  return <NumberFormat value={val} thousandSeparator={true} displayType="Text" />
              }             

              var countriesList = this.state.countryDetails.length > 0 ?
    
              this.state.selectedData.map(function(cur, index) {

                  return <CountryDetails 
                    key={index}
                    countryCode={cur.countryCode}
       
                    totalCases={ChangeNumbertoformat(cur.totalConfirmed)}
                    newCases={ChangeNumbertoformat(cur.newCases)}
       
                    totalVaccine={ChangeNumbertoformat(cur.totalVaccine)}
                    newVaccine={ChangeNumbertoformat(cur.newVaccine)}
       
                    totalRecovered={ChangeNumbertoformat(cur.totalRecovered)}
                    newRecovered={ChangeNumbertoformat(cur.newRecovered)}
                   /> 
              }) : null


        return (
            <div className="countries-stats">

                <h2 className="countries-state-headline">Countries Stats</h2>

                <div className="filtering">

                    <input type="text" placeholder="Enter Country Name" onChange={this.searchedCountries} />
                    <select className="sort-by" onChange={this.ChangeSortValue}>
                        <option>Highest</option>
                        <option>Lowest</option>
                    </select>
                </div>

            <HeadingNames />

            {this.state.countryDetails.length < 1 ? <Spinner /> : null}

            {countriesList}

            </div>
        )
    }
}