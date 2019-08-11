import React, { useState } from 'react'

const TicketsNumber = ({passengers, setAdultSeats, setChildrenSeats, setChildrenWithoutSeats}) => {
  const [totalPassengers, setTotalPassengers] = useState(passengers.adults + passengers.children);
  const handleChange = event => {
    const type = event.currentTarget.dataset.name;

    const op = (value) => {
      if (event.currentTarget.dataset.op === "inc") {
        return value + 1;
      }
      return value - 1;
    } 

    switch (type) {
      case "children":
        if (totalPassengers <= 4) {
          setChildrenSeats(op(passengers.children));
        }
        break;
      case "childrenwithoutSeats":
          if (totalPassengers <= 4) {
        setChildrenWithoutSeats(op(passengers.childrenWithoutSeats));
          }
        break;
      case "adults":
        setAdultSeats(op(passengers.adults));
        break;
      default:
        return;
    }
  }
  return (
    <div class="tickets-number">
      <h2>Количество билетов</h2>
      <form class="tickets-number_boxes">
        <div class="tickets-number_box">
          <div class="tickets-number_count">
            <div className="tickets-number_title">Взрослых:</div> 
            <span className="tickets-number_control dec" data-op="dec" data-name="adults" onClick={handleChange}>–</span>
            <span className="tickets-number_counter">{passengers.adults}</span>
            <span className="tickets-number_control inc" data-op="inc" data-name="adults" onClick={handleChange}>+</span>
          </div>
          <div class="tickets-number_hint">
            {4 - passengers.adults - passengers.children > 0 ? 
            `Можно добавить еще ${4 - passengers.adults - passengers.children} пассажиров` :
            "В одном заказе можно оформить не больше 4 билетов"
            }
            </div>
        </div>

        <div class="tickets-number_box">
          <div class="tickets-number_count">
            <div className="tickets-number_title">Детских: </div>
            <span className="tickets-number_control dec" data-op="dec" data-name="children" onClick={handleChange}>–</span>
            <span className="tickets-number_counter">{passengers.children}</span>
            <span className="tickets-number_control inc" data-op="inc" data-name="children" onClick={handleChange}>+</span>
          </div>
          <div class="tickets-number_hint">
            {4 - passengers.adults - passengers.children > 0 ? 
              `Можно добавить еще ${4 - passengers.adults - passengers.children} детей до 10 лет` :
              "4 билета уже выбрано"
            }
          </div>
        </div>

        {/* <div class="tickets-number_box">
          <div class="tickets-number_count">
            <div className="tickets-number_title">Детских без места: </div>
            <span className="tickets-number_control dec" data-op="dec" data-name="childrenWithoutSeats" onClick={handleChange}>–</span>
            <span className="tickets-number_counter">{passengers.childrenWithoutSeats}</span>
            <span className="tickets-number_control inc" data-op="inc" data-name="childrenWithoutSeats" onClick={handleChange}>+</span>
          </div>
          <div class="tickets-number_hint">С одним взрослым пассажиром может поехать только один ребенок без места
          Ребенок едет на одном месте со взрослым, зато бесплатно </div>
        </div> */}
      </form>
    </div>
  )
}

export {TicketsNumber}