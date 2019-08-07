import React from 'react';

const LastTickets = () => {
  return (
    <div class="last-tickets">
         <h2 class="last-tickets_title">Последние билеты</h2>
         <div class="last-tickets_card">
           <div class="last-tickets_directions">
           <div class="last-tickets_from">
             <div class="train-schedule_city">Самара</div>
             <div class="train-schedule_station">Курский вокзал</div>
           </div>
           <div class="last-tickets_to">
              <div class="train-schedule_city">Москва</div>
              <div class="train-schedule_station">Рижский вокзал</div>
            </div>
          </div>
          <div class="last-tickets_info">
            <div class="last-tickets_labels">
              <span class="switches_label wi-fi"></span>
              <span class="switches_label express"></span>
              <span class="switches_label breakfast"></span>
            </div>
            <div class="last-tickets_price">
              <span>3 500</span>
            </div>
          </div>
         </div>
       </div>
  )
}

export {LastTickets}