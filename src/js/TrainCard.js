import React from 'react';
import {Link} from 'react-router-dom';
import { TrainSchedule } from './TrainSchedule';


const TrainCard = (props) => {
  const {departure} = props;

  return (
    <div className="train">
      <div className="train-info">
        <div className="train-icon"></div>
        <h4 className="train-info_number">{departure.train.name}</h4>
        <div className="train-info_destination">
          <div className="train-info_name">{departure.from.city.name}</div>
          <div className="train-info_name">{departure.to.city.name}</div>
        </div>
      </div>

      <TrainSchedule info={departure} showTravelTime />

         <div className="train-seats">
            <ul className="train-seats_list">
              {departure.have_fourth_class ?  
                <li >
                  <span className="train-seats_type">Сидячий</span>
                  <span className="train-seats_amount">{departure.available_seats_info.fourth}</span>
                  <span className="train-seats_price">{departure.price_info.fourth.top_price}</span>
                </li> :
                null
              }
              {departure.have_third_class ?  
                <li >
                  <span className="train-seats_type">Плацкарт</span>
                  <span className="train-seats_amount">{departure.available_seats_info.third}</span>
                  <span className="train-seats_price">{departure.price_info.third.top_price}</span>
                </li> :
                null
              }
              {departure.have_second_class ?  
                <li >
                  <span className="train-seats_type">Купе</span>
                  <span className="train-seats_amount">{departure.available_seats_info.second}</span>
                  <span className="train-seats_price">{departure.price_info.second.top_price}</span>
                </li> :
                null
              }
              {departure.have_first_class ?  
                <li >
                  <span className="train-seats_type">Люкс</span>
                  <span className="train-seats_amount">{departure.available_seats_info.first}</span>
                  <span className="train-seats_price">{departure.price_info.first.top_price}</span>
                </li> :
                null
              }
              </ul>

            <div>
              <div className="train-seats_icons">
                {departure.have_wifi ? <span title="Есть wi-fi"><i className="fas fa-wifi"></i></span> : null}
                {departure.have_air_conditioning ? <span title="Есть кондиционер"><i className="far fa-snowflake"></i></span> : null}
                {departure.is_express ? <span title="Экспресс"><span className="rocket"></span></span> : null}
              </div>
              <div className="train-seats_button-container">
                <Link className="train-seats_button" to='/seats'  onClick={() => props.setCurrentTrain(departure)}>
                  Выбрать места</Link>
              </div>
            </div>
       </div>
      </div>
  )
}

export {TrainCard}