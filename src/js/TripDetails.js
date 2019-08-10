import React from 'react';
import { CurrentTrain } from './CurrentTrain';

const TripDetails = (props) => {
  const data = JSON.parse(sessionStorage.currentTrain);
  const travelDate = new Date(sessionStorage.travelDate);
  return (
    <div class="trip-details">
        <h2>Детали поездки</h2>
        <div class="trip-details_to">

          <div class="trip-details_title">
            <h3  class="trainpicker_label trainpicker_label-to">Отправление</h3>
          </div>
          <div class="trip-details_date">{travelDate.toLocaleDateString()}</div>

          <div class="train-details">
            <div>
              <span>№ Поезда</span>
              <span>Название</span>
            </div>
            <div>
              <span><b>{data.train.name}</b></span>
              <br/>
              <span>
                <b>
                {data.from.city.name}<br/>
                {data.to.city.name}
                </b>
              </span>
            </div>
          </div>
            
            <div class="time-details">
              <div>
                <span class="time-details_time">{(new Date(data.from.datetime)).toLocaleTimeString('ruRu', {hour: '2-digit', minute: '2-digit'})}</span>
                <span class="time-details_date">{travelDate.toLocaleDateString()}</span>
              </div>
              <div class="time-details_arrow">9:42</div>
              <div>
                <span class="time-details_time">{(new Date(data.to.datetime)).toLocaleTimeString('ruRu', {hour: '2-digit', minute: '2-digit'})}</span>
                <span class="time-details_date">{travelDate.toLocaleDateString()}</span>
              </div>
            </div>
            <div class="direction-details">
              <div>
                <span class="direction-details_city">{data.from.city.name}</span>
                <br/>
                <span class="direction-details_station">{data.from.railway_station_name}</span>
              </div>
              <div>
                <span class="direction-details_city">{data.to.city.name}</span>
                <br/>
                <span class="direction-details_station">{data.from.railway_station_name}</span>
              </div>
            </div>
        </div>{/* <!-- end of trip-details-to --> */}
        
          <div class="trip-details_passengers">
            <div class="trip-details_title ">
              <h3  class="trainpicker_label trainpicker_label-passenger">Пассажиры</h3>
            </div>
            <div class="train-details passengers-details ">
              <div>{"Взрослых: "}<b>{props.passengers.adults}</b></div>
              <div>{"Детей: "}<b>{props.passengers.children}</b></div>
              </div>
          </div>

          <div class="trip-details_total">
            <span>ИТОГ</span>
            <span class="">{parseInt(props.price).toLocaleString()}</span>
          </div>
       </div> 
       /* <!-- end of trip details --> */
  )
}

export {TripDetails}