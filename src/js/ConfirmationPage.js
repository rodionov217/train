import React from 'react';
import { TripDetails } from './TripDetails';
import { TrainCard } from './TrainCard';
import { CurrentTrain } from './CurrentTrain';
import {Link} from 'react-router-dom';

const ConfirmationPage = (props) => {
  const passengersList = JSON.parse(sessionStorage.passengersList);
  const passengers = JSON.parse(sessionStorage.passengers);
  const price = JSON.parse(sessionStorage.price);
  const train = JSON.parse(sessionStorage.currentTrain);
  
  
  const {paymentMethod} = props.location;

  const formatPaymentMethod = () => {
    switch (paymentMethod) {
      case "paypal": 
        return "PayPal";
      case "credit-card":
        return "Банковской картой";
      case "qiwi-wallet":
        return "Visa QIWI Wallet";
      default:
        return;
    }
  }
  return (
    <div class="columns">
      <div class="col-left">
        <TripDetails passengers={passengers} price={price}/>
      </div>

      <div class="col-right">
        <div class="confirmation">
          <div class="order_title">Поезд</div>
          <CurrentTrain info={train}/>
          {/* <TrainCard departure={train} confirmation/> */}
        </div>

        <div class="confirmation">
          <div class="order_title">Пассажиры</div>
          <PassengersList list={passengersList} />
        </div>

        <div class="confirmation">
          <div class="order_title">Способ оплаты</div>
          <div class="confirmation_payment">
            <div class="confirmation_method">{formatPaymentMethod()}</div>
            <div class="confirmation_price">
              <span>Всего:</span>
              <span>{parseInt(price).toLocaleString()}</span>
            </div>
          </div>
        </div>

        <Link to='/success' >
          <button class="purchase-button">Подтвердить</button>
        </Link>
      </div>
    </div>
  )
}

export {ConfirmationPage}


const PassengersList = (props) => {
  const {list} = props;
  return list.map((el, i) => <PassengersListItem key={i} info={el}/>)
}

const PassengersListItem = ({key, info}) => {
  return (
    <div class="passenger">
      <div class="passenger-icon">
        <div class="passenger-icon_img"></div>
        <div class="passenger-icon_title">{info.adult ? "Взрослый" : "Детский"}</div>
      </div>
      <div class="passenger-info">
        <div class="passenger-info_name">{info.name}</div>
        <div class="passenger-info_other">{info.gender}</div>
        <div class="passenger-info_other">{info.dateOfBirth}</div>
        <div class="passenger-info_other">{info.document}</div>
      </div>
    </div>
  )
}

