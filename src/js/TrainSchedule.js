import React from 'react'


const TrainSchedule = ({info, showTravelTime}) => {
  const travelTimeHours = Math.floor(info.duration / 18000);
  const travelTimeMinutes = Math.floor((info.duration / 18000) % 1 * 60);;
  return (
    <div class="current-train_schedule">
        <div class="train-schedule">
            <div class="train-schedule_way">
              <div class="train-schedule_from">
                <h4 class="train-schedule_time">{(new Date(info.from.datetime)).toLocaleTimeString('ruRu', {hour: '2-digit', minute: '2-digit'})}</h4>
                <div class="train-schedule_city">{info.from.city.name}</div>
                <div class="train-schedule_station">{info.from.railway_station_name}</div>
              </div>
              <div class="train-schedule_travel-arrow">
                {showTravelTime ? <span>{travelTimeHours} ч {travelTimeMinutes} мин</span> : null}
                <i class="material-icons">arrow_forward</i>
              </div>
              <div class="train-schedule_to">
                <h4 class="train-schedule_time">{(new Date(info.to.datetime)).toLocaleTimeString('ruRu', {hour: '2-digit', minute: '2-digit'})}</h4>
                <div class="train-schedule_city">{info.to.city.name}</div>
                <div class="train-schedule_station">{info.to.railway_station_name}</div>
              </div>
            </div>
         </div>
      </div>
  )
}

export {TrainSchedule}