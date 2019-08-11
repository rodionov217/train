import React, { useEffect, useRef, useState, useContext } from 'react';
import RangeSlider from 'react-ion-slider';
import Switches from './CustomSwitch';
import {ApiServiceContext} from './context';
import { Datepicker } from './Datepicker';


const FiltersForm = (props) => {
  const api = useContext(ApiServiceContext);
  const params = props.searchParams || JSON.parse(sessionStorage.searchParams);
  
  const [cost, setCost] = useState({from: 500, to: 7000});
  const [departureTime, setDepartureTime] = useState({from: 0, to: 24});
  const [arrivalTime, setArrivalTime] = useState({from: 0, to: 24});
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(true);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [express, setExpress] = useState(false);
  const [wifi, setWifi] = useState(true);
  //const [filters, setFilters] = useState('');

  
//&start_departure_hour_from=${departureTime.from}&start_departure_hour_to=${departureTime.to}&start_arrival_hour_from=${arrivalTime.from}&start_arrival_hour_to=${arrivalTime.to}

    params.filters = `price_from=${cost.from}&price_to=${cost.to}${first ? '&have_first_class=true' : ''}${second ? '&have_second_class=true' : ''}${third ? '&have_third_class=true' : ''}${fourth ? '&have_fourth_class=true' : ''}${wifi ? '&have_wifi=true' : ''}${express ? '&have_express=true' : ''}`;


 /*  useEffect(() => {
    props.update(params.filters);
  }, [params.filters]); */

  const addFilters = event => {
    event.preventDefault();
    props.update(params.filters)
  }

  const resetFilters = event => {
    event.preventDefault();

    setCost({from: 500, to: 7000});
    setDepartureTime({from: 0, to: 24});
    setArrivalTime({from: 0, to: 24});
    params.filters = '';
    window.location.href = '/search';
    /* api.getRoutes(params)
      .then(response => props.setTrains(response.items)) */;
  }

  console.log(params.filters);
  return (
    <form action="" class="search-form ">
         <fieldset class="search-form__set" >
           <div class="date-filter" >
              <label class="trainpicker_label">Дата поездки</label>
              <Datepicker 
                  style={{width: "240px", height: "50px"}} 
                  onDateSelect={date => {
                    sessionStorage.travelDate = date;
                  }}
                  defaultDate={new Date()}
                  />
              
           </div>
         </fieldset>
         <fieldset class="seat-types">
           <Switches 
            first={first}
            second={second}
            third={third}
            fourth={fourth}
            express={express}
            wifi={wifi}
            setFirst={() => setFirst(!first)}
            setSecond={() => setSecond(!second)}
            setThird={() => setThird(!third)}
            setFourth={() => setFourth(!fourth)}
            setExpress={() => setExpress(!express)}
            setWifi={() => setWifi(!wifi)}
          />
         </fieldset>
         <fieldset class="cost-picker" >
           <label class="trainpicker_label">Стоимость</label>
           <RangeSlider 
              onChange={data => setCost({from: data.from, to: data.to})}
              type="double"
              grid={false}
              from={cost.from}
              to={cost.to}
              min={500}
              max={7000}
              hide_min_max={true}
              skin="material"/>
         </fieldset>
         <fieldset class="time-picker">
            <label class="trainpicker_label">Время</label>
            <label class="range-picker_label" for="">Время отправления</label>
            <RangeSlider 
              onChange={data => {
                setDepartureTime({from: data.from, to: data.to});
                //props.handleTime({from: data.from, to: data.to}, arrivalTime)
              }}
              type="double"
              grid={false}
              from={departureTime.from}
              to={departureTime.to}
              min={0}
              max={24}
              hide_min_max={ false}
              skin="material"
              prettify={n => n + ':00'}/>

            <label class="range-picker_label" for="">Время прибытия</label>
            <RangeSlider 
              onChange={data => setArrivalTime({from: data.from, to: data.to})}
              type="double"
              grid={false}
              from={arrivalTime.from}
              to={arrivalTime.to}
              min={0}
              max={24}
              hide_min_max={ false}
              skin="material"
              prettify={n => n + ':00'}/>

         </fieldset>
        <button onClick={addFilters} class="filters__button">Применить</button>
        <button onClick={resetFilters} class="filters__button">Сбросить</button>
       </form>
  )
}

export {FiltersForm}