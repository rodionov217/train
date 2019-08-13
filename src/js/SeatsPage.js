import React, { Fragment, useContext, useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { CurrentTrain } from './CurrentTrain';
import { TicketsNumber } from './TicketsNumber'
import { CarType } from './CarType';
import { CarScheme } from './CarScheme';
import {ApiServiceContext} from './context'

const SeatsPage = (props) => {
  /* console.log(props); */
  const api = useContext(ApiServiceContext);
  const [data, setData] = useState([]);
  const [coaches, setCoaches] = useState([]);
  const [chosen, setChosen] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [currentType, setCurrentType] = useState('');
  const [currentCoach, setCurrentCoach] = useState('');
  const [adultSeats, setAdultSeats] = useState(1);
  const [childrenSeats, setChildrenSeats] = useState(0);


  const currentTrain = props.currentTrain || JSON.parse(sessionStorage.currentTrain);
  const id = currentTrain['_id'];
  
  useEffect(() => {
      api.getSeats(id)
        .then(response => {
          setData(response);
          setCurrentType(response[0].coach.class_type);
          setCoaches(response.filter(el => el.coach.class_type === response[0].coach.class_type));
          setCurrentCoach(response[0])
          sessionStorage.trainId = id;
          /* console.log(response); */
        })
    
}, [id]);
  return currentType &&  data ? (
    
    <div>
    <div class="seats-choice" >
      <div class="change-train change-train-to">
        <span class="change-train_arrow">
            <i class="material-icons">arrow_forward</i>
        </span>
        <Link to="/search" class="change-train_button">Выбрать другой поезд</Link>
      </div>

      <CurrentTrain info={currentTrain} />
      <TicketsNumber 
        passengers={{adults: adultSeats, children: childrenSeats}}
        setAdultSeats={seats => setAdultSeats(seats)}
        setChildrenSeats={seats => setChildrenSeats(seats)}
         />
      <CarType 
        coaches={data.filter(el => el.coach.class_type === currentType)} 
        currentType={currentType} 
        currentCoach={currentCoach}
        setCurrentType={type => {
          setCurrentType(type);
          setChosen([]);
          setTotalPrice(0);
        }}
        setCurrentCoach={coach => setCurrentCoach(coach)}/>
      {currentCoach && <CarScheme 
        passengers={adultSeats + childrenSeats}
        type={currentType} 
        coach={currentCoach}
        topPrice={currentCoach.coach.top_price}
        bottomPrice={currentCoach.coach.bottom_price}
        sidePrice={currentCoach.coach.side_price}
        chosen={chosen}
        setChosen={seat => {
          const chosenSeats = chosen.slice();
          chosenSeats.push(seat);
          setChosen(chosenSeats);
        }}
        cancelChosen={seat => {
          const chosenSeats = chosen.slice();
          const seatToCancel = chosenSeats.findIndex(el => el.index === seat.index);
          chosenSeats.splice(seatToCancel, 1);
          setChosen(chosenSeats);
        }}
        setTotalPrice={price => setTotalPrice(totalPrice + price)}
        />}
      <div class="total-price">{parseInt(totalPrice).toLocaleString()}</div>
    </div>

    <div class="to-order-button-container">
      <Link to={{
        pathname: '/passengers', 
        passengers: {adults: adultSeats, children: childrenSeats},
        seats: chosen,
        price: totalPrice
        }}>
          <button class="to-order-button" 
            disabled={chosen.length === 0 || adultSeats + childrenSeats !== chosen.length}>Далее</button>
      </Link>
    </div>
    </div>
    ) : <div class="loader"><div class="loader_image"></div></div>
  
}

export {SeatsPage}