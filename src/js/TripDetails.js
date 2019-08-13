import React from 'react';
import { CurrentTrain } from './CurrentTrain';

const TripDetails = (props) => {
  const data = JSON.parse(sessionStorage.currentTrain);
  const travelDate = new Date(JSON.parse(sessionStorage.searchParams).date);
  const arrivalDate = new Date(travelDate);
  arrivalDate.setHours(arrivalDate.getHours() + (new Date(data.duration * 1000)).getHours());
  console.log(arrivalDate);
  return (
    <div class="trip-details">
        <h2>Детали поездки</h2>
        <div class="trip-details_to">

        <div class="trip-details_title">
            <h3  class="trainpicker_label trainpicker_label-to">Отправление</h3>
        </div>
          <div class="trip-details_date"></div>

          <div class="train-details">
            <div>
              <span>Дата</span>
              <span>№ Поезда</span>
              <span>Маршрут</span>
            </div>
            <div>
              <span>{travelDate.toLocaleDateString()}</span>
             
              <span><b>{data.train.name}</b></span>
              
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
                <span class="time-details_time">{(new Date(data.from.datetime * 1000)).toLocaleTimeString('ruRu', {hour: '2-digit', minute: '2-digit'})}</span>
                <span class="time-details_date">{travelDate.toLocaleDateString()}</span>
              </div>
              <div class="time-details_arrow">{Math.floor(data.duration  / 60 / 60) + ":" +  Math.floor((data.duration / 60) % 60) }</div>
              <div>
                <span class="time-details_time">{(new Date(data.to.datetime * 1000)).toLocaleTimeString('ruRu', {hour: '2-digit', minute: '2-digit'})}</span>
                <span class="time-details_date">{arrivalDate.toLocaleDateString()}</span>
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
                <span class="direction-details_station">{data.to.railway_station_name}</span>
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