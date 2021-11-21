import React from 'react';
import {useDispatch} from 'react-redux';
import {logout} from '../features/userSlice';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import ImageSlider from './ImageSlider';


import './Home.scss';
import { SliderData } from './SliderData';


const Home = () => {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(logout())
    }
    
    return (
        <div className="Home"> 
        <Navbar />  
          <div className="enter">
            <button onClick={logoutHandler}>Logout</button>
          </div>
          <h2 className="matter">Coronavirus (COVID -19)</h2>
          <br />
          <p className="who"><strong>World Health Organization(WHO)</strong> announced that coronavirus (COVID-19) pandemic has hit the world and warned that spread to all the people across the country and 
          they can contract the virus that may lead to health issues. 
          They are advised to go to hospital for the medicinal treatment. 
          It is advisable that they should observe safely covid-19 protocol. </p>
          <br/>
          <h1 className="covid19__update">There are more than two millions of deaths of persons contracted 
          the virus (COVID-19)</h1>
           <br/>
           <ImageSlider slides={SliderData}/>
            <br/>
            <div className="project">
              <h3 className="update">Update</h3>
              <div className="group-advice">
                <div className="advice">
                  <h3 className="title-information">Symptoms of coronavirus person</h3>
                 <ul>
                   <li>Fever</li>
                   <li>Cough</li>
                   <li>Breathing hard</li>
                   <li>Headache</li>
                   <li>Liver and Lung Disease</li>
                 </ul>
                </div>
                <div className="advice">
                <h3 className="title-information">Observation of COVID-19 Protocal</h3>
                <ul>
                  <li>Washing hands with water and soap</li>
                  <li>Social Distance</li>
                  <li>Wear Mask</li>
                  <li>Stay safe</li>
                </ul>
                </div>
                <div className="advice">
                <h3 className="title-information">Persons infected with coronavirus</h3>
                <ul>
                  <li>Visit hospital for medical treatment</li>
                  <li>COVID-19 vaccines</li>
                </ul>
                </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
