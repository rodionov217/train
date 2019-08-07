import React, { Fragment, useContext, useState, useEffect } from 'react';
import {TrainpickerForm} from './TrainpickerForm'
import {ProgressSteps} from './ProgressSteps'
import { FiltersForm } from './FiltersForm';
import { LastTickets } from './LastTickets'
import { TrainCard } from './TrainCard';

import {ApiServiceContext} from './context';



const SearchPage = (props) => {
  const api = useContext(ApiServiceContext);
  const {trains, setTrains} = props;
  const params = props.searchParams || JSON.parse(sessionStorage.searchParams);

  const [showNotice, setShowNotice] = useState(false);
  useEffect(() => {
    api.getRoutes(params)
        .then(response => {
            sessionStorage.trains = JSON.stringify(response.items);
            setTrains(response.items);
            if (response.items === 0) {
              setShowNotice(true);
            } 
          }
        );
  }, [params.from.name, params.to.name]);

  
  return trains.length > 0 ? (
    <Fragment>
      <section class="columns">
        <div class="col-left">
          <FiltersForm />
          <LastTickets />
        </div>
        <div class="col-right">
          {trains.map(train => <TrainCard 
                                departure={train.departure} 
                                currentTrain={props.currentTrain} 
                                setCurrentTrain={props.setCurrentTrain}/>)}
        </div>
      </section>
    </Fragment>
  ) : 
  showNotice ? <div>Ничего не найдено...</div> : <div class="loader"><div class="loader_image"></div></div>
}

export {SearchPage}
