import React from 'react';

const ProgressSteps = () => {
  return (
    <section class="progress">
     <div class="progress__step">
       <span class="number">1</span>
       Билеты
     </div>
     <div class="progress__step">
        <span class="number">2</span>
        Пассажиры
     </div>
     <div class="progress__step">
        <span class="number">3</span>
        Оплата
     </div>
     <div class="progress__step">
        <span class="number">4</span>
        Проверка
     </div>
   </section>
  )
}

export {ProgressSteps}