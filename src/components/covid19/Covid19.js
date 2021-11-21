import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Covid19.scss';
import axios from 'axios';
import Form from 'react-bootstrap/Form'


const Covid19 = () => {
   const [latest, setLatest] = useState([]);
   const [results, setResults] = useState([]);
   const [searchCountries, setSearchCountries] = useState([]);


    useEffect(() =>{
        axios.all([
        axios.get("https://corona.lmao.ninja/v2/all"),
        axios.get("https://corona.lmao.ninja/v2/countries?sort=country")]).then(responseArr =>{
            setLatest(responseArr[0].data);
            setResults(responseArr[1].data);
        }).catch(err => {
            console.log(err);
        });
    }, []);

     const date = new Date(parseInt(latest.updated));
     const lastUpdated = date.toString();

     const filterCountries = results.filter(item => {
         return searchCountries !== "" ? item.country.includes(searchCountries) : item;
     });

     const countries = filterCountries.map((data, i) => {
         return (
             <Card key={i} bg="light" text="dark" className="text-center"
             style={{margin: "10px"}}>
                <Card.Body>
                  <Card.Img variant="top" src={data.countryInfo.flag} />
                  <Card.Title>{data.country}</Card.Title>
                  <Card.Text>cases {data.cases}</Card.Text>
                  <Card.Text>Deaths {data.deaths}</Card.Text>
                  <Card.Text>Recovered {data.recovered}</Card.Text>
                  <Card.Text>Today's Cases {data.todaycases}</Card.Text>
                  <Card.Text>Today's Deaths {data.todayDeaths}</Card.Text>
                  <Card.Text>Actives {data.actives}</Card.Text>
                  <Card.Text>Critical {data.critical}</Card.Text>
                </Card.Body>
             </Card>
         )
     });

    //  var queries = [{
    //      columns: 2,
    //      query: 'min-width: 500px'
    //  }, {
    //       columns: 3,
    //       queries: 'min-width: 1000px'
    //  }];


    return (
        <div>
            <Navbar /> 
            <h2 className="title__show">COVID-19 Live Stats</h2>
            <br/>
            <CardGroup>
  <Card bg="secondary" text="white" className="text-center" style={{margin: "10px"}}>
    <Card.Body>
      <Card.Title>Cases</Card.Title>
      <Card.Text>
        {latest.cases}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated{lastUpdated}</small>
    </Card.Footer>
  </Card>
  <Card bg="danger" text="white" className="text-center" style={{margin: "10px"}}>
    <Card.Body>
      <Card.Title>Deaths</Card.Title>
      <Card.Text>
        {latest.deaths}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated{lastUpdated}</small>
    </Card.Footer>
  </Card>
  <Card bg="success" text="white" className="text-center" style={{margin: "10px"}}>
    <Card.Body>
      <Card.Title>Recovered</Card.Title>
      <Card.Text>
       {latest.recovered}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated{lastUpdated}</small>
    </Card.Footer>
  </Card>
</CardGroup>
<Form>
  <Form.Group controlId="formGroupSearch">
    <Form.Label>Search</Form.Label>
    <Form.Control type="text" placeholder="Search a country" onChange={e => setSearchCountries(e.target.value)} />
  </Form.Group>
  </Form>
  <CardGroup>{countries}</CardGroup>
</div>
    )
}

export default Covid19
