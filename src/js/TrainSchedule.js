import React from 'react'


const TrainSchedule = ({info, showTravelTime}) => {
  const travelTimeHours = Math.floor(info.duration  / 60 / 60);
  const travelTime = new Date(info.duration * 1000).toLocaleTimeString('ruRu', {hour: 'numeric', minute: 'numeric'});
  //const travelTimeHours = travelTime.substring(0, travelTime.indexOf(':'));
  //const travelTimeMinutes = travelTime.substring(travelTime.indexOf(':') + 1);
  const travelTimeMinutes = Math.floor((info.duration / 60) % 60);
  //new Date(25794 * 1000).toISOString().substr(11, 5);
  
  return (

        <div class="train-schedule">
            <div class="train-schedule_way">
              <div class="train-schedule_from">
                <h4 class="train-schedule_time">{(new Date(info.from.datetime * 1000)).toLocaleTimeString('ruRu', {hour: '2-digit', minute: '2-digit'})}</h4>
                <div class="train-schedule_city">{info.from.city.name}</div>
                <div class="train-schedule_station">{info.from.railway_station_name}</div>
              </div>
              <div class="train-schedule_travel-arrow">
                {showTravelTime ? <span>{travelTimeHours} ч {travelTimeMinutes} мин</span> : null}
                <i class="material-icons">arrow_forward</i>
              </div>
              <div class="train-schedule_to">
                <h4 class="train-schedule_time">{(new Date(info.to.datetime * 1000)).toLocaleTimeString('ruRu', {hour: '2-digit', minute: '2-digit'})}</h4>
                <div class="train-schedule_city">{info.to.city.name}</div>
                <div class="train-schedule_station">{info.to.railway_station_name}</div>
              </div>
            </div>
         </div>

  )
}

export {TrainSchedule}