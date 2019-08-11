import React, { Fragment, useContext, useState, useEffect } from 'react';
import {TrainpickerForm} from './TrainpickerForm'
import {ProgressSteps} from './ProgressSteps'
import { FiltersForm } from './FiltersForm';
import { LastTickets } from './LastTickets'
import { TrainCard } from './TrainCard';
import { Pagination } from './Pagination'; 

import {ApiServiceContext} from './context';



const SearchPage = (props) => {
  const api = useContext(ApiServiceContext);
  const {trains, setTrains} = props;
console.log(trains);

  const params = props.searchParams || JSON.parse(sessionStorage.searchParams);

  const [showNotice, setShowNotice] = useState(false);
  const [count, setCount] = useState(0);
  const [sortBy, setSortBy] = useState('duration');
  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [cost, setCost] = useState({from: 500, to: 7000});
  const [departureTime, setDepartureTime] = useState({from: 0, to: 24});
  const [arrivalTime, setArrivalTime] = useState({from: 0, to: 24});
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [express, setExpress] = useState(false);
  const [wifi, setWifi] = useState(false);

  const update = (filters) => {
    params.filters = filters; 

    api.getRoutes(params, sortBy, limit, offset)
    .then(response => {
        sessionStorage.trains = JSON.stringify(response.items);
        const count = response.items.length === 0 ? 0 : response.total_count;
        setCount(count);
        setTrains(response.items);
        if (response.items.length === 0) {
          setShowNotice(true);
        } 
      }
    );

  }

/*   const handleTime = (departureTime, arrivalTime) => {
    console.log(trains);

    const isInTimeRange = train => {
      const trainDeparture = (new Date(train.departure.from.datetime * 1000)).getHours();
      const trainArrival = (new Date(train.departure.to.datetime * 1000)).getHours();
      
      console.log(trainDeparture, trainArrival);
      return trainDeparture >= departureTime.from && trainDeparture <= departureTime.to;
    }
    //isInTimeRange(trains[0]);
    let sortedTrains = trains.filter(isInTimeRange);
    
    console.log(sortedTrains)
    //setTrains(sortedTrains);
  } */

  useEffect(() => {
    update();
  }, [params.from.name, params.to.name, sortBy, limit, offset]);

  const handleSortBy = event => {
    const list = event.currentTarget;
    const item = event.target;
    list.classList.toggle('sort_list-open');
    Array.from(list.children).forEach(el => el.classList.remove('sort-by-current'));
    item.classList.add('sort-by-current');
    setSortBy(item.dataset.sort);
    setCurrentPage(1);
  }
  
  const handleLimit = event => {
    if (!event.target.classList.contains('limit-by')) {
      return;
    }
    const list = event.currentTarget;
    const item = event.target;
    Array.from(list.children).forEach(el => el.classList.remove('limit-by-current'));
    item.classList.add('limit-by-current');
    setLimit(item.dataset.limit);
    setCurrentPage(1);
  }

  const setPage = (page) => {
    setOffset(limit * (page - 1));
    setCurrentPage(page);
  }

  return  (
    <Fragment>
      <section class="columns">
        <div class="col-left">
          <FiltersForm {...props}
            /* handleTime={handleTime} */
            update={update}
            />
          <LastTickets />
        </div>
        <div class="col-right">
          <div class="results-display">
            <div class="trains-count">
              <span class="results-option">Найдено</span>
              <span>{count}</span>
            </div>
            <div class="sort">
              <span class="results-option">сортировать по:</span>
              <ul onClick={handleSortBy} class="sort_list">
                <li class="sort-by" data-sort="date">отправлению</li>
                <li class="sort-by sort-by-current" data-sort="duration">длительности</li>
              </ul>
            </div>
            <div class="limit">
              <span class="results-option">показывать по:</span>
              <ul class="limit_list" onClick={handleLimit}>
                <li class="limit-by limit-by-current" data-limit={5}>5</li>
                <li class="limit-by" data-limit={10}>10</li>
                <li class="limit-by" data-limit={20}>20</li>
              </ul>
            </div>
          </div>
          {trains.length > 0 ? 
            trains.map(train => <TrainCard 
                                departure={train.departure} 
                                currentTrain={props.currentTrain} 
                                setCurrentTrain={props.setCurrentTrain}/>) :
            showNotice ? <div class="not-found-notice">К сожалению, ничего не найдено. Попробуйте изменить параметры поиска.</div> : <div class="loader"><div class="loader_image"></div></div>
          }

          <Pagination 
              trains={trains}
              count={count} 
              limit={limit} 
              currentPage={currentPage}
              setCurrentPage={setPage}/> 
        </div>
      </section>
    </Fragment>
  )
  
}

export {SearchPage}
