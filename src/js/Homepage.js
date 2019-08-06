import React, { Fragment } from 'react';
import { TrainpickerForm } from './TrainpickerForm';

const Homepage = () => {
   return (
     <Fragment>
      <About/>
      <Features />
      <Reviews />
    </Fragment>
   )
}


const About = () => (
  <section class="about" id="about">
      <h2 class="about__title">О нас</h2>
      <div class="about__text">
        <p class="about__item">Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем все больше людей заказывают жд билеты через интернет.</p>
        <p class="about__item">Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать? Мы расскажем о преимуществах заказа через интернет.</p>
        <p class="about__item about__item-bold">Покупать жд билеты дешево можно за 90 суток до отправления поезда. Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.</p>
      </div>
    </section>
)

const Features = () => (
  <section class="features" id="features">
      <div class="description">
        <h2 class="description__title">Как это работает</h2>
        <button class="description__button">Узнать больше</button>
      </div>
      <div class="features__items">
        <div class="features__item features__item-monitor">Удобный заказ на сайте</div>
        <div class="features__item features__item-office">Нет необходимости ехать в офис</div>
        <div class="features__item features__item-globe">Огромный выбор направлений</div>
      </div>
    </section>
  )

const Reviews = () => (
  <section class="reviews" id="reviews">
      <h2 class="reviews__title">Отзывы</h2>
      <div class="reviews__slide">
          <div class="review">
          <img class="review__avatar" src="https://i.ibb.co/Z1RgQdZ/av-1.png" alt="av"/>
          <div class="review__content">
            <h4 class="review__author">Екатерина Вальнова</h4>
            <p class="review__text">
              Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.</p>
          </div>
      </div>
        <div class="review">
            <img class="review__avatar" src="https://i.ibb.co/47wFWkj/av-2.png" alt="av"/>
            <div class="review__content">
              <h4 class="review__author">Евгений Стрыкало</h4>
              <p class="review__text">
                СМС-сопровождение до посадки. Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.</p>
            </div>
        </div>
      </div>
      
      <div class="carousel">
        <div class="carousel__controls">
          <span class="carousel__item carousel__item-active"></span>
          <span class="carousel__item"></span>
          <span class="carousel__item"></span>
          <span class="carousel__item"></span>
          <span class="carousel__item"></span>
        </div>
        </div>
    </section>
)

export {Homepage}