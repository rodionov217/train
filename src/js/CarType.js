import React, { Fragment, useEffect, useState } from 'react';

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
  }

  const [activeCoach, setActiveCoach] = useState(coaches[0]);

  useEffect(() => {
    setCurrentCoach(coaches[0]);
  }, [currentType]);

  return (
    <div className="car-type">
      <h2>Выберите тип вагона</h2>
      <ul className="car-type_icons">
        {<li onClick={handleTypeChange} data-type="fourth" className={"car-type_item car-type_item-fourth-class " + isActive('fourth') }>Сидячий</li>}
        <li onClick={handleTypeChange} data-type="third" className={"car-type_item car-type_item-third-class " + isActive('third')}>Плацкарт</li>
        <li onClick={handleTypeChange} data-type="second" className={"car-type_item car-type_item-second-class " + isActive('second')}>Купе</li>
        <li onClick={handleTypeChange} data-type="first" className={"car-type_item car-type_item-first-class " + isActive('first')}>Люкс</li>
      </ul>

      {coaches.length > 0 && currentCoach ? ( 
        <Fragment>
          <div className="car-number_switch">
            Вагоны: 
            <ul className="car-number_list">
              {coaches.map((el, i) => (
                <li key={i} 
                  className={el.coach.name === currentCoach.coach.name ? "current-car-number" : ""} 
                  onClick={() => setCurrentCoach(el)}>
                    {getCoachName(el.coach.name)}
                  </li>)
              )}
            </ul>
            <span>Нумерация вагонов начинается с головы поезда</span>
          </div>

          <div className="car-main">
            <div className="car-number">
              <h2>{getCoachName(currentCoach.coach.name)}</h2>
              <span>вагон</span>
            </div>
            <div className="seats-info">
              <div>
                <span className="seats-info_title">Выберите места:</span>
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
                <span className="seats-info_title">Стоимость</span>
                {currentType === "second" || currentType === "third" ? 
                <Fragment>
                  <span className="seats-info_price">{currentCoach.coach.top_price}</span>
                  <span className="seats-info_price">{currentCoach.coach.bottom_price}</span>
                </Fragment> :
                <Fragment>
                  <span className="seats-info_price">{currentCoach.coach.top_price}</span>
                  <span></span>
                </Fragment>
                }
              </div>
              <div>
                <span className="seats-info_title">Обслуживание</span>
                <ul className="seats-info_services">
                  {currentCoach.coach.have_air_conditioning ? <li className="seats-info_service seats-info_service-air"><span></span></li> : null}
                  {currentCoach.coach.have_wifi ? <li className="seats-info_service seats-info_service-wifi"><span></span></li> : null}
                  {currentCoach.coach.is_linens_included ? <li className="seats-info_service seats-info_service-linens"><span></span></li> : null}
                  <li className="seats-info_service seats-info_service-food"><span></span></li>
                </ul>
              </div>
            </div>
          </div>
        </Fragment>) : 
        <div className="car-number_switch">В этом поезде нет мест выбранного типа</div>}
    </div>
  )
}

export {CarType}