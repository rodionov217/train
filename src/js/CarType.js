import React, { Fragment, useEffect, useState } from 'react';
import { is } from 'date-fns/esm/locale';

const CarType = (props) => {
  const {currentType, coaches, setCurrentType, currentCoach, setCurrentCoach} = props;

  const isActive = item => item === currentType ? "car-type_item-active" : '';
  const getCoachName = (name) => {
    return name.match(/\d/g);
  }
  const handleTypeChange = event => {
    if (currentType !== event.currentTarget.dataset.type) {
      setCurrentType(event.currentTarget.dataset.type);
    }
    //setCurrentCoach(coaches[0]);
  }

  const [activeCoach, setActiveCoach] = useState(coaches[0]);

  useEffect(() => {
    setCurrentCoach(coaches[0]);
  }, [currentType]);

  return (
    <div class="car-type">
      <h2>Тип вагона</h2>
      <ul class="car-type_icons">
        {<li onClick={handleTypeChange} data-type="fourth" class={"car-type_item car-type_item-fourth-class " + isActive('fourth') }>Сидячий</li>}
        <li onClick={handleTypeChange} data-type="third" class={"car-type_item car-type_item-third-class " + isActive('third')}>Плацкарт</li>
        <li onClick={handleTypeChange} data-type="second" class={"car-type_item car-type_item-second-class " + isActive('second')}>Купе</li>
        <li onClick={handleTypeChange} data-type="first" class={"car-type_item car-type_item-first-class " + isActive('first')}>Люкс</li>
      </ul>

  {coaches.length > 0 && currentCoach ? ( 
    <Fragment>
        <div class="car-number_switch">
    Вагоны: 
    <ul class="car-number_list">
      {coaches.map((el, i) => (
        <li 
          key={i} 
          class={el.coach.name === currentCoach.coach.name ? "current-car-number" : ""} 
          onClick={() => setCurrentCoach(el)}>
            {getCoachName(el.coach.name)}
          </li>)
      )}
    </ul>
    <span>Нумерация вагонов начинается с головы поезда</span>
  </div>

      <div class="car-main">
        <div class="car-number">
          <h2>{getCoachName(currentCoach.coach.name)}</h2>
          <span>вагон</span>
        </div>
        <div class="seats-info">
          <div>
            <span class="seats-info_title">Места:</span>
            {currentType === "second" || currentType === "third" ? 
            <Fragment>
              <span>Верхние</span>
              <span>Нижние</span> 
            </Fragment> :
            currentType === "first" ? 
              <Fragment>
                <span>Нижние</span>
                <span></span> 
              </Fragment> : 
              <Fragment>
                <span>Сидячие</span>
                <span></span> 
              </Fragment>
            }
          </div>
          <div>
            <span class="seats-info_title">Стоимость</span>
            {currentType === "second" || currentType === "third" ? 
            <Fragment>
              <span class="seats-info_price">{currentCoach.coach.top_price}</span>
              <span class="seats-info_price">{currentCoach.coach.bottom_price}</span>
            </Fragment> :
            <Fragment>
              <span class="seats-info_price">{currentCoach.coach.top_price}</span>
              <span></span>
            </Fragment>
            }
          </div>
          <div>
            <span class="seats-info_title">Обслуживание</span>
            <ul class="seats-info_services">
              {currentCoach.coach.have_air_conditioning ? <li class="seats-info_service seats-info_service-air"><span></span></li> : null}
              {currentCoach.coach.have_wifi ? <li class="seats-info_service seats-info_service-wifi"><span></span></li> : null}
              {currentCoach.coach.is_linens_included ? <li class="seats-info_service seats-info_service-linens"><span></span></li> : null}
              <li class="seats-info_service seats-info_service-food"><span></span></li>
            </ul>
          </div>
        </div>
</div>
</Fragment>) : <div class="car-number_switch">В этом поезде нет мест выбранного типа</div>}
</div>
  )
}

export {CarType}