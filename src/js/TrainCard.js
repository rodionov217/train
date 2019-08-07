import React from 'react';
import {Link} from 'react-router-dom';
import { isNull } from 'util';
import { TrainSchedule } from './TrainSchedule';


const TrainCard = (props) => {
  /* console.log('TRAIN CARD PROPS: ', props); */
  const {departure} = props;
          
  return (
    <div class="train">
         <div class="train-info">
           <div class="train-icon"></div>
           <h4 class="train-info_number">{departure.train.name}</h4>
           <div class="train-info_destination">
             <div class="train-info_from">{departure.from.city.name}</div>
             <div class="train-info_to">{departure.to.city.name}</div>
           </div>
         </div>

        <TrainSchedule info={departure} showTravelTime />

         <div class="train-seats">
            <ul class="train-seats_list">
              {departure.have_fourth_class ?  
                <li >
                  <span class="train-seats_type">Сидячий</span>
                  <span class="train-seats_amount">{departure.available_seats_info.fourth}</span>
                  <span class="train-seats_price">{departure.price_info.fourth.top_price}</span>
                </li> :
                null
              }
              {departure.have_third_class ?  
                <li >
                  <span class="train-seats_type">Плацкарт</span>
                  <span class="train-seats_amount">{departure.available_seats_info.third}</span>
                  <span class="train-seats_price">{departure.price_info.third.top_price}</span>
                </li> :
                null
              }
              {departure.have_second_class ?  
                <li >
                  <span class="train-seats_type">Купе</span>
                  <span class="train-seats_amount">{departure.available_seats_info.second}</span>
                  <span class="train-seats_price">{departure.price_info.second.top_price}</span>
                </li> :
                null
              }
              {departure.have_first_class ?  
                <li >
                  <span class="train-seats_type">Люкс</span>
                  <span class="train-seats_amount">{departure.available_seats_info.first}</span>
                  <span class="train-seats_price">{departure.price_info.first.top_price}</span>
                </li> :
                null
              }
              </ul>

            <div>
              <div class="train-seats_icons">
                {departure.have_wifi ? <span title="Есть wi-fi"><i class="fas fa-wifi"></i></span> : null}
                {departure.have_air_conditioning ? <span title="Есть кондиционер"><i class="far fa-snowflake"></i></span> : null}
               {/*  <span><i class="material-icons">free_breakfast</i></span> */}
                {departure.is_express ? <span title="Экспресс"><span class="rocket"></span></span> : null}
              </div>
              <div class="train-seats_button-container">
                <Link className="train-seats_button" to='/seats'  onClick={() => props.setCurrentTrain(departure)}>
                  Выбрать места</Link>
              </div>
            </div>
       </div>
      </div>
  )
}

export {TrainCard}