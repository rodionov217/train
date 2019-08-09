import React from 'react';
import { TrainSchedule } from './TrainSchedule';

const CurrentTrain = ({info}) => {
  const travelTimeHours = Math.floor(info.duration / 18000);
  const travelTimeMinutes = Math.floor((info.duration / 18000) % 1 * 60);

  return (
    <div class="current-train">
        <div class="train-icon"></div>
        <div class="train-info">
          <h4 class="train-info_number">{info.train.name}</h4>
          <div>
            <div class="train-info_from">{info.from.city.name}</div>
            <div class="train-info_destination">{info.to.city.name}</div>
          </div>
          </div>
      
      <TrainSchedule info={info} showTravelTime={false}/>
      
     <div class="current-train_travel-time">
        <div class="travel-time_icon"></div>
        <div class="travel-time_text">
          <div class="hours">{travelTimeHours} ч</div>
          <div class="hours">{travelTimeMinutes} мин</div>
        </div>
     </div>
    </div>
  )
}


export {CurrentTrain};