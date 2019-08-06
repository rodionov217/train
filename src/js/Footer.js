import React from 'react';

const Footer = () => (
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
        <form action="" class="subscription-form">
          <label class="subscription-form__label">Будьте в курсе событий</label>
            <input class="subscription-form__input" type="email" name="subscription" placeholder="e-mail"/>
          <button class="subscription-form__button" type="submit">Отправить</button>
        </form>
        <h3 class="footer__title">Подписывайтесь на нас</h3>
        <ul class="social">
          <li class="social__item">
            <a href="" class="social__link social__link-youtube">
              </a></li>
          <li class="social__item">
            <a href="" class="social__link social__link-linkedIn">
              </a></li>
          <li class="social__item">
            <a href="" class="social__link social__link-googlePlus">
              </a></li>
          <li class="social__item">
            <a href="" class="social__link social__link-facebook">
              </a></li>
          <li class="social__item">
            <a href="" class="social__link social__link-twitter">
              </a></li>
        </ul>
      </div>
    </div>
      <div class="footer-additional">
          <div class="footer__logo"><a class="logo__link" href="#">Лого</a></div>
          <div class="footer__home-arrow">
            <a href="#main" class="home-arrow__link"></a>
          </div>
          <div class="footer__copyright">2018 WEB</div>
      </div>
    </footer>
)

export {Footer};