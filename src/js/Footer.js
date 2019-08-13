import React, { useContext, useState } from 'react';
import {ApiServiceContext} from './context';


const Footer = () => {
  const api = useContext(ApiServiceContext);
  const [email, setEmail] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  
  const handleInput = event => {
    const value = event.target.value;
    if (value.match(/[^a-zA-Z0-9,_,-,@,.]/)) {
      return;
    }
    setEmail(value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (/^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/.test(email)) {
      api.subscribe(email);
      setShowHint(false);
      setShowThankYou(true);
      setEmail('');
    } else {
      setShowHint(true);
      //setShowThankYou(false);
    }
  }



  return (
  <footer class="footer" id="footer">
      <div class="footer footer-main">
      <div class="contacts">
        <h3 class="footer__title">Свяжитесь с нами</h3>
        <ul class="contacts__list">
          <li class="contacts__item contacts__item-phone">8 (800) 000 00 00</li>
          <li class="contacts__item contacts__item-email">inbox@mail.ru</li>
          <li class="contacts__item contacts__item-skype">tu.train.tickets</li>
          <li class="contacts__item contacts__item-address"> г. Москва <br/> ул. Московская 27-35 <br/>  555 555</li>
        </ul>
      </div>
      <div class="subscription">
        <h3 class="footer__title">Подписка</h3>
        <form onSubmit={handleSubmit} action="" class="subscription-form">
          <label class="subscription-form__label">Будьте в курсе событий</label>
            <div><input value={email} onChange={handleInput} class="subscription-form__input" type="email" name="subscription" placeholder="e-mail"/>
            <div style={{visibility: showHint ? "visible" : "hidden" }} class="subscription_hint">Введите корректный email в формате email@mail.ru</div></div>
          <button class="subscription-form__button"  type="submit">Отправить</button>
            <div style={{visibility: showThankYou ? "visible" : "hidden"}} class="subscription_thankyou">Спасибо за подписку!</div>
        </form>
        <h3 class="footer__title">Подписывайтесь на нас</h3>
        <ul class="social">
          <li class="social__item">
            <a href="" class="social__link social__link-youtube">
            <i class="fab fa-youtube"></i>
              </a></li>
          <li class="social__item">
            <a href="" class="social__link social__link-linkedIn">
            <i class="fab fa-linkedin-in"></i>
              </a></li>
          <li class="social__item">
            <a href="" class="social__link social__link-googlePlus">
            <i class="fab fa-google-plus-g"></i>
              </a></li>
          <li class="social__item">
            <a href="" class="social__link social__link-facebook">
            <i class="fab fa-facebook-f"></i>
              </a></li>
          <li class="social__item">
            <a href="" class="social__link social__link-twitter">
            <i class="fab fa-twitter"></i>
              </a></li>
        </ul>
      </div>
    </div>
      <div class="footer-additional">
          <div class="footer__logo"><a class="logo__link" href="#">TrainBooking</a></div>
          <div class="footer__home-arrow" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}></div>
          <div class="footer__copyright">2018 WEB</div>
      </div>
    </footer>
)
  }

export {Footer};