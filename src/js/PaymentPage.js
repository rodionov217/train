import React, { useState } from 'react';
import { TripDetails } from './TripDetails';
import MaskedInput from './MaskedInput';
import { Link } from 'react-router-dom';

const PaymentPage = (props) => {
  const passengers = JSON.parse(sessionStorage.passengers);
  const price = JSON.parse(sessionStorage.price);

  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  const handleInput = event => {
    const value = event.target.value;
    if (value.match(/[^А-Яа-яЁё]/g)) {
      return;
    }
    switch(event.target.name) {
      case "last-name":
        setLastName(value);
        break;
      case "first-name":
        setFirstName(value);
        break;
      case "patronymic": 
        setPatronymic(value);
        break;
      default: 
        return;
    }
  }

  const handleEmail = event => {
    const value = event.target.value;
    if (value.match(/[^a-zA-Z0-9,_,-,@,.]/)) {
      return;
    }
    setEmail(value);
  }

  const handlePayment = event => {
    setPaymentMethod(event.currentTarget.id);
  }

  
  const isEmailValid = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email);

  const isPhoneIncomplete = /_/.test(phone);
  
  const isNameComplete = firstName && lastName && patronymic;
  
  return (
    <div class="columns">
      <div class="col-left">
        <TripDetails passengers={passengers} price={price}/>
      </div>
      <div class="col-right">
      <div class="order">
        <form class="order-details" id="order-details">
          <div class="order_title">Персональные данные</div>
            <fieldset class="order_payer">
              <div class="personal-details">
                  <label for="last-name">Фамилия
                    <input required value={lastName} onChange={handleInput} type="text" name="last-name" class="passengers-card_last-name" id=""/>
                  </label>
                  <label for="first-name">Имя
                    <input required value={firstName} onChange={handleInput} type="text" name="first-name" class="passengers-card_name" id=""/>
                  </label>
                  <label for="patronymic">Отчество
                    <input required value={patronymic} onChange={handleInput} type="text" name="patronymic" class="passengers-card_patronymic-name" id=""/>
                  </label>
              </div>
              <div class="contact-details">
                  <label for="">Контактный телефон
                    <MaskedInput  value={phone} onChange={value => setPhone(value)} prefix="+7" inputmask={['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}/>
                    {isPhoneIncomplete ? <div style={{color: "red"}}>Введите 10 цифр номера телефона без +7 и пробелов в формате 987 654 3210</div> : ""}
                  </label>
                  <label for="">Email
                    <input value={email} onChange={handleEmail} type="email" name="email" id="" placeholder="email@mail.ru"/>
                    {isEmailValid ? "" : <div style={{color: "red"}}>Введите корректный email в формате email@mail.ru</div>}
                  </label>
              </div>
            </fieldset>
 
            <div class="order_title">Способ оплаты</div>
            
            <fieldset class="payment-methods">
              <div>
                <input onChange={handlePayment} defaultChecked type="radio" name="payment-method" id="credit-card"/>
                <label for="credit-card">Банковской картой
                </label>

                <input onChange={handlePayment} type="radio" name="payment-method" id="paypal"/>
                <label for="paypal">PayPal
                </label>

                <input onChange={handlePayment} type="radio" name="payment-method" id="qiwi-wallet"/>
                <label for="qiwi-wallet">Visa QIWI Wallet
                </label>
              </div>
            </fieldset>
        </form>

      </div>
        <Link to={{ pathname: '/confirmation', paymentMethod: paymentMethod}}>
          <button onClick={() => sessionStorage.payer = JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            patronymic: patronymic,
            phone: phone,
            email: email,
            payment_method: "online"
            })} class="purchase-button" disabled={!(isEmailValid && !isPhoneIncomplete && isNameComplete)}>Купить билеты</button>
        </Link>
      </div>
    </div>
    
  )
}

export {PaymentPage}