import React from 'react';
import './styles.css';
import { Card } from 'semantic-ui-react';
import moment from 'moment';
import { DivMode } from 'tsparticles';
import { DivType } from 'tsparticles';


const CardExampleCard = ({weatherData}) => (
    <div className="main">
        <p className="header">{weatherData.name}</p>
        <div className="flex">
          <p className="day">Day: {moment().format('dddd')}</p>
        </div>
  
        <div className="flex">
          <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
        </div>
        
    </div>
  )
  
  export default CardExampleCard;